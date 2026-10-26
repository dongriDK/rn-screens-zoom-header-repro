import { Link } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

const PHOTO = 'https://picsum.photos/id/237/600/600';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={{ paddingTop: 100, paddingHorizontal: 16, gap: 12 }}>
      <Text style={{ fontSize: 28, fontWeight: '700' }}>Home (headerShown: false)</Text>
      <Text>Tap the photo. On the detail screen, start dragging down (or swipe from the left edge) and release early so it springs back.</Text>
      <Link href="/detail" asChild>
        <Pressable>
          <Link.AppleZoom>
            <View collapsable={false} style={{ width: 180, height: 180 }}>
              <Image source={{ uri: PHOTO }} style={{ width: 180, height: 180, borderRadius: 12 }} />
            </View>
          </Link.AppleZoom>
        </Pressable>
      </Link>
    </ScrollView>
  );
}
