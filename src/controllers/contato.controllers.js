import { ContactMessage } from "../models/contacts/contactMessage";
import { ContactList } from "../models/contacts/contactsList";

const list = new ContactList();

export const getContacts = (req, res) => {
    return res.status(200).send(list.getContacts());
}

export const createContact = (req, res) => {
    const { email, message } = req.body;

    const contact = new ContactMessage(email, message);

    list.addContact(contact);

    return res.status(200).send({ message: "Mensagem enviada com sucesso!", contact });
}
