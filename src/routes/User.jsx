import React from 'react';
import {useState} from 'react';
import { MDBBtn,MDBContainer, MDBValidation, MDBValidationItem, MDBInput} from 'mdb-react-ui-kit';
import Nav from '../components/NavigationBar'; 
import TableDate from '../components/tableDate';

export default function User() {
    const [formValue, setFormValue] = useState({
        fname: 'Andrey',
        lname: 'Calvo',
        password: '********',
        email: 'andreyst15@gmail.com',
        city: 'San José',
      });
    
      const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
      };

  return (
    <div className='gradient-custom-4' >
    <Nav/>
    <MDBContainer style={{background: 'white'}} className='py-5 d-flex displayColumn align-items-center justify-content-center w-75'>  
        <h1 className='mb-5' id="titleHome">Datos de Usuario</h1>
        <MDBValidation className='row g-3'>
        <MDBValidationItem className='col-md-4'>
            <MDBInput
            value={formValue.fname}
            name='fname'
            onChange={onChange}
            id='validationCustom01'
            required
            label='Primer nombre'
            />
        </MDBValidationItem>
        <MDBValidationItem className='col-md-4'>
            <MDBInput
            value={formValue.lname}
            name='lname'
            onChange={onChange}
            id='validationCustom02'
            required
            label='Primer Apellido'
            />
        </MDBValidationItem>
        <MDBValidationItem className='col-md-4'>
            <MDBInput
            value={formValue.password}
            name='password'
            onChange={onChange}
            id='validationCustom01'
            required
            label='Contraseña'
            />
        </MDBValidationItem>
        <MDBValidationItem className='col-md-8'>
            <MDBInput
            value={formValue.email}
            name='email'
            onChange={onChange}
            id='validationCustom01'
            required
            label='Correo Electrónico'
            />
        </MDBValidationItem>
        <MDBValidationItem className='col-md-4' feedback='Please provide a valid city.' invalid>
            <MDBInput
            value={formValue.city}
            name='city'
            onChange={onChange}
            id='validationCustom03'
            required
            label='Ciudad'
            type = 'text'
            />
        </MDBValidationItem>
        
        </MDBValidation>
        <MDBBtn className='m-4 w-50' type='submit'>Aceptar</MDBBtn>

        <div className="w-75 m-3" style={{ background: '#CCC', height: '1px' }}></div>
        <h3 className='m-3' id="titleHome">Registro de Citas</h3>
        <TableDate/>
    </MDBContainer>
    </div>
  );
}