export interface Student {
  // id: number;
  // code: string;
  // firstName: string;
  // lastName: string;
  // gender: string;
  // dob: string;
  // email: string;
  // phone: number;
}
export class Student{
  id?: number;
  code?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  dob?: string;
  email?: string;
  phone?: number;
  picture?:string;
  constructor( 
    id?: number,
    code?: string,
    firstName?: string,
    lastName?: string,
    gender?: string,
    dob?: string,
    email?: string,
    phone?: number,
    picture?:string){}
}