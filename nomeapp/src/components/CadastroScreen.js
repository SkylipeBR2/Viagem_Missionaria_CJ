import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { DataContext } from '../../DataContext';

const CadastroScreen = ({ route, navigation }) => {
  const { team } = route.params;
  const { addReport } = useContext(DataContext);

  // Estados para os campos do formulário
  const [householdName, setHouseholdName] = useState('');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');
  const [numeroCasa, setNumeroCasa] = useState('');
  const [genero, setGenero] = useState('');
  const [possuiCrianca, setPossuiCrianca] = useState(false);
  const [idadeCrianca, setIdadeCrianca] = useState('');

  const handleSubmit = () => {
    // Validação básica
    if (!householdName || !bairro || !rua || !numeroCasa || !genero) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Adiciona o novo cadastro
    const newReport = {
      id: Date.now().toString(),
      name: householdName,
      bairro,
      rua,
      numeroCasa,
      genero,
      possuiCrianca,
      idadeCrianca: possuiCrianca ? idadeCrianca : null,
    };

    addReport(team, newReport);
    alert('Cadastro realizado com sucesso!');
    navigation.goBack(); // Retorna à tela de relatório
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro - {team}</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome da Pessoa*"
        value={householdName}
        onChangeText={setHouseholdName}
      />

      <TextInput
        style={styles.input}
        placeholder="Bairro*"
        value={bairro}
        onChangeText={setBairro}
      />

      <TextInput
        style={styles.input}
        placeholder="Rua*"
        value={rua}
        onChangeText={setRua}
      />

      <TextInput
        style={styles.input}
        placeholder="Número da Casa*"
        keyboardType="numeric"
        value={numeroCasa}
        onChangeText={setNumeroCasa}
      />

      <TextInput
        style={styles.input}
        placeholder="Gênero*"
        value={genero}
        onChangeText={setGenero}
      />

      <View style={styles.toggleContainer}>
        <Text style={styles.label}>Possui criança em casa?</Text>
        <TouchableOpacity
          style={[styles.toggleButton, possuiCrianca && styles.toggleButtonActive]}
          onPress={() => setPossuiCrianca(true)}
        >
          <Text style={styles.toggleText}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, !possuiCrianca && styles.toggleButtonActive]}
          onPress={() => setPossuiCrianca(false)}
        >
          <Text style={styles.toggleText}>Não</Text>
        </TouchableOpacity>
      </View>

      {possuiCrianca && (
        <TextInput
          style={styles.input}
          placeholder="Idade da Criança"
          keyboardType="numeric"
          value={idadeCrianca}
          onChangeText={setIdadeCrianca}
        />
      )}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  toggleButton: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 5,
  },
  toggleButtonActive: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  toggleText: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CadastroScreen;
