import React, { useState } from 'react';
import comidaIMG from '../images/comida_perro.png';
import jugueteIMG from '../images/juguete_perro.png';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';
import Nav from '../components/NavigationBar'; 

function Catalogue(){
  // Flag
  const [toggleFlag, setToggle] = useState(false);

  // Function to toggle button text
  const toggleButtonText = () => {
    setToggle(!toggleFlag);
  };

  return(
    <div className='gradient-custom-4'>
      <Nav/>
      <h1 className='my-5 p-2 w-50' id="titleHome" style={{background: 'white', borderRadius: '20px'}}>Productos de Mascotas Felices</h1>
      <MDBContainer fluid className='d-flex m-auto align-items-center justify-content-center mt-5'>  
        <MDBCard className='m-3 col-md-3' id="contact">
          <MDBCardBody className='d-flex displayColumn align-items-center justify-content-center'>
              <img className='w-50' src={comidaIMG} alt="comida1"/>
              <p>Comida para Perros Marca GUAUS </p>
              <p>Precio: $3 </p>
              <MDBBtn
                outline color='success'
                className='mb-4 w-75'
                size='lg'
                onClick={toggleButtonText}
              >
                {toggleFlag ? "Quitar del Carrito" : "Añadir al Carrito"}
              </MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className='m-3 col-md-3' id="contact">
          <MDBCardBody className='d-flex displayColumn align-items-center justify-content-center'>
              <img className='w-50' src={jugueteIMG} alt="juguete1"/>
              <p>Paquete de Juguetes para Mascotas </p>
              <p>Precio: $10 </p>
              <MDBBtn
                outline color='success'
                className='mb-4 w-75'
                size='lg'
                onClick={toggleButtonText}
              >
                {toggleFlag ? "Quitar del Carrito" : "Añadir al Carrito"}
              </MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className='m-3 col-md-3' id="contact">
          <MDBCardBody className='d-flex displayColumn align-items-center justify-content-center'>
              <img className='w-50' src={comidaIMG} alt="comida1"/>
              <p>Comida para Perros Marca GUAUS </p>
              <p>Precio: $3 </p>
              <MDBBtn
                outline color='success'
                className='mb-4 w-75'
                size='lg'
                onClick={toggleButtonText}
              >
                {toggleFlag ? "Quitar del Carrito" : "Añadir al Carrito"}
              </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Catalogue;
