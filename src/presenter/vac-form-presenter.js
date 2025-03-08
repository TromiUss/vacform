import React, { useState, useEffect, useCallback } from 'react';
import VacAddView from '../view/vac-add-view';
import VacEditView from '../view/vac-edit-view';
import VacForm from '../view/vac-form-view';
import * as Yup from 'yup';

const VacFormPresenter = ({ mode = 'view', vacancyModel, selectedVacancy, onEditClick }) => {
  const [vacancies, setVacancies] = useState([]);
  const [initialValues, setInitialValues] = useState({
    VacName: '',
    Ot: '',
    salary: '',
    address: '',
    under: '',
  });

  useEffect(() => {
    setVacancies(vacancyModel.getVacancies());
  }, [vacancyModel]);

  useEffect(() => {
    if (mode === 'edit' && selectedVacancy) {
      setInitialValues({
        VacName: selectedVacancy.name || '',
        Ot: selectedVacancy.department || '',
        salary: selectedVacancy.salary || '',
        address: selectedVacancy.address || '',
        under: selectedVacancy.under || '',
      });
    }
  }, [mode, selectedVacancy]);

  const validationSchema = Yup.object({
    VacName: Yup.string().required('Обязательное поле'),
    Ot: Yup.string().required('Обязательное поле'),
  });

  const handleSubmit = useCallback((values) => {
    if (mode === 'add') {
      vacancyModel.addVacancy(values);
      setVacancies(vacancyModel.getVacancies());
      console.log('Добавлена новая вакансия:', values);
    } else if (mode === 'edit') {
      vacancyModel.updateVacancy(selectedVacancy.id, values);
      setVacancies(vacancyModel.getVacancies());
      console.log('Отредактирована вакансия:', values);
    }
  }, [mode, selectedVacancy, vacancyModel]);

  return (
    <>
      {mode === 'add' && <VacAddView initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} />}
      {mode === 'edit' && <VacEditView initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} />}
      {mode === 'view' && <VacForm vacancies={vacancies} onEditClick={onEditClick} />}
    </>
  );
};

export default VacFormPresenter;
