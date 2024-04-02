import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SuperAdmin } from '../super-admin/super-admin.entity'; 

@Entity()
export class Administrador extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => SuperAdmin) 
    @JoinColumn({ name: 'id_super_administrador' }) 
    superAdmin: SuperAdmin; 

    @Column()
    licencia_activa: boolean;

    @Column()
    fecha_activacion: Date;

    @Column()
    fecha_expiracion: Date;

}
