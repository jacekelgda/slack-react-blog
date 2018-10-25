import React from 'react'
import './Conversation.css'

const Conversation = ({ options }) => (
    <div>
        <p>Are you happy?</p>
        <div className="Options">
            {options[0]}
            {options[1]}
        </div>
    </div>
)

export default Conversation
