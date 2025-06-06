import { Vacancy } from "../model/vacancy";

export type VacFormProps = {
  vacancies: Vacancy[];
  onEditClick: (vacancy: Vacancy) => void;
};

export type VacAddViewProps = {
  initialValues: Vacancy[];
  onSubmit: (vacancy: Vacancy) => void;
  onSuccess: () => void;
};

export type VacEditViewProps = {
  initialValues: Partial<Vacancy>;
  onUpdateVacancy: (id: number, updatedVacancy: Vacancy) => void;
  onCancel: () => void;
  setMode: React.Dispatch<React.SetStateAction<string>>;
};
