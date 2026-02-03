import CardInfo from '@/components/CardInfo';
import Layout from '@/components/layout';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const iniciarApp = () => {
    console.log('App iniciada');
  };

  return (
    <View style={styles.container}>
      <Layout />
      <CardInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100%',
    gap: 100,
    paddingTop: 70,
    paddingHorizontal: 18,
    paddingBottom: 89,
    backgroundColor: '#E9F5DB', // Cambiado aquí
  },
});
