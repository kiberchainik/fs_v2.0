'use client'

import { useGetProfile } from "../hooks/useGetProfile";
import { Loader } from "@/shared/components/ui";
import { IUser, UserRole } from "@/features/auth/types";
import { useEffect, useState } from "react";
import { LuLogOut } from "react-icons/lu";
import { AgencySettings } from "@/features/agency/components";
import { CandidatSettings } from "@/features/candidat/components";

export default function DashboardWrapper() {
    const [userData, setUser] = useState<IUser>()
    const {user} = useGetProfile()

    useEffect(() => {
        if(user) setUser(user)
    }, [user])
    
    if(!userData) return null
    return (
        <>
            {!userData && <Loader />}
            {userData.role === UserRole.Agency && <AgencySettings />}
            {userData.role === UserRole.Candidat && <CandidatSettings />}
        </>
    );
}