const VacAddView = ({ initialValues, validationSchema, onSubmit }) => {
  return (
    <div>
      <h1>Добавить новую вакансию</h1>
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
          <button type="submit">Создать вакансию</button>
        </Form>
      </Formik>
    </div>
  );
};

export default VacAddView;