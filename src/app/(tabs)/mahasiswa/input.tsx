import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useMahasiswa, type Prodi } from "./_layout";

const PILIHAN_PRODI: Prodi[] = [
  "Manajemen Informatika",
  "Teknik Informatika",
  "Sistem Informasi",
];

export default function InputMahasiswaScreen() {
  const { tambah } = useMahasiswa();

  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [prodi, setProdi] = useState<Prodi>("Teknik Informatika");
  const [noHp, setNoHp] = useState("");
  const [angkatan, setAngkatan] = useState("");

  const handleSimpan = () => {
    if (!nim.trim() || !nama.trim()) {
      Alert.alert(
        "Validasi Gagal",
        "NIM dan Nama Lengkap mahasiswa wajib diisi!",
      );
      return;
    }

    // Kirim ke state bersama: Tab Data dan Tab Report ikut berubah
    tambah({
      nim: nim.trim(),
      nama: nama.trim(),
      prodi,
      noHp: noHp.trim(),
      angkatan: angkatan.trim(),
    });

    Alert.alert(
      "Data Berhasil Disimpan",
      `Mahasiswa baru atas nama ${nama} (${nim}) telah ditambahkan.`,
    );

    setNim("");
    setNama("");
    setProdi("Teknik Informatika");
    setNoHp("");
    setAngkatan("");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Formulir Pendaftaran Mahasiswa</Text>
      <Text style={styles.subtitle}>
        Isikan data mahasiswa baru secara teliti pada kolom formulir di bawah
        ini:
      </Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nomor Induk Mahasiswa (NIM)</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 230101006"
          placeholderTextColor="#94a3b8"
          value={nim}
          onChangeText={setNim}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nama Lengkap Mahasiswa</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: Muhammad Rizki"
          placeholderTextColor="#94a3b8"
          value={nama}
          onChangeText={setNama}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Program Studi</Text>
        <View style={styles.chipRow}>
          {PILIHAN_PRODI.map((p) => (
            <TouchableOpacity
              key={p}
              style={[styles.chip, prodi === p && styles.chipActive]}
              onPress={() => setProdi(p)}
              activeOpacity={0.8}
            >
              <Text
                style={[styles.chipText, prodi === p && styles.chipTextActive]}
              >
                {p}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nomor HP (opsional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 081234567890"
          placeholderTextColor="#94a3b8"
          value={noHp}
          onChangeText={setNoHp}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Tahun Angkatan (opsional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 2026"
          placeholderTextColor="#94a3b8"
          value={angkatan}
          onChangeText={setAngkatan}
          keyboardType="numeric"
          maxLength={4}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSimpan}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Simpan Data Mahasiswa</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  content: { padding: 18 },
  title: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
  subtitle: { fontSize: 12, color: "#64748b", marginTop: 4, marginBottom: 18 },
  formGroup: { marginBottom: 14 },
  label: {
    fontSize: 12.5,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 13,
    color: "#0f172a",
  },
  chipRow: { flexDirection: "row", gap: 8, flexWrap: "wrap" },
  chip: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  chipActive: { backgroundColor: "#072deb", borderColor: "#072deb" },
  chipText: { fontSize: 12.5, color: "#334155", fontWeight: "600" },
  chipTextActive: { color: "#ffffff" },
  button: {
    backgroundColor: "#072deb",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#ffffff", fontSize: 13.5, fontWeight: "bold" },
});
