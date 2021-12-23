export class User {
firstName: string;
lastName: string;
email: string;
phone: string;
birthDate: number;
street: string;
zipCode: number;
city: string;
gender: string;
userId: string;

constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.email = obj ? obj.email : '';
    this.phone = obj ? obj.phone : '';
    this.birthDate = obj ? obj.birthDate : '';
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
    this.gender = obj ? obj.gender : '';
    this.userId = obj ? obj.customIdName : '';
}

public toJSON(){
    return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        birthDate: this.birthDate,
        street: this.street,
        zipCode: this.zipCode,
        city: this.city,
        gender: this.gender

    };
}

}