import React from "react";
import ReactDOM from "react-dom/client";
import { useVacancyViewModel } from "./vac-form-viewmodel.js";
import VacForm from "./view/vac-form-view.js";
import VacAddView from "./view/vac-add-view.js";
import VacEditView from "./view/vac-edit-view.js";

import "./style.css";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const { vacancies, handleAddVacancy, handleUpdateVacancy } = useVacancyViewModel();
  const [mode, setMode] = React.useState("view");
  const [selectedVacancy, setSelectedVacancy] = React.useState(null);

  const handleViewClick = () => setMode("view");
  const handleAddClick = () => setMode("add");
  const handleEditClick = (vacancy) => {
    setSelectedVacancy(vacancy);
    setMode("edit");
  };

  return (
    <>
      <header className="page-header">
        <div className="page-header__container">
          <div className="vac-link">
            <button onClick={handleViewClick} className="list-button">
              Все заявки
            </button>
            <button onClick={handleAddClick} className="new-button">
              Создание заявки
            </button>
          </div>
        </div>
      </header>

      <main className="page-main">
        <div className="page-body__container">
          {mode === "view" && <VacForm vacancies={vacancies} onEditClick={handleEditClick} />}
          {mode === "add" && <VacAddView
            initialValues={{ VacName: "", Ot: "", Do: "", Salary: "", Employment: "" }}
            onSubmit={handleAddVacancy}
          />}
          {mode === "edit" && <VacEditView
            initialValues={{
              VacName: selectedVacancy?.name || '',
              Ot: selectedVacancy?.ot || '',
              salaryFrom: selectedVacancy?.salaryFrom || '',
              salary: selectedVacancy?.salary || '',
              salaryTo: selectedVacancy?.salaryTo || '',
              address: selectedVacancy?.address || '',
              under: selectedVacancy?.underground || '',
              date: selectedVacancy?.date || '',
              PlanDate: selectedVacancy?.PlanDate || '',
              gender: selectedVacancy?.gender || '',
              skills: selectedVacancy?.experience || '',
              gr: selectedVacancy?.gr || '',
              employment_type: selectedVacancy?.employment_type || '',
            }}
            onUpdateVacancy={handleUpdateVacancy}
            setMode={setMode}
          />}
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
