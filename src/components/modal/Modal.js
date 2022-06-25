import React from 'react'
import { IoIosSend } from 'react-icons/io';
import { VscError } from 'react-icons/vsc';
import './Modal.css'

export const Modal = ({text, resp}) => {
  return (
    <div className='black-background'>
        <div className='modal'>

            {
              resp && <IoIosSend className='airplane' />
            }

            {
              !resp && <VscError className='airplane' />
            }

            <h4>{text}</h4>

        </div>
    </div>
  )
}
