import React, { useState } from 'react';
import PequesCollection from '../../components/PequesCollection/PequesCollection';
import PequeModal from '../../components/PequeModal/PequeModal';
import Navbar from '../../components/Navbar/NavBar';
import './Peques.css';

export default function Peques() {
  const [selectedPeque, setSelectedPeque] = useState(null); // modal

  const peques = [
  { id: 1, name: "Laura", surname: "González", pathology: "Asma crónica", birthdate: "2015-04-12", dni: "12345678A", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 2, name: "Carlos", surname: "Martínez", pathology: "Diabetes tipo 1", birthdate: "2014-02-20", dni: "23456789B", image: "https://randomuser.me/api/portraits/men/12.jpg" },
  { id: 3, name: "Sofía", surname: "López", pathology: "Alergia al polen", birthdate: "2016-07-05", dni: "34567890C", image: "https://randomuser.me/api/portraits/women/22.jpg" },
  { id: 4, name: "Diego", surname: "Fernández", pathology: "Cardiopatía leve", birthdate: "2013-11-18", dni: "45678901D", image: "https://randomuser.me/api/portraits/men/33.jpg" },
  { id: 5, name: "Marina", surname: "Santos", pathology: "Asma leve", birthdate: "2015-03-11", dni: "56789012E", image: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: 6, name: "Álvaro", surname: "Ruiz", pathology: "Migrañas infantiles", birthdate: "2014-08-23", dni: "67890123F", image: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 7, name: "Daniela", surname: "Pérez", pathology: "Dermatitis atópica", birthdate: "2016-09-15", dni: "78901234G", image: "https://randomuser.me/api/portraits/women/31.jpg" },
  { id: 8, name: "Javier", surname: "Morales", pathology: "Epilepsia controlada", birthdate: "2013-10-02", dni: "89012345H", image: "https://randomuser.me/api/portraits/men/29.jpg" },
  { id: 9, name: "Irene", surname: "Castro", pathology: "Alergia a frutos secos", birthdate: "2015-06-09", dni: "90123456I", image: "https://randomuser.me/api/portraits/women/56.jpg" },
  { id: 10, name: "Mateo", surname: "Hernández", pathology: "Trastorno del sueño", birthdate: "2014-12-27", dni: "11223344J", image: "https://randomuser.me/api/portraits/men/50.jpg" },
  { id: 11, name: "Clara", surname: "Iglesias", pathology: "Intolerancia a la lactosa", birthdate: "2016-01-10", dni: "22334455K", image: "https://randomuser.me/api/portraits/women/15.jpg" },
  { id: 12, name: "Leo", surname: "Vega", pathology: "TDAH", birthdate: "2013-09-01", dni: "33445566L", image: "https://randomuser.me/api/portraits/men/17.jpg" },
  { id: 13, name: "Nora", surname: "Cano", pathology: "Anemia ferropénica", birthdate: "2015-05-22", dni: "44556677M", image: "https://randomuser.me/api/portraits/women/25.jpg" },
  { id: 14, name: "Óscar", surname: "Cortés", pathology: "Alergia a ácaros", birthdate: "2014-03-14", dni: "55667788N", image: "https://randomuser.me/api/portraits/men/40.jpg" },
  { id: 15, name: "Eva", surname: "Durán", pathology: "Asma moderada", birthdate: "2016-10-19", dni: "66778899O", image: "https://randomuser.me/api/portraits/women/41.jpg" },
  { id: 16, name: "Hugo", surname: "Navarro", pathology: "Problemas digestivos", birthdate: "2013-07-08", dni: "77889900P", image: "https://randomuser.me/api/portraits/men/60.jpg" },
  { id: 17, name: "Paula", surname: "Mendoza", pathology: "Artritis juvenil", birthdate: "2014-11-30", dni: "88990011Q", image: "https://randomuser.me/api/portraits/women/36.jpg" },
  { id: 18, name: "Mario", surname: "Guerrero", pathology: "Alergia a medicamentos", birthdate: "2015-02-03", dni: "99001122R", image: "https://randomuser.me/api/portraits/men/81.jpg" },
  { id: 19, name: "Alicia", surname: "Flores", pathology: "Hipotiroidismo", birthdate: "2016-08-21", dni: "10111213S", image: "https://randomuser.me/api/portraits/women/72.jpg" },
  { id: 20, name: "Samuel", surname: "Ortega", pathology: "Obesidad infantil", birthdate: "2013-04-06", dni: "11121314T", image: "https://randomuser.me/api/portraits/men/71.jpg" },
  { id: 21, name: "Elena", surname: "Rey", pathology: "Cardiopatía congénita", birthdate: "2015-09-17", dni: "12131415U", image: "https://randomuser.me/api/portraits/women/19.jpg" },
  { id: 22, name: "Tomás", surname: "Silva", pathology: "Diabetes tipo 1", birthdate: "2014-05-29", dni: "13141516V", image: "https://randomuser.me/api/portraits/men/10.jpg" },
  { id: 23, name: "Valeria", surname: "Campos", pathology: "Alergia a picaduras", birthdate: "2016-12-12", dni: "14151617W", image: "https://randomuser.me/api/portraits/women/9.jpg" },
  { id: 24, name: "Rubén", surname: "Pastor", pathology: "Tics nerviosos", birthdate: "2013-06-02", dni: "15161718X", image: "https://randomuser.me/api/portraits/men/23.jpg" },
  { id: 25, name: "Marta", surname: "Romero", pathology: "Alergia al gluten", birthdate: "2014-01-25", dni: "16171819Y", image: "https://randomuser.me/api/portraits/women/52.jpg" },
  { id: 26, name: "Adrián", surname: "Torres", pathology: "Problemas respiratorios", birthdate: "2015-07-28", dni: "17181920Z", image: "https://randomuser.me/api/portraits/men/88.jpg" },
  { id: 27, name: "Julia", surname: "Delgado", pathology: "Defensas bajas", birthdate: "2016-03-22", dni: "18192021A", image: "https://randomuser.me/api/portraits/women/11.jpg" },
  { id: 28, name: "Pablo", surname: "León", pathology: "Hiperactividad", birthdate: "2014-09-04", dni: "19202122B", image: "https://randomuser.me/api/portraits/men/54.jpg" },
  { id: 29, name: "Ariadna", surname: "Campos", pathology: "Alergia a animales", birthdate: "2015-11-07", dni: "20212223C", image: "https://randomuser.me/api/portraits/women/7.jpg" },
  { id: 30, name: "Enzo", surname: "Villar", pathology: "Asma leve", birthdate: "2013-02-15", dni: "21222324D", image: "https://randomuser.me/api/portraits/men/67.jpg" }
];

  return (
    <>
      <Navbar />

      <PequesCollection 
        peques={peques} 
        onSelectPeque={setSelectedPeque} 
      />

      {selectedPeque && (
        <PequeModal 
          peque={selectedPeque} 
          onClose={() => setSelectedPeque(null)} 
        />
      )}
    </>
  );
}
