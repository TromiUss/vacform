import { useState, useEffect } from "react";
import { getVacancies, addVacancy, updateVacancy } from "./model/vac-model";
import { Vacancy } from "./model/vacancy";

export const useVacancyViewModel = () => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);

  useEffect(() => {
    setVacancies(getVacancies());
  }, []);

  const handleAddVacancy = (vacancy: Vacancy) => {
    addVacancy(vacancy);
    setVacancies([...getVacancies()]);
  };
  
  const handleUpdateVacancy = (id: number, updatedVacancy: Vacancy) => {
    updateVacancy(id, updatedVacancy);
    setVacancies([...getVacancies()]);
  };

  return { vacancies, handleAddVacancy, handleUpdateVacancy };
};
