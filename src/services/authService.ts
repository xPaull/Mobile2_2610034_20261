import { API_ENDPOINTS } from "@/config/api";

export interface UserData {
  id: number;
  name: string;
  email: string;
  no_hp: string | null;
  foto: string | null;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token: string;
  user: UserData;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  no_hp: string;
  password: string;
  password_confirmation: string;
}

// Helper pembantu agar parsing error dari Laravel 13 seragam dan rapi
async function handleApiResponse<T>(response: Response): Promise<T> {
  const data = await response.json().catch(() => null);
  if (!response.ok) {
    // Jika Laravel mengembalikan error validasi 422 (misal: { errors: { email: ["..."] } })
    if (data?.errors) {
      const firstKey = Object.keys(data.errors)[0];
      const firstMsg = data.errors[firstKey]?.[0];
      if (firstMsg) {
        throw new Error(firstMsg);
      }
    }
    throw new Error(
      data?.message ||
        `Permintaan gagal dengan status HTTP ${response.status}.`,
    );
  }
  return data as T;
}

// 1. Perintah API Login
export async function loginApi(payload: LoginPayload): Promise<AuthResponse> {
  try {
    const response = await fetch(API_ENDPOINTS.LOGIN, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await handleApiResponse<AuthResponse>(response);
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(
        "Tidak dapat terhubung ke server Laravel. Pastikan server berjalan (--host=0.0.0.0) dan IP Wi-Fi sudah sesuai.",
      );
    }
    throw error;
  }
}

// 2. Perintah API Register
export async function registerApi(
  payload: RegisterPayload,
): Promise<AuthResponse> {
  try {
    const response = await fetch(API_ENDPOINTS.REGISTER, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await handleApiResponse<AuthResponse>(response);
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(
        "Tidak dapat terhubung ke server Laravel. Periksa koneksi Wi-Fi dan alamat API_BASE_URL.",
      );
    }
    throw error;
  }
}

// 3. Perintah API Logout (Menghapus token di database server)
export async function logoutApi(token: string): Promise<void> {
  try {
    await fetch(API_ENDPOINTS.LOGOUT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch {
    // Jika jaringan sedang terputus saat logout, sesi lokal di HP tetap kita bersihkan
  }
}
