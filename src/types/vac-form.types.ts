// src/types/vac-form.types.ts или src/model/vacancy-props.ts
import { Vacancy } from "../model/vacancy";

export type VacFormProps = {
  vacancies: Vacancy[];
  onEditClick: (vacancy: Vacancy) => void;
  onSubmit: (values: Vacancy) => void;
  onSuccess?: () => void;
  onCancel?: () => void;
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
