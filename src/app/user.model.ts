export interface User {
    id: number;
    name: string;
    email: string;
    firstName: string;
    lastName: string;
    dob: string;
    allergies: null;
    userProfile: {
        id: number;
        role: string;
    }
    prescriptionList: []

}