import { CreateLinkedIdentityDto } from "src/citizen-registration/linked-identity/dto/create-linked-identity.dto";
import { ModeOfEntry } from "src/citizen-registration/citizenRegistration.types";
export class CreateBioDatumDto {

    readonly firstName: string;
    readonly middleName: string;
    readonly lastName: string;
    readonly dateOfBirth: Date;
    readonly nationality:string;
    readonly countryOfBirth:string;
    readonly stateOfBirth:string;
    readonly townOfBirth:string;
    readonly residenceAddress:string;
    readonly profession:string;
    readonly linkedidentity: CreateLinkedIdentityDto; 
}


