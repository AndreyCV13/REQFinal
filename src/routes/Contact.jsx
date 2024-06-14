import React from 'react';
import { MDBContainer, MDBCard, MDBCardBody} from 'mdb-react-ui-kit';
import Nav from '../components/NavigationBar';

function Contact(){
  return(
  <div>
    <Nav/>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center mt-5'>
      <MDBCard  id="contact">
        <MDBCardBody className='px-5'>
          <img src={'images/sastre.png'} alt="Sastre1"/>
          <p>Email: duncan_martinez@gmail</p>
          <p>Phone: +590 9782-1300 </p>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  </div>
  );
}

export default Contact;