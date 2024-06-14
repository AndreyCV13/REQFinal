import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import {useState} from 'react';
import { MDBContainer} from 'mdb-react-ui-kit';
import DateCalendarValue from '../components/dateCalendar';
import Nav from '../components/NavigationBar'; 
import Dropdown from '../components/dropdown';
import AgendaModal from '../components/agendaModal';
import DatePickerValue from '../components/datePicker';

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

  const name = localStorage.getItem('img');
  console.log(name);

  return (
    <div className='gradient-custom-4' >
    <Nav/>
    <MDBContainer style={{background: 'white', height: '800px'}} className='d-flex displayColumn align-items-center w-75'>  
        <h1 className='m-5' id="titleHome">Seleccione las fechas de alquiler de este traje</h1>
        <DatePickerValue/>
        <AgendaModal calendar={calendar} service={service}/>
        <img style={{width: '300px'}} className='m-3' src={name}/>
    </MDBContainer>
    </div>
  );
}