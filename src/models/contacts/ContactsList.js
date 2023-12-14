export class ContactList {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    getContacts() {
        return this.contacts;
    }
}