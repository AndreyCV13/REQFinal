import React from 'react';
import '../css/Home.css';
import { MDBContainer} from 'mdb-react-ui-kit';
import Nav from '../components/NavigationBar'; 

export default function Home() {

  return (
    <div className='gradient-custom-4'>
    <Nav/>
    <MDBContainer fluid style={{background: 'white'}} className='py-5 w-75'>
        <h1 className='m-3' id="titleHome">Nosotros</h1>

        <hr className="hr m-4"/>

        <p className='m-5'>"La misión de una veterinaria es prestar servicios médicos y de bienestar a los animales,
         protegiendo y promoviendo su salud y bienestar a través del diagnóstico, tratamiento y prevención de enfermedades y lesiones. 
         Además, también se enfoca en educar y concienciar a los dueños y cuidadores sobre la importancia de la salud animal,
         brindándoles consejos y recomendaciones para mejorar la calidad de vida de sus mascotas, y trabajando estrechamente con 
         otros profesionales en la industria para garantizar la mejor atención posible a los animales."
        </p>

        <p className='m-5'>- Lucas Delgado, fundador de Mascotas Felices</p>
        
        <p className='m-5'> Este es nuestro objetivo en Mascotas Felices, ya que buscamos crear un mundo mejor para todos
         los animales que dan más vida los hogares de los habitantes de Costa Rica. Le damos un agradecimiento 
         sincero por elegirnos para tratar a sus fieles compañeros.</p>

        <p className='m-5'> Nuestra iniciativa se enfoca en prácticas sostenibles y responsables, 
          desde la elección de productos y medicamentos naturales hasta la implementación 
          de tecnologías energéticamente eficientes en nuestras instalaciones. También promovemos 
          la adopción de hábitos conscientes entre nuestros clientes, fomentando el uso de productos biodegradables, 
          la reducción del desperdicio y la importancia de la conservación de recursos naturales.</p>
        
        <p className='m-5'>
          Además, colaboramos con organizaciones ambientales y participamos en programas de reforestación y limpieza de espacios naturales. 
        Creemos firmemente que cada pequeña acción cuenta y que juntos podemos marcar la diferencia para un futuro más verde y saludable 
        para todas las especies, incluyendo a nuestros fieles amigos peludos. 
        </p>
    </MDBContainer>
    </div>
  );
}