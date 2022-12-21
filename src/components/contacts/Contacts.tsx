import React, { useEffect, useState } from 'react'
import dataInterface from '../interfaces/dataInterface'
import SearchBar from '../searchBar/SearchBar'
import AddContacts from './AddContacts'
import ContactsCard from './ContactsCard'
import './Contacts.css'
import Spinner from '../spinner/Spinner'

import { deleteContact, fetchAllContacts, postContact, updateContact } from '../config/contactServices'



function Contacts() {
    const [loading, setLoading] = useState(false)
    const [addModalVisible, setAddModalVisible] = useState<Boolean>(false)
    const [editModalVisible, setEditModalVisible] = useState<Boolean>(false)
    const [searchValue, setSearchValue] = useState(String)
    const [filtersVisible, setFiltersVisible] = useState<Boolean>(false)

    const [data, setData] = useState([])

    const [editObj, setEditObj] = useState()


    const addModalToggler = () => {
        setAddModalVisible(!addModalVisible)
        console.log("modal", addModalVisible)
    }
    const editModalToggler = (item: any) => {
        setEditModalVisible(!editModalVisible)
        setEditObj(item)
    }

    const onAddContactsHandler = (obj: any) => {
        postContact(obj)
        setAddModalVisible(false)
        getContacts()
    }
    const onUpdateContactsHandler = (obj: any) => {
        const id = obj.id
        console.log("contacts update pressed", id)
        updateContact(id, obj)
        setEditModalVisible(false)
        getContacts()
    }
    const onDeleteContactsHandler = (id: String) => {
        deleteContact(id)
        getContacts()
    }

    const searchHandler = (value: String) => {
        let obj = data?.find((o: any) => o.name === value);
        console.log('value', obj)
    }

    useEffect(() => {
        getContacts()
    }, []);

    const getContacts = async () => {
        setLoading(true)
        const x: any = await fetchAllContacts()
        setData(x.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })))
        setLoading(data && false)
    }

    return (
        <>
            <div className='contacts__container'>
                <SearchBar value={searchValue} addModalToggler={addModalToggler} onSearch={searchHandler} />
                <p>Contacts</p>

                <div className="spinner__center">
                    {loading && <Spinner />}
                </div>

                <div className="list">
                    {data.map((item: any) => {
                        return (
                            <ContactsCard key={item.id} name={item.name} number={item.number} email={item.email} onEditPress={() => editModalToggler(item)} onDeletePress={() => onDeleteContactsHandler(item.id)} />
                        )
                    })}
                </div>

            </div>

            {addModalVisible && <AddContacts lable={"Add Contact"} onClose={addModalToggler} onAddContacts={onAddContactsHandler} />}

            {editModalVisible && <AddContacts lable={"Edit Contact"} obj={editObj} onClose={editModalToggler} onUpdateContacts={onUpdateContactsHandler} />}
        </>
    )
}

export default Contacts