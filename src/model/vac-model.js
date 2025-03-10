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
            name: vacancyData.VacName,
            salary: vacancyData.salary,
            experience: vacancyData.skills,
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


    deleteVacancy(id) {
        this.vacancies = this.vacancies.filter(vacancy => vacancy.id !== id);
    }
}

export default VacancyModel;