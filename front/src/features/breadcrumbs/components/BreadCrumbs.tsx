import { TBreadcrumbr } from "@/features/category/types";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/shared/components"
import Link from "next/link"

interface BreadcrumbsProps {
    breadcrumbs: TBreadcrumbr;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbs.map((breadcrumb, index) => (
                    <BreadcrumbItem key={index}>
                        {index > 0 && (
                            <BreadcrumbSeparator />
                        )}
                        {index < breadcrumbs.length - 1 ? (
                            <Link href={breadcrumb.href} legacyBehavior passHref>
                                <BreadcrumbLink>{breadcrumb.name}</BreadcrumbLink>
                            </Link>
                        ) : (
                            <BreadcrumbPage className="text-sm font-medium text-gray-500">
                                {breadcrumb.name}
                            </BreadcrumbPage>
                        )}
                    </BreadcrumbItem>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default Breadcrumbs;