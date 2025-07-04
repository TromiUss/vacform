import React from "react";
import { VacEditViewProps } from "../types/vac-form.types";
import VacancyForm from "../components/vacancyForm";
import { Vacancy } from "../model/vacancy";

const prepareInitialValues = (partialValues: Partial<Vacancy>): Vacancy => ({
  id: partialValues.id || 0, // Пропускаем нулевые или undefined-значения
  VacName: partialValues.VacName || "",
  Ot: partialValues.Ot || "",
  salary: partialValues.salary || "",
  salaryFrom: partialValues.salaryFrom || "",
  salaryTo: partialValues.salaryTo || "",
  date: partialValues.date || "",
  PlanDate: partialValues.PlanDate || "",
  gender: partialValues.gender || "",
  experience: partialValues.experience || "",
  address: partialValues.address || "",
  underground: partialValues.underground || "",
  gr: partialValues.gr || "",
  employment_type: partialValues.employment_type || "",
  publicationDate: partialValues.publicationDate || "",
});

const VacEditView: React.FC<VacEditViewProps> = ({
  initialValues,
  onUpdateVacancy,
  onCancel,
}) => {
  const completeInitialValues = prepareInitialValues(initialValues || {});

  return (
    <VacancyForm
      mode="edit"
      initialValues={completeInitialValues}
      onSubmit={(values) => onUpdateVacancy(values.id, values)}
      onCancel={onCancel}
    />
  );
};

export default VacEditView;