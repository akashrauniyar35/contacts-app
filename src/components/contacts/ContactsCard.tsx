import React, { useState } from 'react'
import { getInitials } from '../getInitials'
import customerCardInterface from '../interfaces/customerCardInterface'
import AddContacts from './AddContacts'
import './ContactsCard.css'

function ContactsCard({ key, name, number, email, onEditPress }: customerCardInterface) { 

    return (
        <>
            <div className="card__container" onClick={onEditPress}>
                <div className="circle">
                    <p>{getInitials(name)}</p>
                </div>
                <div className="right__box">
                    <p>{name}</p>
                    <p className="phone__number">{number}</p>
                </div>
            </div>
        </>


    )
}

export default ContactsCard