import React, { useState } from 'react';
import Contacts from './components/contacts/Contacts';
import './App.css';
import { deleteContact, fetchAllContacts, postContact, updateContact } from './components/config/contactServices';
import { addContactsInterface, dataInterface, updateContactsInterface } from './components/interfaces/dataInterface';

function App() {

  const [loading, setLoading] = useState(false)
  const [addModalVisible, setAddModalVisible] = useState<Boolean>(false)
  const [editModalVisible, setEditModalVisible] = useState<Boolean>(false)
  const [searchValue, setSearchValue] = useState(String)
  const [filterData, setFilterData] = useState<dataInterface>()

  const [data, setData] = useState<dataInterface>()
  const [editObj, setEditObj] = useState<updateContactsInterface>()


  const addModalToggler = () => {
    setAddModalVisible(!addModalVisible)
    console.log("modal", addModalVisible)
  }
  const editModalToggler = (item: updateContactsInterface) => {
    console.log('item', item)
    setEditModalVisible(!editModalVisible)
    setEditObj(item)
  }

  const onAddContactsHandler = (obj: addContactsInterface) => {
    postContact(obj)
    setAddModalVisible(false)
    getContacts()
  }
  const onUpdateContactsHandler = (obj: updateContactsInterface) => {
    let id = obj.id
    updateContact(id, obj)
    setEditModalVisible(false)
    getContacts()
  }
  const onDeleteContactsHandler = (id: string) => {
    deleteContact(id)
    getContacts()
  }

  const searchHandler = (value: string) => {
    setSearchValue(value)
    let length = value.length
    const obj: any = data?.filter((item: any) => item.name.substring(0, length).toLowerCase() == value.toLowerCase() && item)
    setFilterData(obj)

  }

  const getContacts = async () => {
    setLoading(true)
    const x: any = await fetchAllContacts()
    const shortingData = x.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
    setData(shortingData.sort((a: any, b: any) => a.name.localeCompare(b.name)))
    setLoading(false)
    setSearchValue('')
  }



  return (
    <div className="container">
      <Contacts
        searchValue={searchValue}
        filterData={filterData}
        loading={loading}
        getContacts={getContacts}
        addModalToggler={addModalToggler}
        searchHandler={searchHandler}
        editModalToggler={editModalToggler}
        addModalVisible={addModalVisible}
        onAddContactsHandler={onAddContactsHandler}
        editModalVisible={editModalVisible}
        editObj={editObj}
        onUpdateContactsHandler={onUpdateContactsHandler}
        onDeleteContactsHandler={onDeleteContactsHandler}
        data={data}

      />
    </div>
  );
}

export default App;
