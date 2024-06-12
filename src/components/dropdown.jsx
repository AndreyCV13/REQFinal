import * as React from 'react';
import {useState} from 'react';
import {MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdb-react-ui-kit';

export default function Dropdown({changeService}) {
    const [value, setValue] = useState("Cita de Control");
    
    const transferData = (newValue) => {
        setValue(newValue);
        changeService(newValue);
    }

    return (
        <MDBDropdown group className=' my-3 '>
            <MDBDropdownToggle outline >{value}</MDBDropdownToggle>
            <MDBDropdownMenu>
                <MDBDropdownItem link childTag='button' onClick={() => transferData('Retirar un traje')}>
                Retirar un traje
                </MDBDropdownItem>
                <MDBDropdownItem link childTag='button' onClick={() => transferData("Devolver un traje")}>
                Devolver un traje
                </MDBDropdownItem>
                <MDBDropdownItem link childTag='button' onClick={() => transferData("Reembolso de un traje")}>
                Reembolso de un traje
                </MDBDropdownItem>
            </MDBDropdownMenu>
        </MDBDropdown>
    );
}