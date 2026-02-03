import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(prev => !prev);

  const handleNavigation = (route) => {
    router.push(route);
    setIsOpen(false);
  };

  return (
    <View>
      {isOpen && (
        <View style={styles.nav}>
          <Pressable onPress={() => handleNavigation('/(tabs)')}>
            <Text style={styles.link}>Inicio</Text>
          </Pressable>
          <Pressable onPress={() => handleNavigation('/(tabs)/Sumador')}>
            <Text style={styles.link}>Sumador</Text>
          </Pressable>
          <Pressable onPress={() => handleNavigation('/(tabs)/Multiplicacion')}>
            <Text style={styles.link}>Multiplicacion</Text>
          </Pressable>
          <Pressable onPress={() => handleNavigation('/(tabs)/Traductor')}>
            <Text style={styles.link}>Traductor</Text>
          </Pressable>
          <Pressable onPress={() => handleNavigation('/(tabs)/Experiencia')}>
            <Text style={styles.link}>Experiencia</Text>
          </Pressable>
        </View>
      )}

      <Pressable style={styles.button} onPress={toggleMenu}>
        <View style={styles.hamburger}>
          <View style={styles.line} />
          <View style={styles.line} />
          <View style={styles.line} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    paddingHorizontal: 15,
    gap: 10,
  },
  link: {
    fontSize: 16,
    paddingVertical: 8,
    color: '#000',
  },
  button: {
    padding: 10,
  },
  hamburger: {
    gap: 5,
  },
  line: {
    width: 37,
    height: 7,
    backgroundColor: '#CFE1B9',
  },
});

export default Menu;