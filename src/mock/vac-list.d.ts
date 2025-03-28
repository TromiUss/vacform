export type Vacancy = {
  id: number;
  name: string;
  ot: string;
  salary: string;
  salaryFrom: string;
  salaryTo: string;
  date: string | Date | null;
  PlanDate: string | Date | null;
  gender: string;
  experience: string;
  address: string;
  underground: string;
  gr: string;
  employment_type: string;
  publicationDate: string;
  };
  
  declare const vacList: Vacancy[];
  export default vacList;
  