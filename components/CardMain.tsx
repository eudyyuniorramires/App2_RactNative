import React from 'react';
import { StyleSheet, View } from 'react-native';

interface CardMainProps {
  children: React.ReactNode;
}

const CardMain = ({ children }: CardMainProps) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#a3b18a',
    borderRadius: 30,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
  },
});

export default CardMain;
