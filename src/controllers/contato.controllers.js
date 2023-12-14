import { ContactMessage } from "../models/contacts/contactMessage.js";
import { ContactList } from "../models/contacts/contactsList.js";

const list = new ContactList();

export const getContacts = (req, res) => {
    return res.status(200).send(list.getContacts());
}

export const createContact = (req, res) => {
    const { email, message } = req.body;

    const contact = new ContactMessage(email, message);

    if (!email || !message) {
        return res.status(400).send({ message: "Preencha todos os campos" });
    }

    if(message.length < 10){
        return res.status(400).send({ message: "Digite com mais de 10 caracteres" });
    }

    list.addContact(contact);

    return res.status(200).send({ message: "Mensagem enviada com sucesso!", contact });
}
