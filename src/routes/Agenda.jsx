import React from 'react';
import dayjs from 'dayjs';
import {useState} from 'react';
import { MDBContainer} from 'mdb-react-ui-kit';
import DateCalendarValue from '../components/dateCalendar';
import Nav from '../components/NavigationBar'; 
import Dropdown from '../components/dropdown';
import AgendaModal from '../components/agendaModal';

export default function Agenda() {
  const [calendar, setCalendar] = useState(dayjs('2022-04-17'));
  const [service, setService] = useState('Retirar un traje');

  const changeDate = (calendarData) => {
    setCalendar(calendarData);
  }

  const changeService = (serviceData) => {
    setService(serviceData);
    console.log(service);
  }

  return (
    <div className='gradient-custom-4' >
    <Nav/>
    <MDBContainer style={{background: 'white'}} className='d-flex displayColumn align-items-center justify-content-center w-75'>  
        <h1 className='m-3' id="titleHome">Agenda de Citas</h1>
        <div style={{border: '2px solid black'}} className='my-3'>
          <DateCalendarValue changeDate={changeDate}/>
        </div>
        <Dropdown changeService={changeService}/>
        <AgendaModal calendar={calendar} service={service}/>
    </MDBContainer>
    </div>
  );
}