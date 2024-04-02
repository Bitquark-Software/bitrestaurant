import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';
import { DeepPartial } from 'typeorm'; 

@Injectable()
export class UsersService {

    async create (createUserDto: CreateUserDto){
        const user = User.create(createUserDto as DeepPartial<User>);
        await user.save();

        delete user.password;
        return user;
    }

    async showById(id: number): Promise<User>{
        const user = await this.findById(id);

        delete user.password;
        return user;
    }

    async findById(id: number): Promise<User | undefined> {
        return await User.findOne(id);
    }

    async findByEmail(email: string): Promise<User | undefined>{
        return await User.findOne({
            where: {
                email: email
            }
        });
    }
}
