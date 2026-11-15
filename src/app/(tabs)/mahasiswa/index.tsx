import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useMahasiswa } from "./_layout";

export default function DataMahasiswaScreen() {
  const { daftar } = useMahasiswa();

  return (
    <View style={styles.container}>
      <FlatList
        data={daftar}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listArea}
        ListEmptyComponent={
          <Text style={styles.empty}>Belum ada data mahasiswa.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.nama.charAt(0)}</Text>
            </View>

            <View style={styles.infoArea}>
              <Text style={styles.nama}>{item.nama}</Text>
              <Text style={styles.subText}>
                NIM: {item.nim}  •  Angkatan {item.angkatan || "-"}
              </Text>
              <Text style={styles.prodiText}>{item.prodi}</Text>
              <Text style={styles.subText}>HP: {item.noHp || "-"}</Text>
            </View>

            <View style={styles.rightArea}>
              <View
                style={[
                  styles.badge,
                  item.status === "Aktif"
                    ? styles.badgeActive
                    : styles.badgeInactive,
                ]}
              >
                <Text
                  style={[
                    styles.badgeText,
                    item.status === "Aktif"
                      ? styles.badgeTextActive
                      : styles.badgeTextInactive,
                  ]}
                >
                  {item.status}
                </Text>
              </View>

              {/* Tombol aksi cepat: telepon */}
              {item.noHp !== "" && (
                <TouchableOpacity
                  style={styles.callButton}
                  activeOpacity={0.7}
                  onPress={() => Linking.openURL(`tel:${item.noHp}`)}
                >
                  <Ionicons name="call" size={14} color="#ffffff" />
                  <Text style={styles.callText}>Hubungi</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  listArea: { padding: 16, gap: 12 },
  empty: { textAlign: "center", color: "#94a3b8", marginTop: 20 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#eff6ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: { fontSize: 16, fontWeight: "bold", color: "#072deb" },
  infoArea: { flex: 1 },
  nama: { fontSize: 14, fontWeight: "bold", color: "#0f172a" },
  subText: { fontSize: 12, color: "#64748b", marginTop: 2 },
  prodiText: { fontSize: 12, color: "#072deb", marginTop: 2 },
  rightArea: { alignItems: "flex-end", gap: 8 },
  badge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  badgeActive: { backgroundColor: "#dcfce7" },
  badgeInactive: { backgroundColor: "#fee2e2" },
  badgeText: { fontSize: 11, fontWeight: "bold" },
  badgeTextActive: { color: "#16a34a" },
  badgeTextInactive: { color: "#dc2626" },
  callButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#072deb",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 6,
  },
  callText: { color: "#ffffff", fontSize: 11, fontWeight: "bold" },
});
