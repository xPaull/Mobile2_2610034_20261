import { StyleSheet, Text, View } from "react-native";

export default function PengaturanScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan</Text>
      <Text style={styles.subtitle}>Atur preferensi aplikasi Anda di sini.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    padding: 20,
  },
  title: { fontSize: 20, fontWeight: "bold", color: "#0f172a" },
  subtitle: { fontSize: 13, color: "#64748b", marginTop: 6, textAlign: "center" },
});
