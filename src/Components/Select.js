import React from 'react';

const Select = (props) => {
    
    let aeOptions;

    const selectAE = (event) => {
        const accountExec = event.target.value;
        const emailFormat = accountExec.split(' ').join('_');
        const email = document.querySelector(`[id^="${emailFormat}"]`).id;
        props.fetchCompanies(email, accountExec);
    }

    aeOptions = props.accountExecs.map((ae, idx)  => 
        <option id={ae.emailAddress} key={idx}>{ae.firstName} {ae.lastName}</option>
    );

    return (
        <div id="select">
            <select id="select-accountExec" value={props.selectDisplay} onChange={selectAE}>
                <option value="Select an account executive" disabled>Select an account executive</option>
                {aeOptions}
            </select>
        </div>
    );
}

export default Select;