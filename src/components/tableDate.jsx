import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import avatarIMG from '../images/avatar.png';

export default function TableDate() {
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Encargado</th>
          <th scope='col'>Tipo de Cita</th>
          <th scope='col'>Estado</th>
          <th scope='col'>Fecha</th>
          <th scope='col'>Acciones</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src={avatarIMG}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Juan Pérez Alvarado</p>
                <p className='text-muted mb-0'>juanes@masfelices.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Control</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              Pendiente
            </MDBBadge>
          </td>
          <td>22/04/2022</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Editar
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src={avatarIMG}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Alejandro Vargas</p>
                <p className='text-muted mb-0'>alevas@masfelices.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Servicios Estéticos</p>
          </td>
          <td>
            <MDBBadge color='primary' pill>
              En proceso
            </MDBBadge>
          </td>
          <td>19/03/2022</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Editar
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src={avatarIMG}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Katherine Mora López</p>
                <p className='text-muted mb-0'>kathemo@masfelices.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Control</p>
          </td>
          <td>
            <MDBBadge color='warning' pill>
              Finalizado
            </MDBBadge>
          </td>
          <td>23/03/2022</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Editar
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}