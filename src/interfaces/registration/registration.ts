export interface ParentInfo {
  motherFullName: string;
  gurdianFullName?: string;
  fatherFullName?: string;
  dateOfBirth: string;
  passportNumber: string;
  homeLanguage: string;
  cellNumber: string;
  email: string;
  companyName: string;
  position: string;
  medicalAidCard: File | null;
  immunizationCard?: File | null;
  homeAdress: string;
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

export interface NextOfKinInfo {
  fullName: string;
  relationship: string;
  contactNumber: string;
  email?: string;
  physicalAddress: string;
}

export interface Declaration {
  agreedToTerms: boolean;
  signature: string;
  dateSigned: string;
}

export interface Conditions {
  acceptedConditions: boolean;
  acceptedPrivacyPolicy: boolean;
  acceptedCommunicationTerms: boolean;
}

export interface FormData {
  childInfo?: ChildInfo;
  parentInfo?: ParentInfo;
  nextOfKinInfo?: NextOfKinInfo;
  declaration?: Declaration;
  conditions?: Conditions;
}