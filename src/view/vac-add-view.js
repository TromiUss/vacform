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

const VacAddView = ({ initialValues, onSubmit }) => {
  return (
    <div>
      <h1>Форма размещения заявки</h1>
      <Formik enableReinitialize initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className="add-vac__form">
          <fieldset>
            <label htmlFor="VacName">Наименование вакансии</label>
            <Field type="text" id="VacName" name="VacName" />
            <ErrorMessage name="VacName" component="div" />

            <label htmlFor="Ot">Отдел</label>
            <Field type="text" id="Ot" name="Ot" />
            <ErrorMessage name="Ot" component="div" />
          </fieldset>
          <fieldset>
            <label htmlFor="date">Дата открытия</label>
            <Field type="date" id="date" name="date" />
            <ErrorMessage name="date" component="div" />

            <label htmlFor="PlanDate">Плановая дата закрытия</label>
            <Field type="date" id="PlanDate" name="PlanDate" />
            <ErrorMessage name="PlanDate" component="div" />
          </fieldset>
          <fieldset>
            <legend>Пол</legend>
            <label>
              <Field type="radio" name="gender" value="male" /> Мужской
            </label>
            <label>
              <Field type="radio" name="gender" value="female" /> Женский
            </label>
            <ErrorMessage name="gender" component="div" />
          </fieldset>
          <fieldset>
            <legend>Зарплата</legend>
            <label>
              <Field type="radio" name="salary" value="net" /> На руки
            </label>
            <label>
              <Field type="radio" name="salary" value="gross" /> До вычета налога
            </label>
            <label htmlFor="salaryFrom">От</label>
            <Field type="text" id="salaryFrom" name="salaryFrom" />
            <label htmlFor="salaryTo">До</label>
            <Field type="text" id="salaryTo" name="salaryTo" />
          </fieldset>
          <fieldset>
            <label htmlFor="address">Адрес</label>
            <Field type="text" id="address" name="address" />
            <ErrorMessage name="address" component="div" />

            <label htmlFor="under">Станция метро, МЦД</label>
            <Field type="text" id="under" name="under" />
          </fieldset>
          <fieldset>
            <label htmlFor="skills">Опыт работы</label>
            <Field type="text" id="skills" name="skills" />
            <ErrorMessage name="skills" component="div" />

            <label htmlFor="gr">График работы</label>
            <Field type="text" id="gr" name="gr" />
            <ErrorMessage name="gr" component="div" />
          </fieldset>
          <fieldset>
            <legend>Тип занятости</legend>
            <label>
              <Field type="radio" name="employment_type" value="full_time" /> Полная занятость
            </label>
            <label>
              <Field type="radio" name="employment_type" value="part_time" /> Частичная занятость
            </label>
            <label>
              <Field type="radio" name="employment_type" value="internship" /> Стажировка
            </label>
            <ErrorMessage name="employment_type" component="div" />
          </fieldset>
          <button type="submit">Создать вакансию</button>
        </Form>
      </Formik>
    </div>
  );
};

export default VacAddView;
