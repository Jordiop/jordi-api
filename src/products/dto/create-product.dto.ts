export class CreateProductDto {
    name: string;
    description: string;
    price: number;
    stock: number;
    provider: string;
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    productImage?: string;
}
