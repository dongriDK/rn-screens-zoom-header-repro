import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* The screen below the zoomed screen hides the header. */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="detail" options={{ headerTransparent: true, title: '' }} />
    </Stack>
  );
}
