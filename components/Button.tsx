import { Pressable, StyleSheet, Text } from 'react-native';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <Pressable 
      style={styles.button} 
      onPress={onClick}
      android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 265,
    height: 72,
    borderRadius: 50,
    backgroundColor: '#B5C99A', // cambiado
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 19,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8, 
  },
  buttonText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
});

export default Button;
