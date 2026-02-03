import Button from '@/components/Button';
import CardMain from '@/components/CardMain';
import Layout from '@/components/layout';
import { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Sumador() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(0);

  const handleSumar = () => {
    Keyboard.dismiss();
    setResult(Number(number1) + Number(number2));
  };

  return (
    <View style={styles.container}>
      <Layout />
      <CardMain>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Número 1"
            placeholderTextColor="#fff"
            keyboardType="number-pad"
            value={number1}
            onChangeText={setNumber1}
            blurOnSubmit
            returnKeyType="next"
          />
          <TextInput
            style={styles.input}
            placeholder="Número 2"
            placeholderTextColor="#fff"
            keyboardType="number-pad"
            value={number2}
            onChangeText={setNumber2}
            blurOnSubmit
            returnKeyType="done"
            onSubmitEditing={handleSumar}
          />
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>{result}</Text>
          </View>
        </View>
      </CardMain>
      <Button text="Sumar" onClick={handleSumar} />
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
  input: {
    borderRadius: 50,
    padding: 12,
    backgroundColor: '#97a97c',
    color: '#fff',
    width: '80%',
    textAlign: 'center',
  },
  resultBox: {
    height: 200,
    backgroundColor: '#a3b18a',
    borderRadius: 50,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
