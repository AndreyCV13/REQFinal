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
                <MDBDropdownItem link childTag='button' onClick={() => transferData('Cita de Control')}>
                Cita de Control
                </MDBDropdownItem>
                <MDBDropdownItem link childTag='button' onClick={() => transferData("Cita de Servicios Estéticos")}>
                Cita de Servicios Estéticos
                </MDBDropdownItem>
            </MDBDropdownMenu>
        </MDBDropdown>
    );
}