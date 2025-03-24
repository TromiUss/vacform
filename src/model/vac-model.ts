import vacList, { Vacancy } from '../mock/vac-list';

let vacanciesModel: Vacancy[] = [...vacList];

export const getVacancies = (): Vacancy[] => vacanciesModel;

export const addVacancy = (vacancy: Omit<Vacancy, 'id'>) => {
  vacanciesModel.push({ id: Date.now(), ...vacancy });
};

export const updateVacancy = (id: number, updatedVacancy: Partial<Vacancy>) => {
  const index = vacanciesModel.findIndex((vac) => vac.id === id);
  if (index !== -1) vacanciesModel[index] = { ...vacanciesModel[index], ...updatedVacancy };
};
