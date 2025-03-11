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

const VacAddView = ({ initialValues, onSubmit, onSuccess }) => {
  return (
    <div>
      <h1>Форма размещения заявки</h1>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          onSubmit(values);
          setSubmitting(false);
          resetForm();
          onSuccess();
        }}
      >
        {({ resetForm }) => (
          <>
            <Form id="vacancyForm" className="add-vac__form">
              <fieldset className="form-row-group">
                <label htmlFor="VacName">Наименование вакансии</label>
                <Field type="text" id="VacName" name="VacName" />
                <ErrorMessage name="VacName" component="div" />

                <label htmlFor="Ot">Отдел</label>
                <Field type="text" id="Ot" name="Ot" />
                <ErrorMessage name="Ot" component="div" />
              </fieldset>
              <fieldset className="form-row-group">
                <label htmlFor="date">Дата открытия</label>
                <Field type="date" id="date" name="date" />
                <ErrorMessage name="date" component="div" />

                <label htmlFor="PlanDate">Плановая дата закрытия</label>
                <Field type="date" id="PlanDate" name="PlanDate" />
                <ErrorMessage name="PlanDate" component="div" />
              </fieldset>
              <fieldset>
                <legend>Пол</legend>
                <div className="radio-item">
                  <Field type="radio" name="gender" value="male" />
                  <span>Мужской</span>
                </div>
                <div className="radio-item">
                  <Field type="radio" name="gender" value="female" />
                  <span>Женский</span>
                </div>
                <ErrorMessage name="gender" component="div" />
              </fieldset>
              <fieldset className="form-row-group">
                <legend>Зарплата</legend>
                <div className="radio-item">
                  <Field type="radio" name="salary" value="На руки" />
                  <span>На руки</span>
                </div>
                <div className="radio-item">
                  <Field type="radio" name="salary" value="До вычета налога" />
                  <span>До вычета налога</span>
                </div>
                <div className="input-group">
                  <label htmlFor="salaryFrom">От</label>
                  <Field type="text" id="salaryFrom" name="salaryFrom" />
                </div>
                <div className="input-group">
                  <label htmlFor="salaryTo">До</label>
                  <Field type="text" id="salaryTo" name="salaryTo" />
                </div>
              </fieldset>
              <fieldset className="form-row-group">
                <label htmlFor="address">Адрес</label>
                <Field type="text" id="address" name="address" />
                <ErrorMessage name="address" component="div" />

                <label htmlFor="under">Станция метро, МЦД</label>
                <Field type="text" id="under" name="under" />
              </fieldset>
              <fieldset className="form-row-group">
                <label htmlFor="skills">Опыт работы</label>
                <Field type="text" id="skills" name="skills" />
                <ErrorMessage name="skills" component="div" />

                <label htmlFor="gr">График работы</label>
                <Field type="text" id="gr" name="gr" />
                <ErrorMessage name="gr" component="div" />
              </fieldset>
              <fieldset className="form-row-group">
                <legend>Тип занятости</legend>
                <div className="radio-item">
                  <Field type="radio" name="employment_type" value="full_time" />
                  <span>Полная занятость</span>
                </div>
                <div className="radio-item">
                  <Field type="radio" name="employment_type" value="part_time" />
                  <span>Частичная занятость</span>
                </div>
                <div className="radio-item">
                  <Field type="radio" name="employment_type" value="internship" />
                  <span>Стажировка</span>
                </div>
                <ErrorMessage name="employment_type" component="div" />
              </fieldset>
            </Form>
            <button type="submit" form="vacancyForm" className="send-button">Отправить</button>
            <button type="button" onClick={(e) => { e.preventDefault(); resetForm(); }} className="inner-button">Сбросить</button>
          </>
        )}
      </Formik>
    </div>
  );
};

export default VacAddView;
