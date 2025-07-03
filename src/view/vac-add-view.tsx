import React from "react";
import VacancyForm from "../components/vacancyForm";

const VacAddView: React.FC<VacAddViewProps> = ({
  onSubmit,
  onSuccess = () => {},
}) => {
  return (
    <VacancyForm
      mode="add"
      onSubmit={onSubmit}
      onCancel={onSuccess}
    />
  );
};

export default VacAddView;