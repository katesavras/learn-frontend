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
              <h4 className="headline-4"><span>{index}. </span>{i.question}</h4>
              {isOpen ? <FiChevronUp/> : <FiChevronDown/>}
          </div>
          {isOpen && <p className="accordion__body">{i.answer}</p>}
      </div>
  );
};
