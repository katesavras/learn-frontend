import React, {useState} from 'react';
import {FiChevronDown, FiChevronUp} from 'react-icons/fi';
import './style.scss';




export const Accordion = ({i, index}) => {
    const [isOpen, setIsOpen] =  useState(false)

    const headerHandleClick = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

  return (
      <div key={i.question.toString()} className="accordion__content">
          <div className="accordion__header" onClick={headerHandleClick}>
              <p><span>{index}. </span>{i.question}</p>
              {isOpen ? <FiChevronUp/> : <FiChevronDown/>}
          </div>
          {isOpen && <p className="accordion__body">{i.answer}</p>}
      </div>
  );
};
