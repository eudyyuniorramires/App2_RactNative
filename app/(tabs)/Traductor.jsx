import Button from '@/components/Button';
import CardMain from '@/components/CardMain';
import Layout from '@/components/layout';
import { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';

const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

function numeroALetras(num) {
  if (num === 0) return 'cero';
  if (num < 10) return unidades[num];
  if (num < 20) return especiales[num - 10];
  if (num < 100) {
    const d = Math.floor(num / 10);
    const u = num % 10;
    if (u === 0) return decenas[d];
    if (d === 2) return 'veinti' + unidades[u];
    return decenas[d] + ' y ' + unidades[u];
  }
  if (num < 1000) {
    const c = Math.floor(num / 100);
    const resto = num % 100;
    if (num === 100) return 'cien';
    if (resto === 0) return centenas[c];
    return centenas[c] + ' ' + numeroALetras(resto);
  }
  if (num === 1000) return 'mil';
  return 'Número fuera de rango';
}

export default function Traductor() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const Traducir = () => {
    Keyboard.dismiss();
    const n = parseInt(numero);
    if (isNaN(n) || n < 1 || n > 1000) {
      setResultado('Ingresa un número del 1 al 1000');
      return;
    }
    setResultado(numeroALetras(n));
  };

  const Limpiar = () => {
    Keyboard.dismiss();
    setNumero('');
    setResultado('');
  };

  return (
    <View style={styles.container}>
      <Layout />
      <CardMain>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Ingresa un número (1-1000)"
            placeholderTextColor="#fff"
            keyboardType="number-pad"
            value={numero}
            onChangeText={setNumero}
            blurOnSubmit
            returnKeyType="done"
            onSubmitEditing={Traducir}
          />
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>{resultado || 'Resultado aparecerá aquí'}</Text>
          </View>
        </View>
      </CardMain>
      <View style={styles.buttonContainer}>
        <Button text="Traducir" onClick={Traducir} />
        <Button text="Limpiar" onClick={Limpiar} />
      </View>
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
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'center',
  },
});