import React from 'react' //type rafce for this function
import { ReactNode } from 'react';

interface Props {
    //children: string;
    children: ReactNode; //for pasisng html elements
    onClose: () => void;
}
const Alert = ({children, onClose}: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert