import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [reports, setReports] = useState({});

  // Função para atualizar o relatório
  const updateReport = (team, updatedReport) => {
    setReports((prevReports) => {
      const teamReports = prevReports[team] || [];
      const reportIndex = teamReports.findIndex((r) => r.id === updatedReport.id);
  
      if (reportIndex === -1) {
        // Se o relatório não existir, adicione um novo
        return { ...prevReports, [team]: [...teamReports, updatedReport] };
      }
  
      // Caso contrário, atualize o relatório existente
      const updatedReports = [...teamReports];
      updatedReports[reportIndex] = updatedReport;
  
      return { ...prevReports, [team]: updatedReports };
    });
  };

  const handleSave = () => {
    const newReport = {
      id: Date.now().toString(),  // Gera um ID único com base no timestamp
      name: householdName,
      bairro,
      rua,
      numeroCasa,
      genero,
      possuiCrianca,
      idadeCrianca: possuiCrianca ? idadeCrianca : null,
    };
  
    // Atualiza o relatório no DataContext
    updateReport(team, newReport);  // Certifique-se de que o 'team' seja passado corretamente
  
    alert('Cadastro realizado com sucesso!');
    navigation.goBack();  // Retorna para a tela anterior
  };

  const addReport = (team, newReport) => {
    setReports((prevReports) => {
      const teamReports = prevReports[team] || [];
      return { ...prevReports, [team]: [...teamReports, newReport] };
    });
  };

  return (
    <DataContext.Provider value={{ reports, addReport }}>
      {children}
    </DataContext.Provider>
  );
};

const addReport = (team, newReport) => {
  setReports((prevReports) => {
    const teamReports = prevReports[team] || [];
    return { ...prevReports, [team]: [...teamReports, newReport] };
  });
};
