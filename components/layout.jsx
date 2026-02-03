import { StyleSheet, Text, View } from 'react-native';
import Menu from './Menu';

const Layout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AppMovil2</Text>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    minHeight: 60,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default Layout;