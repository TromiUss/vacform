import React from "react";
import { VacEditViewProps } from "../types/vac-form.types";
import VacancyForm from "../components/vacancyForm";

const VacEditView: React.FC<VacEditViewProps> = ({
  initialValues,
  onUpdateVacancy,
  onCancel,
}) => {
  return (
    <VacancyForm
      mode="edit"
      initialValues={initialValues}
      onSubmit={onUpdateVacancy}
      onCancel={onCancel}
    />
  );
};

export default VacEditView;