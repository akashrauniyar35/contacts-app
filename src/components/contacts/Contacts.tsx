import React, { useEffect, useState } from 'react'
import { dataInterface, updateContactsInterface } from '../interfaces/dataInterface'
import SearchBar from '../searchBar/SearchBar'
import AddContacts from './AddContacts'
import ContactsCard from './ContactsCard'
import './Contacts.css'
import Spinner from '../spinner/Spinner'



interface Props {
    searchValue: String
    filterData: dataInterface | undefined
    loading: Boolean
    getContacts: () => Promise<void>
    addModalToggler: () => void
    searchHandler: (value: string) => void
    editModalToggler: (item: any) => void
    addModalVisible: Boolean
    onAddContactsHandler: (obj: any) => void
    editModalVisible: Boolean
    editObj: updateContactsInterface | undefined
    onUpdateContactsHandler: (obj: updateContactsInterface) => void
    onDeleteContactsHandler: (obj: any) => void
    data: dataInterface | undefined
}


function Contacts({
    searchValue,
    filterData,
    loading,
    getContacts,
    addModalToggler,
    searchHandler,
    editModalToggler,
    addModalVisible,
    onAddContactsHandler,
    editModalVisible,
    editObj,
    onUpdateContactsHandler,
    onDeleteContactsHandler,
    data,

}: Props) {



    useEffect(() => {
        searchValue === '' && getContacts()
    }, [searchValue]);



    return (
        <>
            <div className='contacts__container'>
                
                <SearchBar value={searchValue} addModalToggler={addModalToggler} onSearch={searchHandler} onRefresh={getContacts} />
                <p>Contacts</p>

                <div className="spinner__center">
                    {loading && <Spinner />}
                </div>

                <div className="list">
                    
                    {searchValue !== '' && filterData?.length === 0 ? <p className="no__results">No results found</p> : null}

                    {searchValue !== '' ? filterData?.map((item: any) => {

                        return (
                            <ContactsCard key={item.id} name={item.name} number={item.number} email={item.email} onEditPress={() => editModalToggler(item)} onDeletePress={() => onDeleteContactsHandler(item.id)} />
                        )
                    })
                        :
                        data?.map((item: any) => {
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