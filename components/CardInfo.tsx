import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';

const CardInfo = () => {
  return (

    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/foto.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoList}>
          <View style={styles.infoItem}>
            <MaterialIcons name="email" size={26} color="#000" />
            <Text style={styles.infoText}>Eudy Yunior Lorenzo Ramirez</Text>
          </View>

          <View style={styles.infoItem}>
            <MaterialIcons name="phone" size={26} color="#000" />
            <Text style={styles.infoText}>809-55-9065</Text>
          </View>

          <View style={styles.infoItem}>
            <MaterialIcons name="mail" size={17} color="#000" />
            <Text style={styles.infoText}>eudylorenzo@gmail.com</Text>
          </View>

          <View style={styles.infoItem}>
            <AntDesign name="book" size={26} color="#000" />
            <Text style={styles.infoText}>ITLA</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 334,
    height: 360,
    borderRadius: 50,
    backgroundColor: '#CFE1B9', // Color cambiado
    opacity: 0.8, // Opacidad aplicada
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.44,
    shadowRadius: 4,
    elevation: 8,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 25,
    paddingTop: 33,
  },
  image: {
    width: 152,
    height: 149,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
  },
  infoContainer: {
    padding: 20,
  },
  infoList: {
    gap: 8,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#000',
  },
});

export default CardInfo;