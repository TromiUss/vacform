import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import VacFormPresenter from './presenter/vac-form-presenter';
import VacancyModel from './model/vac-model';

const root = ReactDOM.createRoot(document.getElementById('root'));

const vacancyModel = new VacancyModel();

const App = () => {
  const [mode, setMode] = useState('view');
  const [selectedVacancy, setSelectedVacancy] = useState(null);

  const handleViewClick = () => setMode('view');
  const handleAddClick = () => setMode('add');
  const handleEditClick = (vacancy) => {
    setSelectedVacancy(vacancy);
    setMode('edit');
  };

  useEffect(() => {
    const viewButton = document.getElementById('viewBtn');
    const addButton = document.getElementById('addBtn');

    viewButton.addEventListener('click', handleViewClick);
    addButton.addEventListener('click', handleAddClick);

    return () => {
      viewButton.removeEventListener('click', handleViewClick);
      addButton.removeEventListener('click', handleAddClick);
    };
  }, []);

  return (
    <VacFormPresenter
      mode={mode}
      vacancyModel={vacancyModel}
      selectedVacancy={selectedVacancy}
      onEditClick={handleEditClick}
    />
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
