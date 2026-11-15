import { tabStyles } from "@/styles/tabStyles";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ProfilScreen() {
  const handleLogout = () => {
    router.replace("/login");
  };

  return (
    <ScrollView
      style={tabStyles.screenContainer}
      contentContainerStyle={tabStyles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={tabStyles.card}>
        <View style={tabStyles.profileAvatar}>
          <Ionicons name="people" size={30} color="#2563EB" />
        </View>
        <Text style={tabStyles.sectionTitle}>Profil Pengguna</Text>
        <Text style={tabStyles.sectionSubtitle}>
          Informasi akun aktif dan pengaturan sesi aplikasi Mobile 2.
        </Text>
      </View>
      <TouchableOpacity
        style={tabStyles.logoutButton}
        activeOpacity={0.8}
        onPress={handleLogout}
      >
        <Ionicons name="log-out-outline" size={20} color="#DC2626" />
        <Text style={tabStyles.logoutButtonText}>Keluar dari Akun</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
