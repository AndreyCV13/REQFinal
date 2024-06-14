import React, { useState, useEffect } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import Nav from '../components/NavigationBar'; 
import DropdownSearch from '../components/dropdownSearch';

function Catalogue(){
  // Flag
  const [toggleFlag, setToggle] = useState(false);

  //Data from JSON
  const [data, setData] = useState(null);

  //Suits to render
  const [suits, setSuits] = useState(null);

  //Filter used
  const [filter, setFilter] = useState('Ninguno');

  // Stores the image in localStorage
  function setIMG(index, value) {
    //Clears the localStorage
    localStorage.clear();
    console.log(index);
    localStorage.setItem('img', value);
}

  const changeFilter = (filterData) => {
    setFilter(filterData);
  }

  useEffect(() => {
    fetch('data/trajes.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    currentSuit()
  }, [data,toggleFlag,filter]);

  function renderSuit(item, index){
    return (
      <MDBCard key={index} shadow='0' border='dark' background='white' className='m-3 col-md-3' id="contact" style={{height:'650px'}}>
        <MDBCardHeader></MDBCardHeader>
        <MDBCardBody className='d-flex displayColumn align-items-center justify-content-center'>
          <img className='w-50 m-3' src={item.img} alt="comida1" />
          <p style={{ fontWeight: 'bold' }}>{item.name}</p>
          <MDBListGroup className='w-75 mb-3'>
            <MDBListGroupItem>Tamaño: {item.size}</MDBListGroupItem>
            <MDBListGroupItem>Material: {item.material}</MDBListGroupItem>
            <MDBListGroupItem>Precio: ${item.price}</MDBListGroupItem>
          </MDBListGroup>
          <MDBBtn 
            outline color='success'
            className='mb-4 w-75'
            size='lg'
            href='/Agenda'
            onClick={() => setIMG(index, item.img)}
          >
          Solicitar traje
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    );
  }

  function currentSuit() {
    if (data){
      const updatedSuits = data.trajes.map((item, index) => {
        if (item.type == filter) {
          return renderSuit(item,index);
        }
        else if (filter == "Ninguno"){
          return renderSuit(item,index);
        }
      });
      setSuits(updatedSuits);
    }
  }
  

  return(
    <div className='gradient-custom-4'>
      <Nav/>
      <MDBContainer style={{background: 'white', height: '100%'}} className='d-flex displayColumn align-items-center justify-content-center'>
      <h1 className='my-5 p-2 w-50' id="titleHome" style={{borderRadius: '20px'}}>Trajes disponibles</h1>
      <DropdownSearch changeFilter={changeFilter} className='my-5 p-2 w-50' id="titleHome"/>

      {data ? (
        <MDBContainer fluid className='row align-items-center justify-content-center mt-5'>
        {suits}
        </MDBContainer>
      ) : (
        <p>Cargando datos...</p>
      )}

    </MDBContainer>
    </div>
  );
}

export default Catalogue;
