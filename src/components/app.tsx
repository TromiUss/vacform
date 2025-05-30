import { useState } from "react";
import { useVacancyViewModel } from "../vac-form-viewmodel";
import VacForm from "../view/vac-form-view";
import VacAddView from "../view/vac-add-view";
import VacEditView from "../view/vac-edit-view";
import { Vacancy } from "@model/vacancy";



const App = () => {
    const { vacancies, handleAddVacancy, handleUpdateVacancy } =
      useVacancyViewModel();
    const [mode, setMode] = useState("view");
    const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null);
    const [activeButton, setActiveButton] = useState<string | null>("view");
  
    const handleViewClick = () => {
      setMode("view");
      setActiveButton("view");
    };
  
    const handleAddClick = () => {
      setMode("add");
      setActiveButton("add");
    };
  
    const handleEditClick = (vacancy: Vacancy) => {
      setSelectedVacancy(vacancy);
      setMode("edit");
      setActiveButton(null);
    };
  
    return (
      <section>
        <header className="page-header">
          <div className="page-header__container">
            <div className="vac-link">
              <button
                onClick={handleViewClick}
                className={`list-button ${
                  activeButton === "view" ? "selected-button" : ""
                }`}
              >
                Все заявки
              </button>
              <button
                onClick={handleAddClick}
                className={`new-button ${
                  activeButton === "add" ? "selected-button" : ""
                }`}
              >
                Создание заявки
              </button>
            </div>
          </div>
        </header>
  
        <main className="page-main">
          <div className="page-body__container">
            {mode === "view" && (
              <VacForm vacancies={vacancies} onEditClick={handleEditClick} />
            )}
            {mode === "add" && (
              <VacAddView
                initialValues={vacancies}
                onSubmit={handleAddVacancy}
                onSuccess={() => setMode("view")}
              />
            )}
            {mode === "edit" && (
              <VacEditView
                initialValues={{
                  VacName: selectedVacancy?.VacName || "",
                  Ot: selectedVacancy?.Ot || "",
                  salaryFrom: selectedVacancy?.salaryFrom || "",
                  salary: selectedVacancy?.salary || "",
                  salaryTo: selectedVacancy?.salaryTo || "",
                  address: selectedVacancy?.address || "",
                  underground: selectedVacancy?.underground || "",
                  date: selectedVacancy?.date || "",
                  PlanDate: selectedVacancy?.PlanDate || "",
                  gender: selectedVacancy?.gender || "",
                  experience: selectedVacancy?.experience || "",
                  gr: selectedVacancy?.gr || "",
                  employment_type: selectedVacancy?.employment_type || "",
                }}
                onUpdateVacancy={handleUpdateVacancy}
                onCancel={() => setMode("view")}
                setMode={setMode}
              />
            )}
          </div>
        </main>
      </section>
    );
  };

  export default App;
  