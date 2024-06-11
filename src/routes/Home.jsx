import React from 'react';
import '../css/Home.css';
import { MDBContainer} from 'mdb-react-ui-kit';
import Nav from '../components/NavigationBar'; 

export default function Home() {

  return (
    <div className='gradient-custom-4'>
    <Nav/>
    <MDBContainer fluid style={{background: 'white'}} className='py-5 w-75'>
        <h1 className='m-3' id="titleHome">¡Te recibimos en Roponia!</h1>

        <hr className="hr m-4"/>

        <p className='m-5'>Cuando se trata de ocasiones especiales, el vestuario adecuado puede marcar la diferencia entre lo ordinario y lo extraordinario.
        Ya sea para una boda, una gala, una fiesta temática o cualquier evento importante, lucir impecable es esencial.
        Elegir la tienda adecuada para alquilar tu traje no es solo una cuestión de conveniencia, sino de confianza y estilo, siendo aquí donde
        Roponia destaca como la opción ideal para quienes buscan elegancia, variedad y un servicio de primera clase en el alquiler de sus trajes.
        </p>
        
        <p className='m-5'> Desde su fundación, Roponia ha sido sinónimo de calidad y excelencia en la industria de la moda.
        Nuestra amplia gama de trajes, cuidadosamente seleccionados y mantenidos, asegura que cada cliente encuentre el atuendo perfecto para su ocasión especial.
        Pero no es solo la diversidad de opciones lo que nos distingue; es nuestro compromiso con la satisfacción del cliente lo que realmente nos hace sobresalir.</p>

        <p className='m-5'> Entendemos que cada evento es único y que nuestros clientes merecen trajes que no solo les queden bien, 
        sino que también reflejen su personalidad y el tono del evento. Por eso, ofrecemos un servicio personalizado donde nuestro personal te guiará 
        a través de cada paso del proceso. Nuestro objetivo es que te sientas seguro y elegante, 
        sin el estrés que a menudo acompaña la búsqueda del traje perfecto. ¡No tengas dudas y mira nuestro contacto o accede a tu chat para comenzar tu aventura
        en el mundo de la moda!</p>
      
        <p className='m-5'>
        Confía en Roponia para tu próximo evento y experimenta la diferencia que una tienda dedicada a la excelencia puede hacer;
        porque en Roponia, no solo confeccionamos trajes, confeccionamos experiecias. 
        </p>
    </MDBContainer>
    </div>
  );
}