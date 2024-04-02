import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, UpdateDateColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ enum: ['superadmin', 'admin', 'user'] })
    role: string;

    @Column()
    nombreCompleto: string;

    @Column()
    apellido: string;

    @Column()
    fechadenacimiento: Date;

    @Column()
    telefono: string;

    @Column()
    rfc: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ enum: ['facebook', 'instagram', 'sitio web', 'recomendacion', 'otro'] })
    fuenteOriginal: string;

    @UpdateDateColumn()
    updateAt: Date;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 8);
    }

    async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}
