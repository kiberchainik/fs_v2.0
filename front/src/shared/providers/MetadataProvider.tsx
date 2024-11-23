"use client"

import { createContext, ReactNode, useContext } from "react";
import { IVacanciaesFullDate } from "@/features/agency/vacancy/types";
import { TBreadcrumbr, TCategoryPageResponse } from "@/features/category/types";

export type ResponseProps = {
    jobData?: IVacanciaesFullDate;
    categoryData?: TCategoryPageResponse;
    breadcrumbs: TBreadcrumbr;
};

export const MetadataContext = createContext<ResponseProps | undefined>(undefined);

export function MetadataProvider({
    children,
    value,
}: {
    children: ReactNode;
    value: ResponseProps | undefined;
}) {
    return <MetadataContext.Provider value={value}>{children}</MetadataContext.Provider>;
}

export const useMetadata = () => {
    const context = useContext(MetadataContext);
    if (!context) {
        throw new Error("useMetadata must be used within MetadataProvider");
    }
    return context;
}