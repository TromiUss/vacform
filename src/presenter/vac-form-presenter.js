import React, { useState, useEffect, useCallback } from 'react';
import VacAddView from '../view/vac-add-view';
import VacEditView from '../view/vac-edit-view';
import VacForm from '../view/vac-form-view';
import * as Yup from 'yup';

const VacFormPresenter = ({
  mode = 'view',
  vacancyModel,
  selectedVacancy,
  onEditClick,
  setMode }) => {
  const [vacancies, setVacancies] = useState([]);
  const [initialValues, setInitialValues] = useState({
    VacName: '',
    Ot: '',
    setInitialValuesalaryFrom: '',
    salaryTo: '',
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
        Ot: selectedVacancy.ot || '',
        salaryFrom: selectedVacancy.salaryFrom || '',
        salary: selectedVacancy.salary || '',
        salaryTo: selectedVacancy.salaryTo || '',
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
    if (mode === 'add') {
      setInitialValues({
        VacName: '',
        Ot: '',
        salaryFrom: '',
        salaryTo: '',
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
    }
  }, [mode, selectedVacancy]);

  const validationSchema = Yup.object({
    VacName: Yup.string().required('Обязательное поле'),
    Ot: Yup.string().required('Обязательное поле'),
  });

  const handleSubmit = useCallback(async (values) => {
    if (mode === 'add') {
      await vacancyModel.addVacancy(values);
      setVacancies(vacancyModel.getVacancies());
      console.log('Добавлена новая вакансия:', values);
    } else if (mode === 'edit') {
      await vacancyModel.updateVacancy(selectedVacancy.id, values);
      setVacancies(vacancyModel.getVacancies());
      console.log('Отредактирована вакансия:', values);
    }
    setVacancies([...vacancyModel.getVacancies()]);
  console.log(mode === 'add' ? 'Добавлена новая вакансия:' : 'Отредактирована вакансия:', values);
  }, [mode, selectedVacancy, vacancyModel]);
  return (
    <>
      {mode === 'add' && (
        <VacAddView
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          onSuccess={() => {
            console.log('Переключаемся в режим просмотра');
            setMode('view');
          }}
          onCancel={() => setMode('view')}
        />
      )}
      {mode === 'edit' && (
        <VacEditView
          key={selectedVacancy?.id}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          onCancel={() => setMode('view')}
        />
      )}
      {mode === 'view' && (
        <VacForm vacancies={vacancies} onEditClick={onEditClick} />
      )}
    </>
  );
};

export default VacFormPresenter;
