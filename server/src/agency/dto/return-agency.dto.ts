import { Prisma } from '@prisma/client'

export const returnAgencyBaseObject: Prisma.AgencyDataSelect = {
    slug: true,
    agency_name: true,
    about: true,
    address: true,
    logo: true,
    p_iva_c_f: true,
    phone: true,
    createdAt: true,
    user: {
        select: {
            email: true
        }
    }
}