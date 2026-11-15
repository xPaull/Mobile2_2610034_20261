import { homeStyles } from "@/styles/homeStyles";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { email } = useLocalSearchParams<{ email?: string }>();

  const handleLogout = () => {
    router.replace("/login");
  };

  return (
    <SafeAreaView style={homeStyles.safeArea} edges={["bottom"]}>
      <View style={homeStyles.container}>
        <View style={homeStyles.contentArea}>
          {/* Kartu Sambutan Sederhana */}
          <View style={homeStyles.welcomeCard}>
            <View style={homeStyles.statusBadge}>
              <Ionicons name="checkmark-circle" size={15} color="#059669" />
              <Text style={homeStyles.statusBadgeText}>
                Berhasil Masuk (UI Mode)
              </Text>
            </View>
            <Text style={homeStyles.greetingTitle}>Halo, Selamat Datang!</Text>
            <Text style={homeStyles.greetingEmail}>
              {email || "mahasiswa@kampus.ac.id"}
            </Text>
            <Text style={homeStyles.greetingDesc}>
              Ini adalah halaman awal (Homepage) sederhana setelah berhasil
              melewati alur autentikasi Stack Login.
            </Text>
          </View>

          {/* Informasi Persiapan Modul Selanjutnya */}
          <View style={homeStyles.infoCard}>
            <Text style={homeStyles.infoTitle}>
              Status Kesiapan Integrasi REST API
            </Text>
            <Text style={homeStyles.infoItem}>
              • Halaman Login & Register modern telah siap.{"\n"}• File
              StyleSheet telah terpisah rapi di folder src/styles/.{"\n"}• Modul
              selanjutnya: Menghubungkan form ke API Laravel 13 via fetch().
            </Text>
          </View>
        </View>

        {/* Tombol Keluar Kembali ke Login */}
        <TouchableOpacity
          style={homeStyles.logoutButton}
          activeOpacity={0.8}
          onPress={handleLogout}
        >
          <Ionicons name="log-out-outline" size={20} color="#DC2626" />
          <Text style={homeStyles.logoutButtonText}>Keluar dari Akun</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
