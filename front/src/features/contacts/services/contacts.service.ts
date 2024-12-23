import { axiosPublic } from "@/shared/api";
import { TypeContactSchema } from "../schemes/contact.schema";
import { API_URL } from "@/shared/config";

class ContactsService {
    async sendContactForm(data: TypeContactSchema) {
        return await axiosPublic.post(API_URL.contacts(), data)
    }
}

export const contactsServices = new ContactsService();