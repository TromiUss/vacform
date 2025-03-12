import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  VacName: Yup.string().required('Обязательное поле'),
  Ot: Yup.string().required('Обязательное поле'),
  date: Yup.date().required('Обязательное поле'),
  PlanDate: Yup.date().required('Обязательное поле'),
  gender: Yup.string().required('Обязательное поле'),
  address: Yup.string().required('Обязательное поле'),
  skills: Yup.string().required('Обязательное поле'),
  gr: Yup.string().required('Обязательное поле'),
  employment_type: Yup.string().required('Обязательное поле')
});

const VacEditView = ({ initialValues, onSubmit, onCancel }) => {
  return (
    <div>
      <h1>Форма редактирования заявки</h1>
      <Formik enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
          onSuccess();
        }}>
        <Form id="vacancyForm" className="add-vac__form">
          <fieldset className="form-row-group">
            <label>Наименование вакансии
              <Field type="text" name="VacName" />
              <ErrorMessage name="VacName" component="div" />
            </label>

            <label>Отдел
              <Field type="text" name="Ot" />
              <ErrorMessage name="Ot" component="div" />
            </label>
          </fieldset>
          <fieldset className="form-row-group">
            <label>Дата открытия
              <Field type="date" name="date" />
              <ErrorMessage name="date" component="div" />
            </label>

            <label>Плановая дата закрытия
              <Field type="date" name="PlanDate" />
              <ErrorMessage name="PlanDate" component="div" />
            </label>
          </fieldset>
          <fieldset>
            <legend>Пол</legend>
            <label className="radio-item">
              <Field type="radio" name="gender" value="male" />
              <span>Мужской</span>
            </label>
            <label className="radio-item">
              <Field type="radio" name="gender" value="female" />
              <span>Женский</span>
            </label>
            <ErrorMessage name="gender" component="div" />
          </fieldset>
          <fieldset className="form-row-group">
            <legend>Зарплата</legend>
            <label className="radio-item">
              <Field type="radio" name="salary" value="На руки" />
              <span>На руки</span>
            </label>
            <label className="radio-item">
              <Field type="radio" name="salary" value="До вычета налога" />
              <span>До вычета налога</span>
            </label>
            <label className="input-group">
              <label>От
                <Field type="text" name="salaryFrom" />
              </label>
            </label>
            <label className="input-group">
              <label>До
                <Field type="text" name="salaryTo" />
              </label>
            </label>
          </fieldset>
          <fieldset className="form-row-group">
            <label>Адрес
              <Field type="text" name="address" />
              <ErrorMessage name="address" component="div" />
            </label>

            <label>Станция метро, МЦД
              <Field type="text" name="under" />
            </label>
          </fieldset>
          <fieldset className="form-row-group">
            <label>Опыт работы
              <Field type="text" name="skills" />
              <ErrorMessage name="skills" component="div" />
            </label>

            <label>График работы
              <Field type="text" name="gr" />
              <ErrorMessage name="gr" component="div" />
            </label>
          </fieldset>
          <fieldset className="form-row-group">
            <legend>Тип занятости</legend>
            <label className="radio-item">
              <Field type="radio" name="employment_type" value="full_time" />
              <span>Полная занятость</span>
            </label>
            <label className="radio-item">
              <Field type="radio" name="employment_type" value="part_time" />
              <span>Частичная занятость</span>
            </label>
            <label className="radio-item">
              <Field type="radio" name="employment_type" value="internship" />
              <span>Стажировка</span>
            </label>
            <ErrorMessage name="employment_type" component="div" />
          </fieldset>
        </Form>
      </Formik>
      <button type="submit" form="vacancyForm" className='save-button'>Сохранить</button>
      <button type="button" onClick={onCancel} className="cancle-button">Отменить</button>
    </div>
  );
};

export default VacEditView;
