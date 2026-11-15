import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Sembunyikan header stack agar header Tabs yang tampil */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
