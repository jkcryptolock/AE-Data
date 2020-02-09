import React from 'react';

const Table = (props) => {

    let tableItems = props.companyData;

    if (tableItems === 'None found' || tableItems === 'Loading...') {
        const noneFound = 'No company data for the selected account executive.';
        const loading = 'Loading...';

        return (
            <div id="message">
               {tableItems === 'None found' ? noneFound : loading}
            </div>
        )
    } else {
        let tableHeaders = ['Company Name', 'Address', 'Phone', 'Number of Active Tickets', 'Number of Active Contracts'];

        tableHeaders = tableHeaders.map((header, idx) =>
            <div className="table-header" key={idx}>{header}</div>
        );
    
        tableItems = tableItems.map((company, idx) => 
            <div className="table-row" key={idx}>
                <div className="table-content">
                    {company.company}
                </div>
                <div className="table-content">
                    {company.streetAddress}, {company.city}, {company.state} {company.zipCode}
                </div>
                <div className="table-content">
                    {company.phone}
                </div>
                <div className="table-content">
                    {company.activeTickets}
                </div>
                <div className="table-content">
                    {company.activeContracts}
                </div>
            </div>
        );
    
        return (
            <div id="table">
                <div className="table-row">
                    {tableHeaders}
                </div>
                {tableItems}
            </div>
        );
    }
}

export default Table;