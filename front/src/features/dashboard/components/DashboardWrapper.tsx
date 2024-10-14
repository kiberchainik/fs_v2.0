'use client'

import { UserRole } from "@/features/auth/types";
import { AgencySettings } from "@/features/agency/components";
import { CandidatSettings } from "@/features/candidat/components";
import { useQueryClient } from "@tanstack/react-query";
import { IUserMenuHeaderData } from "@/features/userHeaderBtn/types/userMenuData.type";

export default function DashboardWrapper() {
    const queryClient = useQueryClient()
    const user = queryClient.getQueryData<IUserMenuHeaderData>(['getUserHeaderData'])
    
    if(!user) return null
    return (
        <>
            {user.role === UserRole.Agency && <AgencySettings />}
            {user.role === UserRole.Candidat && <CandidatSettings />}
        </>
    );
}