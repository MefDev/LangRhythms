import { UserRole } from '@prisma/client';

export interface User {
    id: string;
    email: string;
    password: string;
    fullName: string;
    role: UserRole;
}


export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface DataStoredInToken {
  _id: string;
}
