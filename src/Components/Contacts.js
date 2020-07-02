import React from 'react';
import faker from 'faker';

const Contacts = (props) => {
    return(
        <div>
            <p className="RandomName" style={nameStyle}>
                {props.name}  
                <span style={emailStyle}>
                    {props.email} {/* this isn't workign and I don't know why.  */}
                </span>
            </p>
        </div>
    );
}

const nameStyle = {
    width: "30%",
    margin: "0 auto",
    textAlign: "left",
  };

  const emailStyle = {
    width: "30%",
    margin: "0 auto",
    textAlign: "right",
  }




export default Contacts;