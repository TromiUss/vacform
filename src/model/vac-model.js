import vacList from '../mock/vac-list';

let vacancies = [...vacList];

export const getVacancies = () => vacancies;
export const addVacancy = (vacancy) => {
  vacancies.push({ id: Date.now(), ...vacancy });
};
export const updateVacancy = (id, updatedVacancy) => {
  const index = vacancies.findIndex((vac) => vac.id === id);
  if (index !== -1) vacancies[index] = { ...vacancies[index], ...updatedVacancy };
};
