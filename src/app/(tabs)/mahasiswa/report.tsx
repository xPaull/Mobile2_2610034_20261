import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useMahasiswa } from "./_layout";

export default function ReportMahasiswaScreen() {
  const { daftar } = useMahasiswa();

  const total = daftar.length;
  const aktif = daftar.filter((m) => m.status === "Aktif").length;
  const cuti = total - aktif;
  const mi = daftar.filter((m) => m.prodi === "Manajemen Informatika").length;
  const ti = daftar.filter((m) => m.prodi === "Teknik Informatika").length;
  const si = daftar.filter((m) => m.prodi === "Sistem Informasi").length;
  const rasio = total > 0 ? ((aktif / total) * 100).toFixed(1) : "0";

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Laporan & Ringkasan Data</Text>
      <Text style={styles.subtitle}>
        Rekapitulasi statistik mahasiswa, otomatis mengikuti data di Tab Data:
      </Text>

      <View style={styles.grid}>
        <View style={[styles.card, { borderLeftColor: "#072deb" }]}>
          <Text style={styles.number}>{total}</Text>
          <Text style={styles.cardLabel}>Total Mahasiswa</Text>
        </View>
        <View style={[styles.card, { borderLeftColor: "#16a34a" }]}>
          <Text style={styles.number}>{aktif}</Text>
          <Text style={styles.cardLabel}>Mahasiswa Aktif</Text>
        </View>
        <View style={[styles.card, { borderLeftColor: "#ff003c" }]}>
          <Text style={styles.number}>{mi}</Text>
          <Text style={styles.cardLabel}>Manajemen Informatika</Text>
        </View>
        <View style={[styles.card, { borderLeftColor: "#d97706" }]}>
          <Text style={styles.number}>{ti}</Text>
          <Text style={styles.cardLabel}>Teknik Informatika</Text>
        </View>
        <View style={[styles.card, { borderLeftColor: "#7c3aed" }]}>
          <Text style={styles.number}>{si}</Text>
          <Text style={styles.cardLabel}>Sistem Informasi</Text>
        </View>
      </View>

      <View style={styles.summaryBox}>
        <Text style={styles.summaryTitle}>📌 Catatan Akademik Terkini</Text>
        <Text style={styles.summaryDesc}>
          • Rasio keaktifan mahasiswa saat ini mencapai {rasio}%.{"\n"}•
          Sebanyak {cuti} mahasiswa tercatat sedang mengambil cuti kuliah.{"\n"}
          • Pendaftaran mahasiswa baru jalur transfer masih berlangsung.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  content: { padding: 18 },
  title: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
  subtitle: { fontSize: 12, color: "#64748b", marginTop: 4, marginBottom: 18 },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  card: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 14,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderLeftWidth: 4,
  },
  number: { fontSize: 24, fontWeight: "bold", color: "#0f172a" },
  cardLabel: {
    fontSize: 11.5,
    color: "#64748b",
    marginTop: 4,
    fontWeight: "500",
  },
  summaryBox: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 14,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    marginTop: 14,
  },
  summaryTitle: {
    fontSize: 12.5,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 6,
  },
  summaryDesc: { fontSize: 12, color: "#475569", lineHeight: 18 },
});
