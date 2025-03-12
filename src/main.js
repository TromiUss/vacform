import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import VacFormPresenter from './presenter/vac-form-presenter';
import VacancyModel from './model/vac-model';
import './style.css';
import './global.css';

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

  return (
    <>
      <header className="page-header">
        <div className="page-header__container">
          <img className="page-header__logo" src="" width="45" height="45" alt="CLogo" />
          <div className="vac-link">
            <button onClick={handleViewClick} className="list-button">Все заявки</button>
            <button onClick={handleAddClick} className="new-button">Создание заявки</button>
          </div>
        </div>
      </header>

      <main className="page-main">
        <div className="page-body__container">
          <VacFormPresenter
            mode={mode}
            vacancyModel={vacancyModel}
            selectedVacancy={selectedVacancy}
            onEditClick={handleEditClick}
            setMode={setMode}
          />
        </div>
      </main>
    </>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
