import { UserRole } from "@/features/auth/types";

export interface IUserMenuHeaderData {
    role: UserRole;
    email: string;
    isVerified: boolean;
    name?: string;
    avatar?: string;
}