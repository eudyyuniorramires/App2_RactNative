import Button from '@/components/Button';
import CardMain from '@/components/CardMain';
import Layout from '@/components/layout';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Multiplicacion() {
  const [numero, setNumero] = useState('');
  const [tabla, setTabla] = useState([]);

  const GenerarTabla = () => {
    const n = parseFloat(numero);

    if (isNaN(n)) {
      return;
    }

    const nuevaTabla = [];
    for (let i = 1; i <= 13; i++) {
      nuevaTabla.push(`${n} × ${i} = ${n * i}`);
    }
    setTabla(nuevaTabla);
  };

  const Limpiar = () => {
    setTabla([]);
    setNumero('');
  };

  return (
    <View style={styles.container}>
      <Layout />
      <CardMain>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Ingresa un número"
            placeholderTextColor="#fff"
            keyboardType="decimal-pad"
            value={numero}
            onChangeText={setNumero}
          />
          <ScrollView style={styles.resultBox}>
            {tabla.length > 0 ? (
              tabla.map((resultado, index) => (
                <Text key={index} style={styles.resultText}>{resultado}</Text>
              ))
            ) : (
              <Text style={styles.resultText}>Tabla de multiplicar</Text>
            )}
          </ScrollView>
        </View>
      </CardMain>
      <View style={styles.buttonContainer}>
        <Button text="Generar Tabla" onClick={GenerarTabla} />
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
  },
  resultText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'center',
  },
});