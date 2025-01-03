import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TimeSelectionScreen = ({ navigation }) => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const teams = [
    'Time Alpha', 'Time Beta', 'Time Gamma', 'Time Delta',
    'Time Theta', 'Time Eta', 'Time Zeta', 'Time Ezequiel',
  ];

  const handleTeamSelection = (team) => {
    setSelectedTeam(team);
    navigation.navigate('Relatorio', { team }); 
  };


  


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione o seu time:</Text>
      {teams.map((team, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => handleTeamSelection(team)} // Corrigido aqui
        >
          <Text style={styles.buttonText}>{team}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    width: 200,
    alignContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default TimeSelectionScreen;
