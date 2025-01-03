import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { DataContext } from '../../DataContext';

const DetalhesScreen = ({ route, navigation }) => {
  const { team, reportId } = route.params;
  const { reports, updateReport } = useContext(DataContext);

  const report = reports[team]?.find((item) => item.id === reportId);

  // Estados para editar as informações
  const [householdName, setHouseholdName] = useState(report?.name || '');
  const [bairro, setBairro] = useState(report?.bairro || '');
  const [rua, setRua] = useState(report?.rua || '');
  const [numeroCasa, setNumeroCasa] = useState(report?.numeroCasa || '');
  const [genero, setGenero] = useState(report?.genero || '');
  const [possuiCrianca, setPossuiCrianca] = useState(report?.possuiCrianca || false);
  const [idadeCrianca, setIdadeCrianca] = useState(report?.idadeCrianca || '');

  const handleSave = () => {
    const updatedReport = {
      ...report,
      name: householdName,
      bairro,
      rua,
      numeroCasa,
      genero,
      possuiCrianca,
      idadeCrianca: possuiCrianca ? idadeCrianca : null,
    };

    updateReport(team, updatedReport);
    alert('Cadastro atualizado com sucesso!');
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Detalhes do Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome da Casa"
        value={householdName}
        onChangeText={setHouseholdName}
      />

      <TextInput
        style={styles.input}
        placeholder="Bairro"
        value={bairro}
        onChangeText={setBairro}
      />

      <TextInput
        style={styles.input}
        placeholder="Rua"
        value={rua}
        onChangeText={setRua}
      />

      <TextInput
        style={styles.input}
        placeholder="Número da Casa"
        keyboardType="numeric"
        value={numeroCasa}
        onChangeText={setNumeroCasa}
      />

      <TextInput
        style={styles.input}
        placeholder="Gênero"
        value={genero}
        onChangeText={setGenero}
      />

      <View style={styles.toggleContainer}>
        <Text style={styles.label}>Possui criança em casa?</Text>
        <Button
          title={possuiCrianca ? 'Sim' : 'Não'}
          onPress={() => setPossuiCrianca(!possuiCrianca)}
        />
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

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
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
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DetalhesScreen;
