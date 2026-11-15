import { Ionicons } from "@expo/vector-icons";
import { TopTabs } from "expo-router/js-top-tabs";
import { createContext, useContext, useState, type ReactNode } from "react";

/* ===== State bersama antar tab (Tantangan 3) ===== */
export type Prodi =
  | "Manajemen Informatika"
  | "Teknik Informatika"
  | "Sistem Informasi";

export interface MahasiswaItem {
  id: string;
  nim: string;
  nama: string;
  prodi: Prodi;
  status: "Aktif" | "Cuti";
  noHp: string;
  angkatan: string;
}

const DATA_AWAL: MahasiswaItem[] = [
  {
    id: "1",
    nim: "2610034",
    nama: "Rahmat Ardian",
    prodi: "Sistem Informasi",
    status: "Aktif",
    noHp: "083187103434",
    angkatan: "2026",
  },
  {
    id: "2",
    nim: "2610035",
    nama: "Fadli Ansyari",
    prodi: "Sistem Informasi",
    status: "Aktif",
    noHp: "082155659013",
    angkatan: "2026",
  },
  {
    id: "3",
    nim: "2200022",
    nama: "Samudra Alfatih",
    prodi: "Manajemen Informatika",
    status: "Aktif",
    noHp: "081387785523",
    angkatan: "2022",
  },
  {
    id: "4",
    nim: "2510034",
    nama: "Dimas Putra",
    prodi: "Sistem Informasi",
    status: "Cuti",
    noHp: "083187870912",
    angkatan: "2025",
  },
  {
    id: "5",
    nim: "2310010",
    nama: "Hayatul Fauzi",
    prodi: "Teknik Informatika",
    status: "Aktif",
    noHp: "081327877901",
    angkatan: "2023",
  },
  {
    id: "6",
    nim: "2200008",
    nama: "Dicky Realtri",
    prodi: "Manajemen Informatika",
    status: "Cuti",
    noHp: "085812218906",
    angkatan: "2022",
  },
];

type BaruInput = Omit<MahasiswaItem, "id" | "status">;

interface MahasiswaContextType {
  daftar: MahasiswaItem[];
  tambah: (data: BaruInput) => void;
}

const MahasiswaContext = createContext<MahasiswaContextType | null>(null);

function MahasiswaProvider({ children }: { children: ReactNode }) {
  const [daftar, setDaftar] = useState<MahasiswaItem[]>(DATA_AWAL);

  const tambah = (data: BaruInput) => {
    const baru: MahasiswaItem = {
      ...data,
      id: Date.now().toString(),
      status: "Aktif",
    };
    // Salinan array baru (bukan push); data terbaru tampil paling atas
    setDaftar((lama) => [baru, ...lama]);
  };

  return (
    <MahasiswaContext.Provider value={{ daftar, tambah }}>
      {children}
    </MahasiswaContext.Provider>
  );
}

// Dipakai oleh index.tsx, input.tsx, dan report.tsx
export function useMahasiswa() {
  const ctx = useContext(MahasiswaContext);
  if (!ctx)
    throw new Error("useMahasiswa harus dipakai di dalam folder mahasiswa/");
  return ctx;
}

/* ===== Konfigurasi Top Tabs (Langkah 2 + Tantangan 1) ===== */
export default function MahasiswaTopTabsLayout() {
  return (
    <MahasiswaProvider>
      <TopTabs
        screenOptions={{
          tabBarActiveTintColor: "#072deb",
          tabBarInactiveTintColor: "#64748b",
          tabBarShowIcon: true, // wajib agar ikon tampil di Top Tabs
          tabBarIndicatorStyle: { backgroundColor: "#072deb", height: 3 },
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: "bold",
            textTransform: "none",
          },
          tabBarStyle: {
            backgroundColor: "#ffffff",
            elevation: 2,
            shadowOpacity: 0.08,
          },
        }}
      >
        <TopTabs.Screen
          name="index"
          options={{
            title: "Data",
            tabBarIcon: ({ color }) => (
              <Ionicons name="list" size={18} color={color as string} />
            ),
          }}
        />
        <TopTabs.Screen
          name="input"
          options={{
            title: "Input",
            tabBarIcon: ({ color }) => (
              <Ionicons name="add-circle" size={18} color={color as string} />
            ),
          }}
        />
        <TopTabs.Screen
          name="report"
          options={{
            title: "Report",
            tabBarIcon: ({ color }) => (
              <Ionicons name="stats-chart" size={18} color={color as string} />
            ),
          }}
        />
      </TopTabs>
    </MahasiswaProvider>
  );
}
