// import { StyleSheet, Text, View } from "react-native";

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Halaman Beranda Utama</Text>
//       <Text style={styles.subtitle}>Selamat datang di aplikasi portal mahasiswa.</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f8fafc",
//     padding: 20,
//   },
//   title: { fontSize: 20, fontWeight: "bold", color: "#0f172a" },
//   subtitle: { fontSize: 13, color: "#64748b", marginTop: 6, textAlign: "center" },
// });
import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/login" />;
}
