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
    date: '',
    PlanDate: '',
    gender: '',
    skills: '',
    gr: '',
    employment_type: '',
  });

  useEffect(() => {
    setVacancies(vacancyModel.getVacancies());
  }, [vacancyModel]);

  useEffect(() => {
    if (mode === 'edit' && selectedVacancy) {
      console.log("Выбрана вакансия для редактирования:", selectedVacancy);
      setInitialValues({
        VacName: selectedVacancy.name || '',
        Ot: selectedVacancy.department || '',
        salary: selectedVacancy.salary || '',
        address: selectedVacancy.address || '',
        under: selectedVacancy.underground || '',
        date: selectedVacancy.date || '',
        PlanDate: selectedVacancy.PlanDate || '',
        gender: selectedVacancy.gender || '',
        skills: selectedVacancy.experience || '',
        gr: selectedVacancy.gr || '',
        employment_type: selectedVacancy.employment_type || '',
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
      console.log("До обновления:", vacancyModel.getVacancies());
      vacancyModel.updateVacancy(selectedVacancy.id, values);
      console.log("После обновления:", vacancyModel.getVacancies());
      setVacancies(vacancyModel.getVacancies());
      console.log('Отредактирована вакансия:', values);
    }
  }, [mode, selectedVacancy, vacancyModel]);

  return (
    <>
      {mode === 'add' && <VacAddView initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} />}
      {mode === 'edit' && <VacEditView key={selectedVacancy?.id} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} />}
      {mode === 'view' && <VacForm vacancies={vacancies} onEditClick={onEditClick} />}
    </>
  );
};

export default VacFormPresenter;
