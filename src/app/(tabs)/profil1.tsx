import { StyleSheet, Text, View } from "react-native";

export default function ProfilScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.frame}>
        {/* Foto bulat (placeholder) */}
        <View style={styles.photo}>
          <Text style={styles.photoText}>Foto Anda</Text>
        </View>

        {/* Kotak data: label di kiri, nilai di kanan */}
        <View style={styles.infoBox}>
          <View style={styles.row}>
            <Text style={styles.label}>NIM :</Text>
            <Text style={styles.value}>2010034</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Nama :</Text>
            <Text style={styles.value}>Rahmat Ardian</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Prodi :</Text>
            <Text style={styles.value}>Sistem Informasi</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 12,
  },
  // Bingkai luar layar
  frame: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#555555",
    alignItems: "center", // semua anak rata tengah horizontal
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50, // setengah dari 100 = lingkaran
    borderWidth: 1,
    borderColor: "#555555",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  photoText: {
    fontSize: 12,
    color: "#333333",
  },
  infoBox: {
    alignSelf: "stretch", // selebar bingkai
    borderWidth: 1,
    borderColor: "#555555",
    paddingVertical: 8,
    paddingHorizontal: 8,
    gap: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between", // label kiri, nilai kanan
    alignItems: "center",
  },
  label: {
    fontSize: 20,
    color: "#222222",
  },
  value: {
    fontSize: 20,
    color: "#222222",
  },
});
