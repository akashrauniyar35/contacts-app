import firebaseDB from './firebase';

import {
    collection,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    getDocs,
    getDoc
} from 'firebase/firestore';

const contactsCollectionRef = collection(firebaseDB, "contacts");

export const postContact = (obj: any) => (
    addDoc(contactsCollectionRef, obj)
);

export const updateContact = (id: any, updatedObj: any) => {
    const contactDoc = doc(firebaseDB, "contacts", id)
    return updateDoc(contactDoc, updatedObj)
}

export const deleteContact = (id: any) => {
    const contactDoc = doc(firebaseDB, "contacts", id)
    return deleteDoc(contactDoc)
};

export const fetchAllContacts = () => (
    getDocs(contactsCollectionRef)
)

export const fectchContactID = (id: any) => {
    const contactDoc = doc(firebaseDB, "contacts", id)
    return getDoc(contactDoc)
}

