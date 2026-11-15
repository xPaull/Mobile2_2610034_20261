import { authStyles } from "@/styles/authStyles";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterScreen() {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [prodi, setProdi] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [focusedField, setFocusedField] = useState<
    "nama" | "nim" | "prodi" | "email" | "password" | "confirm" | null
  >(null);

  const handleRegister = () => {
    if (
      !nama.trim() ||
      !nim.trim() ||
      !prodi.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      Alert.alert("Pendaftaran Gagal", "Semua kolom formulir wajib diisi.");
      return;
    }
    if (password.length < 6) {
      Alert.alert(
        "Kata Sandi Lemah",
        "Kata sandi minimal terdiri dari 6 karakter.",
      );
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert(
        "Tidak Cocok",
        "Konfirmasi kata sandi tidak sama dengan kata sandi.",
      );
      return;
    }

    // Berhasil daftar, langsung arahkan ke menu tabs/mahasiswa dengan membawa data lengkap
    Alert.alert(
      "Pendaftaran Berhasil!",
      `Akun atas nama ${nama.trim()} berhasil dibuat.`,
      [
        {
          text: "Masuk ke Aplikasi",
          onPress: () =>
            router.replace({
              pathname: "/(tabs)/mahasiswa",
              params: {
                nama: nama.trim(),
                nim: nim.trim(),
                prodi: prodi.trim(),
                email: email.trim(),
              },
            }),
        },
      ],
    );
  };

  return (
    <SafeAreaView style={authStyles.safeArea}>
      <KeyboardAvoidingView
        style={authStyles.flexContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={authStyles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Tombol Kembali Kustom */}
          <TouchableOpacity
            style={authStyles.topBackButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={20} color="#0F172A" />
          </TouchableOpacity>

          <View style={authStyles.headerArea}>
            <View style={authStyles.logoBadge}>
              <Ionicons name="person-add" size={28} color="#2563EB" />
            </View>
            <Text style={authStyles.title}>Buat Akun Baru</Text>
            <Text style={authStyles.subtitle}>
              Lengkapi data diri dan akademik Anda
            </Text>
          </View>

          <View style={authStyles.card}>
            {/* Nama Lengkap */}
            <View style={authStyles.formGroup}>
              <Text style={authStyles.label}>Nama Lengkap</Text>
              <View
                style={[
                  authStyles.inputWrapper,
                  focusedField === "nama" && authStyles.inputWrapperFocused,
                ]}
              >
                <Ionicons
                  name="person-outline"
                  size={20}
                  color={focusedField === "nama" ? "#2563EB" : "#64748B"}
                  style={authStyles.inputIcon}
                />
                <TextInput
                  style={authStyles.input}
                  placeholder="Contoh: Fadli Ansyari"
                  placeholderTextColor="#94A3B8"
                  value={nama}
                  onChangeText={setNama}
                  onFocus={() => setFocusedField("nama")}
                  onBlur={() => setFocusedField(null)}
                />
              </View>
            </View>

            {/* NIM */}
            <View style={authStyles.formGroup}>
              <Text style={authStyles.label}>NIM</Text>
              <View
                style={[
                  authStyles.inputWrapper,
                  focusedField === "nim" && authStyles.inputWrapperFocused,
                ]}
              >
                <Ionicons
                  name="card-outline"
                  size={20}
                  color={focusedField === "nim" ? "#2563EB" : "#64748B"}
                  style={authStyles.inputIcon}
                />
                <TextInput
                  style={authStyles.input}
                  placeholder="Contoh: 2510036"
                  placeholderTextColor="#94A3B8"
                  keyboardType="numeric"
                  value={nim}
                  onChangeText={setNim}
                  onFocus={() => setFocusedField("nim")}
                  onBlur={() => setFocusedField(null)}
                />
              </View>
            </View>

            {/* Program Studi */}
            <View style={authStyles.formGroup}>
              <Text style={authStyles.label}>Program Studi</Text>
              <View
                style={[
                  authStyles.inputWrapper,
                  focusedField === "prodi" && authStyles.inputWrapperFocused,
                ]}
              >
                <Ionicons
                  name="school-outline"
                  size={20}
                  color={focusedField === "prodi" ? "#2563EB" : "#64748B"}
                  style={authStyles.inputIcon}
                />
                <TextInput
                  style={authStyles.input}
                  placeholder="Contoh: Sistem Informasi"
                  placeholderTextColor="#94A3B8"
                  value={prodi}
                  onChangeText={setProdi}
                  onFocus={() => setFocusedField("prodi")}
                  onBlur={() => setFocusedField(null)}
                />
              </View>
            </View>

            {/* Email */}
            <View style={authStyles.formGroup}>
              <Text style={authStyles.label}>Alamat Email</Text>
              <View
                style={[
                  authStyles.inputWrapper,
                  focusedField === "email" && authStyles.inputWrapperFocused,
                ]}
              >
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={focusedField === "email" ? "#2563EB" : "#64748B"}
                  style={authStyles.inputIcon}
                />
                <TextInput
                  style={authStyles.input}
                  placeholder="nama@kampus.ac.id"
                  placeholderTextColor="#94A3B8"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
              </View>
            </View>

            {/* Password */}
            <View style={authStyles.formGroup}>
              <Text style={authStyles.label}>Kata Sandi</Text>
              <View
                style={[
                  authStyles.inputWrapper,
                  focusedField === "password" && authStyles.inputWrapperFocused,
                ]}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color={focusedField === "password" ? "#2563EB" : "#64748B"}
                  style={authStyles.inputIcon}
                />
                <TextInput
                  style={authStyles.input}
                  placeholder="Minimal 6 karakter"
                  placeholderTextColor="#94A3B8"
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                />
                <TouchableOpacity
                  style={authStyles.eyeButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color="#64748B"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Konfirmasi Password */}
            <View style={authStyles.formGroup}>
              <Text style={authStyles.label}>Konfirmasi Kata Sandi</Text>
              <View
                style={[
                  authStyles.inputWrapper,
                  focusedField === "confirm" && authStyles.inputWrapperFocused,
                ]}
              >
                <Ionicons
                  name="checkmark-circle-outline"
                  size={20}
                  color={focusedField === "confirm" ? "#2563EB" : "#64748B"}
                  style={authStyles.inputIcon}
                />
                <TextInput
                  style={authStyles.input}
                  placeholder="Ulangi kata sandi"
                  placeholderTextColor="#94A3B8"
                  secureTextEntry={!showConfirm}
                  autoCapitalize="none"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  onFocus={() => setFocusedField("confirm")}
                  onBlur={() => setFocusedField(null)}
                />
                <TouchableOpacity
                  style={authStyles.eyeButton}
                  onPress={() => setShowConfirm(!showConfirm)}
                >
                  <Ionicons
                    name={showConfirm ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color="#64748B"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={authStyles.primaryButton}
              activeOpacity={0.85}
              onPress={handleRegister}
            >
              <Text style={authStyles.primaryButtonText}>Daftar Akun</Text>
              <Ionicons name="checkmark" size={19} color="#FFFFFF" />
            </TouchableOpacity>

            <View style={[authStyles.footerRow, { marginTop: 18 }]}>
              <Text style={authStyles.footerText}>Sudah memiliki akun?</Text>
              <TouchableOpacity onPress={() => router.back()}>
                <Text style={authStyles.footerLink}>Masuk di sini</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
