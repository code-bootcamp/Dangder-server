import { Field, ObjectType } from '@nestjs/graphql';
import { Dog } from 'src/apis/dogs/entities/dog.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Interest {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  interest: string;

  @Field(() => [Dog])
  @ManyToMany(() => Dog, (dogs) => dogs.interests)
  dogs: Dog[];
  // Interest N : Dog M 연결
}
