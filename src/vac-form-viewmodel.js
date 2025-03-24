import { useState, useEffect } from "react";
import { getVacancies, addVacancy, updateVacancy } from "./model/vac-model";

export const useVacancyViewModel = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    setVacancies(getVacancies());
  }, []);

  const handleAddVacancy = (vacancy) => {
    addVacancy(vacancy);
    setVacancies([...getVacancies()]);
  };

  const handleUpdateVacancy = (id, updatedVacancy) => {
    updateVacancy(id, updatedVacancy);
    setVacancies([...getVacancies()]);
  };

  return { vacancies, handleAddVacancy, handleUpdateVacancy };
};
