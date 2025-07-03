import React from "react";
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