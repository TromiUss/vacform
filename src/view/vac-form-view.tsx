import React from 'react';
import { Vacancy } from '../model/vacancy';

export type VacFormProps = {
  vacancies: Vacancy[];
  onEditClick: (vacancy: Vacancy) => void;
  onSubmit: (values: Vacancy) => void;
  onSuccess?: () => void;
  onCancel?: () => void;
};

const VacForm: React.FC<VacFormProps> = ({ vacancies = [], onEditClick }) => {
  if (vacancies.length === 0) {
    return <p>Нет вакансий</p>;
  }

  return (
    <div>
      <h1>Заявки на размещение вакансий</h1>
      <ul className="vac-form__list">
        {vacancies.map((vacancy) => {
          const { name, salaryFrom, salary, experience, address, underground, publicationDate, id } = vacancy;

          return (
            <li className="vac-form__item" key={id}>
              <button
                className="edit-button"
                onClick={() => onEditClick(vacancy)}
                aria-label="Редактировать"
              >
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
              </button>
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
                <div className="vac-salary-from right-side-item">от {salaryFrom}</div>
                <div className="vac-salary right-side-item">{salary}</div>
                <div className="vac-exp right-side-item">Требуемый опыт: {experience}</div>
                <div className="vac-address__under right-side-item">
                  <h4>{underground}</h4>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VacForm;
