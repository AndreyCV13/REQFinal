import * as React from 'react';
import {useState} from 'react';
import {MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdb-react-ui-kit';

export default function DropdownSearch({changeFilter}) {
    const [value, setValue] = useState("Ninguno");
    
    const transferData = (newValue) => {
        setValue(newValue);
        changeFilter(newValue);
    }

    return (
        <MDBDropdown group className=' my-3 '>
            <MDBDropdownToggle outline >{value}</MDBDropdownToggle>
            <MDBDropdownMenu>
                <MDBDropdownItem link childTag='button' onClick={() => transferData('Ninguno')}>
                Ninguno
                </MDBDropdownItem>
                <MDBDropdownItem link childTag='button' onClick={() => transferData('Esmoquin')}>
                Esmoquin
                </MDBDropdownItem>
                <MDBDropdownItem link childTag='button' onClick={() => transferData("Semi-Formal")}>
                Semi-Formal
                </MDBDropdownItem>
                <MDBDropdownItem link childTag='button' onClick={() => transferData("Fiesta")}>
                Fiesta
                </MDBDropdownItem>
            </MDBDropdownMenu>
        </MDBDropdown>
    );
}