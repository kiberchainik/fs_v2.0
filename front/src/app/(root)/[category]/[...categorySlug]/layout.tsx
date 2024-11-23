import { MetadataProvider, ResponseProps } from "@/shared/providers";
import { getPageContent, Props } from "./getPageContent";

// Передаем данные в generateMetadata через Layout
export const generateMetadata = (
    {
        params,
        searchParams,
        data
    }: {
        params: Props["params"],
        searchParams: Props["searchParams"],
        data: ResponseProps | undefined
    }) => {
    if (data?.categoryData?.vacancies) {
        return {
            title: data.categoryData.vacancies.name,
            description: data.categoryData.vacancies.description,
            openGraph: {
                title: data.categoryData.vacancies.name,
                description: data.categoryData.vacancies.description,
            },
        };
    }

    if (data?.jobData) {
        return {
            title: data.jobData.title,
            description: data.jobData.description,
            openGraph: {
                title: data.jobData.title,
                description: data.jobData.description,
            },
        };
    }

    return {
        title: "Страница не найдена",
        description: "Контент отсутствует",
        openGraph: {
            title: "Страница не найдена",
            description: "Контент отсутствует",
        },
    };
};

export default async function Layout({
    children,
    params,
    searchParams,
}: {
    children: React.ReactNode;
    params: Props["params"];
    searchParams: Props["searchParams"];
}) {
    const data = await getPageContent({ params, searchParams });

    return (
        <MetadataProvider value={data}>
            {children}
        </MetadataProvider>
    );
}