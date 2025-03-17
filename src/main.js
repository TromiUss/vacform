import React from 'react';
import ReactDOM from 'react-dom/client';
import { useVacancyViewModel } from './vac-form-viewmodel.js';
import VacancyForm from './view/vac-form-view.js';

import './style.css';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const { vacancies, handleAddVacancy, handleUpdateVacancy } = useVacancyViewModel();
  const [mode, setMode] = React.useState('view');
  const [selectedVacancy, setSelectedVacancy] = React.useState(null);

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
          <div className="vac-link">
            <button onClick={handleViewClick} className="list-button">Все заявки</button>
            <button onClick={handleAddClick} className="new-button">Создание заявки</button>
          </div>
        </div>
      </header>

      <main className="page-main">
        <div className="page-body__container">
          <VacancyForm
            mode={mode}
            vacancies={vacancies}
            selectedVacancy={selectedVacancy}
            onEditClick={handleEditClick}
            setMode={setMode}
            onAddVacancy={handleAddVacancy}
            onUpdateVacancy={handleUpdateVacancy}
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
