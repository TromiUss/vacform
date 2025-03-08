import React from 'react';

const VacForm = ({ vacancies = [], onEditClick }) => {
  if (vacancies.length === 0) {
    return <p>Нет вакансий</p>;
  }

  return (
    <div>
      <h1>Заявки на размещение вакансий</h1>
      <ul className="vac-form__list">
        {vacancies.map((vacancy) => {
          const { name, salary, experience, address, underground, publicationDate, id } = vacancy;

          return (
            <li className="vac-form__item" key={id}>
              <div className="left-side__info">
                <div className="vac-date__post">
                  <h4>Дата публикации: {publicationDate}</h4>
                </div>
                <h2 className="vac-name">{name}</h2>
                <div className="vac-address">
                  <h4>{address}</h4>
                </div>
              </div>
              <div className="right-side__info">
                <div className="vac-salary">{salary}</div>
                <div className="vac-exp">Требуемый опыт: {experience}</div>
                <div className="vac-address__under">
                  <h4>{underground}</h4>
                </div>
              </div>
              <button className="edit-form__button" onClick={() => onEditClick(vacancy)}>Редактировать</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VacForm;
