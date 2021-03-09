import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { BioDatum } from "src/citizen-registration/bio-data/entities/bio-datum.entity";

@Entity()
export class LinkedIdentity {
    
    @PrimaryGeneratedColumn() 
    Id:number;

    @Column()
    NIN: number;

    @Column() 
    BVN: string;

    @Column() 
    MoblieNumbers: number;
    BioDatum: any;
    biodata: any;


    @OneToOne(type => BioDatum, BioDatum => BioDatum.linkedidentity) biodatum: BioDatum;

}

