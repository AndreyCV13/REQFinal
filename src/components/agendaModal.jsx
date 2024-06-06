import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function AgendaModal({calendar, service}) {
  const [basicModal, setBasicModal] = useState(false);
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
  'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const toggleOpen = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBBtn onClick={toggleOpen} className='my-3 mb-7 w-50' size='lg'>Agendar Cita</MDBBtn>
      <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Cita solicitada</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
                <p>La agenda de su cita se ha realizado con éxito</p>
                <p>Para la fecha: {calendar.get('date')} de {months[calendar.get('month')]} del {calendar.get('year')}</p>
                <p>Del tipo: {service}</p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn onClick={toggleOpen}>Aceptar</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}