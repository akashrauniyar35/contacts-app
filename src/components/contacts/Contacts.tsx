import React, { useState } from 'react'
import dataInterface from '../interfaces/dataInterface'
import SearchBar from '../searchBar/SearchBar'
import AddContacts from './AddContacts'
import './Contacts.css'
import ContactsCard from './ContactsCard'


const data: dataInterface = [
    {
        id: '00',
        name: 'Millan Adhikari',
        number: "0415701345",
        email: 'testOne@gmail.com',

    },
    {
        id: '01',
        name: 'Samsung Test',
        number: "1",
        email: 'testTwo@gmail.com',

    },
    {
        id: '02',
        name: 'Apple Ball',
        number: "2",
        email: 'testTwo@gmail.com',

    },
    {
        id: '03',
        name: 'Sample Man',
        number: "12",
        email: 'testTwo@gmail.com',
    },
    {
        id: '03',
        name: 'Sample Man',
        number: "12",
        email: 'testTwo@gmail.com',
    },
    {
        id: '03',
        name: 'Sample Man',
        number: "12",
        email: 'testTwo@gmail.com',
    },
    {
        id: '03',
        name: 'Sample Man',
        number: "12",
        email: 'testTwo@gmail.com',
    },
    {
        id: '03',
        name: 'Sample Man',
        number: "12",
        email: 'testTwo@gmail.com',
    },
    {
        id: '03',
        name: 'Sample Man',
        number: "12",
        email: 'testTwo@gmail.com',
    },
    {
        id: '03',
        name: 'Sample Man',
        number: "12",
        email: 'testTwo@gmail.com',
    },
    {
        id: '03',
        name: 'Sample Man',
        number: "12",
        email: 'testTwo@gmail.com',
    },
]


function Contacts() {
    const [addModalVisible, setAddModalVisible] = useState<Boolean>(false)
    const [filtersVisible, setFiltersVisible] = useState<Boolean>(false)
    const [editObj, setEditObj] = useState()



    const addModalToggler = () => {
        setAddModalVisible(!addModalVisible)
        console.log("modal", addModalVisible)
    }
    const editHandler = (item: any) => {
        setAddModalVisible(!addModalVisible)
        setEditObj(item)
    }

    const onSaveHandler = () => {

    }

    return (
        <>
            <div className='contacts__container'>
                <SearchBar addModalToggler={addModalToggler} />
                {addModalVisible && <AddContacts obj={editObj} addModalToggler={addModalToggler} onSaveHandler={onSaveHandler} />}
                <p>Contacts</p>

                <div className="list">
                    {data.map((item: any) => {
                        return (
                            <ContactsCard key={item.id} name={item.name} number={item.number} email={item.email} onEditPress={() => editHandler(item)} />
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default Contacts