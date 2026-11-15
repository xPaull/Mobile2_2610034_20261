import { tabNavColors, tabStyles } from "@/styles/tabStyles";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

function TabIcon({ name, focused }: { name: IoniconName; focused: boolean }) {
  return (
    <View style={tabStyles.iconContainer}>
      <Ionicons
        name={name}
        size={24}
        color={focused ? tabNavColors.active : tabNavColors.inactive}
      />
    </View>
  );
}

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const bottomInset = Math.max(insets.bottom, 8);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tabNavColors.active,
        tabBarInactiveTintColor: tabNavColors.inactive,
        tabBarStyle: [
          tabStyles.tabBar,
          {
            height: 62 + bottomInset,
            paddingBottom: bottomInset,
          },
        ],
        tabBarItemStyle: tabStyles.tabBarItem,
        tabBarLabelStyle: tabStyles.tabBarLabel,
        tabBarHideOnKeyboard: true,
        headerStyle: tabStyles.headerStyle,
        headerTintColor: tabNavColors.headerTint,
        headerTitleStyle: tabStyles.headerTitleStyle,
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Beranda",
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name={focused ? "home" : "home-outline"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="produk"
        options={{
          title: "Katalog Produk",
          tabBarLabel: "Produk",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name={focused ? "cube" : "cube-outline"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="transaksi"
        options={{
          title: "Transaksi",
          tabBarLabel: "Transaksi",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name={focused ? "cart" : "cart-outline"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: "Laporan",
          tabBarLabel: "Report",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name={focused ? "stats-chart" : "stats-chart-outline"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil Pengguna",
          tabBarLabel: "Profil",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name={focused ? "people" : "people-outline"}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
