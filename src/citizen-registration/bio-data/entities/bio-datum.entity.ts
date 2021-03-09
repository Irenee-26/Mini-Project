import { ModeOfEntry } from "src/citizen-registration/citizenRegistration.types";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { LinkedIdentity } from "src/citizen-registration/linked-identity/entities/linked-identity.entity";

@Entity()
export class BioDatum {

@PrimaryGeneratedColumn() 
Id

@Column()
NIN: number;

@Column() 
firstName: string;

@Column() 
middleName: string;

@Column() 
lastName: string;

@Column() 
dateOfBirth: Date;

@Column() 
nationality: string;

@Column() 
countryOfBirth: string;

@Column() 
stateOfBirth: string;

@Column() 
townOfBirth: string;

@Column() 
residenceAddress: string;

@Column() 
profession: string;

@JoinColumn()
@OneToOne(type => LinkedIdentity, linkedidentity => linkedidentity.biodata, {cascade:true}) linkedidentity: LinkedIdentity;
}



