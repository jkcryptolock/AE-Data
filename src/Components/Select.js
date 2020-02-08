import React from 'react';

const Select = (props) => {
    let aeOptions;

    const selectAE = (email) => {

    }

    if (props.accountExecs.length) {
        aeOptions = props.accountExecs.map((ae, idx)  => 
            <option id={ae.emailAddress} key={idx}>{ae.firstName} {ae.lastName}</option>
        );

        return (
            <div className="select">
                <select className="select-accountExec" placeholder="Select an account executive">
                    {aeOptions}
                </select>
            </div>
        );
    } else {
        return (
            <></>
        )
    }


}

export default Select;