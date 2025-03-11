import vacList from '../mock/vac-list';

class VacancyModel {
    constructor() {
        this.vacancies = vacList;
    }

    getVacancies() {
        return this.vacancies;
    }

    getVacancyById(id) {
        return this.vacancies.find(vacancy => vacancy.id === id);
    }

    addVacancy(vacancyData) {
        const newVacancy = {
            id: this.vacancies.length + 1,
            ot: vacancyData.Ot,
            name: vacancyData.VacName,
            salary: vacancyData.salary,
            salaryFrom: vacancyData.salaryFrom,
            salaryTo: vacancyData.salaryTo,
            address: vacancyData.address,
            gender: vacancyData.gender,
            PlanDate: vacancyData.PlanDate,
            underground: vacancyData.under,
            experience: vacancyData.skills,
            gr: vacancyData.gr,
            employment_type: vacancyData.employment_type,
            publicationDate: new Date().toLocaleDateString(),
            date: vacancyData.date,
        };
        this.vacancies.push(newVacancy);
    }

    updateVacancy(id, updatedData) {
        const vacancyIndex = this.vacancies.findIndex(vacancy => vacancy.id === id);
        if (vacancyIndex !== -1) {
            this.vacancies[vacancyIndex] = { ...this.vacancies[vacancyIndex], ...updatedData };
            this.vacancies = [...this.vacancies];
        }
    }



}

export default VacancyModel;