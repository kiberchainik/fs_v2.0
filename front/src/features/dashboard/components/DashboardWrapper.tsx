'use client'

import { UserRole } from "@/features/auth/types";
import { AgencySettings } from "@/features/agency/components";
import { CandidatSettings } from "@/features/candidat/components";
import { useStore } from "@tanstack/react-store";
import { store } from "@/shared/store/store";

export default function DashboardWrapper() {
    const user = useStore(store, (store) => store.state.user);

    if(!user) return null
    return (
        <>
            {user.role === UserRole.Agency && <AgencySettings />}
            {user.role === UserRole.Candidat && <CandidatSettings />}
        </>
    );
}