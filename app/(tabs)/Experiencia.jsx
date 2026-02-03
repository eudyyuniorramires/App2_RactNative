import CardMain from '@/components/CardMain';
import Layout from '@/components/layout';
import { ResizeMode, Video } from 'expo-av';
import { StyleSheet, Text, View } from 'react-native';

export default function Experiencia() {
  const VIDEO_URI = 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4';

  return (
    <View style={styles.container}>
      <Layout />
      <CardMain>
        <View style={styles.content}>
          <Text style={styles.title}>Experiencia</Text>
          <Video
            style={styles.video}
            source={{ uri: VIDEO_URI }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
          />
        </View>
      </CardMain>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 40,
    paddingTop: 20,
    paddingHorizontal: 18,
    paddingBottom: 89,
    backgroundColor: '#E9F5DB',
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  video: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    backgroundColor: '#000',
  },
}); 