import { useAuth } from "@/context/AuthContext";
import { logoutApi } from "@/services/authService";
import { tabStyles } from "@/styles/tabStyles";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfilScreen() {
  const { user, token, clearSession } = useAuth();
  const [loadingLogout, setLoadingLogout] = useState(false);

  const handleLogout = async () => {
    setLoadingLogout(true);
    try {
      if (token) {
        await logoutApi(token);
      }
      clearSession();
      router.replace("/login");
    } finally {
      setLoadingLogout(false);
    }
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
        <Text style={tabStyles.sectionTitle}>
          {user?.name || "Profil Pengguna"}
        </Text>
        <Text style={tabStyles.sectionSubtitle}>
          Email: {user?.email || "-"}
          {"\n"}
          Nomor HP: {user?.no_hp || "Belum diisi"}
        </Text>
      </View>

      <TouchableOpacity
        style={tabStyles.logoutButton}
        activeOpacity={0.8}
        disabled={loadingLogout}
        onPress={handleLogout}
      >
        {loadingLogout ? (
          <ActivityIndicator color="#DC2626" />
        ) : (
          <>
            <Ionicons name="log-out-outline" size={20} color="#DC2626" />
            <Text style={tabStyles.logoutButtonText}>Keluar dari Akun</Text>
          </>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}
