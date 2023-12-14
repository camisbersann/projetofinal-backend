export class ContactMessage {
    constructor(email, message) {
        this.email = email;
        this.message = message;
    }

    getEmail() {
        return this.email;
    }

    getMessage() {
        return this.message;
    }
}