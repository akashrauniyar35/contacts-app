interface data {
    id: String,
    name: String
    number: String
    email: String
} export interface dataInterface extends Array<data> { }

export interface addContactsInterface {
    email: String
    name: String
    number: String
}

export interface updateContactsInterface {
    id: String,
    name: String
    email: String
    number: String
}
