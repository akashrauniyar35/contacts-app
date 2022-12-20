import React, { useState } from 'react'
import "./AddContacts.css"
import { MdClose } from 'react-icons/md';


function AddContacts({ addModalToggler, onSaveHandler, obj }: any) {
    const [addData, setAddData] = useState({ name: '', number: '', email: '' })

    return (
        <>
            <div className="transparent__bg">

                <div className="modal">

                    <div className="flex">
                        <p>Add Contacts</p>
                        <MdClose onClick={addModalToggler} style={{ fontSize: '1.5rem', color: '#696969' }} />
                    </div>

                    <div className="helper__flex">

                        <div className="form">
                            <input placeholder={obj ? obj.name : 'Name'} />
                            <input placeholder={obj ? obj.number : 'Number'} />
                            <input placeholder={obj ? obj.email : 'Email'} />
                        </div>

                        <button className="save__button">Save</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddContacts