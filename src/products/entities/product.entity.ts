import {
    Column, 
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
    
    @Column()
    price: number;

    @Column()
    stock: number;

    @Column()
    provider: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @Column({ nullable: true })
    productImage: string;

    @DeleteDateColumn()
    deletedAt: Date;

}
