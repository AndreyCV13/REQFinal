import React from 'react';
import '../css/App.css'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput
}
from 'mdb-react-ui-kit';

function Register() {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center' id='colorRegister'>
      <div className='mask gradient-custom-3'> </div>
      <MDBCard className='my-5' id="register">
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
          <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password'/>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' href='./Home'>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;