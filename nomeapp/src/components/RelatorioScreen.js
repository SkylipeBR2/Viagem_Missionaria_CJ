import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { DataContext } from '../../DataContext';

const RelatorioScreen = ({ route, navigation }) => {
  const { team } = route.params;
  const { reports } = useContext(DataContext);

  const teamReports = reports[team] || [];

  const handleNewCadastro = () => {
  navigation.navigate('Cadastro', { team });
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatório - {team}</Text>

      {/* Botão Novo Cadastro */}
      <TouchableOpacity
        style={styles.newButton}
        onPress={() => navigation.navigate('Cadastro', { team })}
      >
        <Text style={styles.newButtonText}>Novo Cadastro</Text>
      </TouchableOpacity>

      {teamReports.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum cadastro encontrado.</Text>
      ) : (
        <FlatList
          data={teamReports}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('Detalhes', { team, reportId: item.id })}
            >
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  newButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  newButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default RelatorioScreen;
