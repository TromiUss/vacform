import React from "react";
import { VacAddViewProps } from "../types/vac-form.types";
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