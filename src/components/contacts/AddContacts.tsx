import React, { useState } from 'react'
import "./AddContacts.css"
import { MdClose } from 'react-icons/md';


function AddContacts({ lable, onClose, onUpdateContacts, onAddContacts, obj, }: any) {

    const [addData, setAddData] = useState({ name: '', number: '', email: '' })
    const [editedData, setEditedData] = useState({ id: obj?.id, name: obj?.name, number: obj?.number, email: obj?.email })

    return (
        <>
            <div className="transparent__bg">

                <div className="modal">

                    <div className="flex">
                        <p>{lable}</p>
                        <MdClose onClick={onClose} style={{ fontSize: '1.5rem', color: '#696969' }} />
                    </div>

                    <div className="helper__flex">

                        <div className="form">

                            <input
                                onChange={e => lable === "Edit Contact" ? setEditedData({ ...editedData, name: e.target.value }) : setAddData({ ...addData, name: e.target.value })}
                                placeholder={lable === "Edit Contact" ? obj.name : "Name"}
                                value={lable === "Edit Contact" ? editedData?.name : addData.name} />

                            <input
                                onChange={e => lable === "Edit Contact" ? setEditedData({ ...editedData, number: e.target.value }) : setAddData({ ...addData, number: e.target.value })}
                                placeholder={lable === "Edit Contact" ? obj.number : "Number"}
                                value={lable === "Edit Contact" ? editedData?.number : addData.number} />

                            <input
                                type="email"
                                onChange={e => lable === "Edit Contact" ? setEditedData({ ...editedData, email: e.target.value }) : setAddData({ ...addData, email: e.target.value })}
                                placeholder={lable === "Edit Contact" ? obj.email : "Email"}
                                value={lable === "Edit Contact" ? editedData?.email : addData.email} />
                        </div>

                        <button className="save__button" onClick={() => lable === "Edit Contact" ? onUpdateContacts(editedData) : onAddContacts(addData)}>{lable === "Edit Contact" ? "Update" : "Save"}</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddContacts