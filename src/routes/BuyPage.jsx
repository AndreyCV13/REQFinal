import React from 'react';
import '../css/App.css'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody
}
from 'mdb-react-ui-kit';
import Nav from '../components/NavigationBar'; 

function BuyPage() {
  
    return (
      <div className='gradient-custom-4'>
        <Nav />
        <h1 className='my-5 p-2 w-50' id="titleHome" style={{ background: 'white', borderRadius: '50px' }}>
          Sección de Compras
        </h1>

        <MDBContainer fluid className='d-flex m-auto align-items-center justify-content-center mt-5'>
          <MDBCard className='m-3 col-md-3' id="contact">
            <MDBCardBody className='d-flex displayColumn align-items-center justify-content-center'>
              <p>Tus trajes</p>
              <MDBBtn
                outline
                color='success'
                className='mb-4 w-75'
                size='lg'
              > {"Solicitar Reembolso"}
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>

      </div>
    );
  }
  
  export default BuyPage;