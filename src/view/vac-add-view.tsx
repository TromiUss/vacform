import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, DatePicker } from "antd";
import { VacAddViewProps } from "../types/vac-form.types";

const validationSchema = Yup.object({
  VacName: Yup.string().required("Обязательное поле"),
  Ot: Yup.string().required("Обязательное поле"),
  date: Yup.date().required("Обязательное поле"),
  PlanDate: Yup.date().required("Обязательное поле"),
  gender: Yup.string().required("Обязательное поле"),
  address: Yup.string().required("Обязательное поле"),
  experience: Yup.string().required("Обязательное поле"),
  gr: Yup.string().required("Обязательное поле"),
  employment_type: Yup.string().required("Обязательное поле"),
  salaryFrom: Yup.number().nullable(),
  salaryTo: Yup.number().nullable(),
});

const VacAddView: React.FC<VacAddViewProps> = ({
  onSubmit,
  onSuccess = () => {},
}) => {
  const initialFormValues = {
    VacName: "",
    Ot: "",
    salaryTo: "",
    salaryFrom: "",
    salary: "",
    address: "",
    underground: "",
    date: null,
    PlanDate: null,
    gender: "",
    experience: "",
    gr: "",
    employment_type: "",
  };

  return (
    <label>
      <h1>Форма размещения заявки</h1>
      <Formik
        enableReinitialize
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const parsedValues = {
            ...values,
            date: values.date ? values.date : "",
            PlanDate: values.PlanDate ? values.PlanDate : "",
            id: Date.now(),
            publicationDate: new Date().toLocaleDateString("ru-RU")
          };
          onSubmit(parsedValues);
          setSubmitting(false);
          resetForm({ values: initialFormValues });
          onSuccess();
        }}
      >
        {({ values, touched, setFieldValue, setTouched, resetForm }) => (
          <Form className="add-vac__form">
            <fieldset className="form-row-group">
              <label>
                Наименование вакансии
                <Field type="text" name="VacName" />
                <ErrorMessage name="VacName" component="div" />
              </label>

              <label>
                Отдел
                <Field type="text" name="Ot" />
                <ErrorMessage name="Ot" component="div" />
              </label>
            </fieldset>

            <fieldset className="form-row-group">
              <label>
                Дата открытия
                <DatePicker
                  name="date"
                  value={values.date}
                  onChange={(date) => setFieldValue("date", date)}
                  onBlur={() => setTouched({ ...touched, date: true })}
                />
                <ErrorMessage name="date" component="div" />
              </label>

              <label>
                Плановая дата закрытия
                <DatePicker
                  name="PlanDate"
                  value={values.PlanDate}
                  onChange={(date) => setFieldValue("PlanDate", date)}
                  onBlur={() => setTouched({ ...touched, PlanDate: true })}
                />
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

            <fieldset className="form-row-group-salary">
              <legend>Зарплата</legend>
              <div className="onSide">
                <label className="radio-item">
                  <Field type="radio" name="salary" value="На руки" />
                  <span>На руки</span>
                </label>
                <label className="radio-item">
                  <Field type="radio" name="salary" value="До вычета налога" />
                  <span>До вычета налога</span>
                </label>
              </div>
              <div className="underSide">
                <label className="input-group">
                  От
                  <Field type="text" name="salaryFrom" />
                </label>
                <label className="input-group">
                  До
                  <Field type="text" name="salaryTo" />
                </label>
              </div>
            </fieldset>

            <fieldset className="form-row-group">
              <label>
                Адрес
                <Field type="text" name="address" />
                <ErrorMessage name="address" component="div" />
              </label>

              <label>
                Станция метро, МЦД
                <Field type="text" name="underground" />
              </label>
            </fieldset>

            <fieldset className="form-row-group">
              <label>
                Опыт работы
                <Field type="text" name="experience" />
                <ErrorMessage name="experience" component="div" />
              </label>

              <label>
                График работы
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

            <Button type="primary" htmlType="submit">
              Отправить
            </Button>
            <Button
              type="default"
              onClick={(e) => {
                e.preventDefault();
                resetForm();
              }}
            >
              Сбросить
            </Button>
          </Form>
        )}
      </Formik>
    </label>
  );
};

export default VacAddView;
