export interface ParentInfo {
  motherFullName: string;
  gurdianFullName?: string;
  fatherFullName?: string;
  dateOfBirth: string;
  passportNumber: string;
  homeLanguage: string;
  cellNumber: string;
  email: string;
  companyName : string;
  position: string;
  medicalAidCard: File | null;
  immunizationCard?: File | null;
  homeAdress: '';

}

export interface ChildInfo {
  fullName: string;
  dateOfBirth: string;
  passportNumber: string;
  homeLanguage: string;
  campus: string;
  medicalConditions: string;
  allergies: string;
  chronicCondition: string;
  diagnoses: string[];
  medicalAidCard: File | null;
  immunizationCard: File | null;
  staysWith: string;
  enrolledServices: string[];
  childPhoto?: File;
}