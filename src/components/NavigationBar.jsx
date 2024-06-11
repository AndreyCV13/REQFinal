import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink
} from 'mdb-react-ui-kit';
import '../css/Home.css';

export default function Nav() {

  return (
    <MDBNavbar expand='lg' light bgColor='dark' color="indigo">
      <MDBContainer fluid>
        <MDBNavbarBrand color='warning' href='./Home' id="colorTexto">Nosotros</MDBNavbarBrand>

          <MDBNavbarNav className='ms-auto mb-2 mb-lg-0'>

          <div className="vr" style={{ height: '40px' }}></div>

          <MDBNavbarItem className='mx-3'>
                <MDBNavbarLink href='./Catalogue' id="colorTexto">Catálogo</MDBNavbarLink>
            </MDBNavbarItem>

            <div className="vr" style={{ height: '40px' }}></div>

            <MDBNavbarItem className='mx-3'>
                <MDBNavbarLink href='./Agenda' id="colorTexto">Agenda</MDBNavbarLink>
            </MDBNavbarItem>

            <div className="vr" style={{ height: '40px' }}></div>

            <MDBNavbarItem className='mx-3'>
                <MDBNavbarLink href='./Chat' id="colorTexto">Chat Privado</MDBNavbarLink>
            </MDBNavbarItem>

            <div className="vr" style={{ height: '40px' }}></div>

            <MDBNavbarItem className='mx-3'>
              <MDBNavbarLink active aria-current='page' href='./Contact' id="colorTexto"> Contacto </MDBNavbarLink>
            </MDBNavbarItem>

            <div className="vr" style={{ height: '40px' }}></div>
            <MDBNavbarItem className='mx-3 ms-auto'>
            <MDBNavbarLink active aria-current='page' href='./User' id="colorTexto"> Andrey Calvo </MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>

      </MDBContainer>
    </MDBNavbar>
  );
}