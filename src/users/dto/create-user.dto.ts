export class CreateUserDto {
  email: string;
  password: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  profileImage?: string;
}
