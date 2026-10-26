import { Link, Stack } from 'expo-router';
import { Image, ScrollView, Text, View } from 'react-native';

const PHOTO = 'https://picsum.photos/id/237/600/600';

export default function Detail() {
  return (
    <>
      <Stack.Screen options={{ headerRight: () => <Text style={{ fontSize: 17, paddingHorizontal: 8 }}>More</Text> }} />
      <ScrollView>
        <Link.AppleZoomTarget>
          <View collapsable={false}>
            <Image source={{ uri: PHOTO }} style={{ width: '100%', aspectRatio: 1 }} />
          </View>
        </Link.AppleZoomTarget>
        <View style={{ padding: 16, gap: 8 }}>
          <Text style={{ fontSize: 24, fontWeight: '700' }}>Detail</Text>
          <Text>After a cancelled interactive dismissal, the back button and "More" disappear.</Text>
        </View>
      </ScrollView>
    </>
  );
}
