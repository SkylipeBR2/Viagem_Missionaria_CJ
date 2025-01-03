import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DataProvider } from './DataContext';

import TimeSelectionScreen from './src/components/TimeSelectionScreen';
import CadastroScreen from './src/components/CadastroScreen';
import RelatorioScreen from './src/components/RelatorioScreen';
import DetalhesScreen from './src/components/DetalhesScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TimeSelection">
          <Stack.Screen name="TimeSelection" component={TimeSelectionScreen} />
          <Stack.Screen name="Cadastro" component={CadastroScreen} />
          <Stack.Screen name="Relatorio" component={RelatorioScreen} />
          <Stack.Screen name="Detalhes" component={DetalhesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};

export default App;
