import React, { useState } from 'react'
import { getInitials } from '../getInitials'
import customerCardInterface from '../interfaces/customerCardInterface'
import { MdEdit, MdDelete } from 'react-icons/md';
import './ContactsCard.css'

function ContactsCard({ key, name, number, email, onEditPress, onDeletePress }: customerCardInterface) {

    return (
        <>
            <div className="card__container">
                <div className="circle">
                    <p>{getInitials(name)}</p>
                </div>
                <div className="right__box">
                    <div>
                        <p className="name">{name}</p>
                        <div className="flex">
                            <p>{number}</p>
                            <div className="dot"></div>
                            <p>{email}</p>
                        </div>
                    </div>
                    <div className="action__buttons">
                        <button className="edit__button" onClick={onEditPress}><MdEdit /></button>
                        <button className="delete__button" onClick={onDeletePress}><MdDelete /></button>
                    </div>

                </div>
            </div>
        </>


    )
}

export default ContactsCard