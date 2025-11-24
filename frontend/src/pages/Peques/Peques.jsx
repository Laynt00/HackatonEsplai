import { React, useState } from 'react';
import Navbar from '../../components/Navbar/NavBar.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import PequesCollection from '../../components/PequesCollection/PequesCollection';

export default function Peques() {
  const [searchTerm, setSearchTerm] = useState("");

  const peques = [
    {
      "id": 1,
      "dni": "78451236M",
      "name": "Laura",
      "surname": "González",
      "pathology": "Asma crónica",
      "birthdate": "1995-03-12",
      "image": "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      "id": 2,
      "dni": "91827364X",
      "name": "Carlos",
      "surname": "Martínez",
      "pathology": "Diabetes tipo 2",
      "birthdate": "1988-07-22",
      "image": "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      "id": 3,
      "dni": "45678912T",
      "name": "María",
      "surname": "Santos",
      "pathology": "Hipertensión arterial",
      "birthdate": "1979-11-02",
      "image": "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      "id": 16,
      "dni": "90213456P",
      "name": "Rosa",
      "surname": "Peralta",
      "pathology": "Alzheimer leve",
      "birthdate": "1943-04-09",
      "image": "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      "id": 17,
      "dni": "78124590Q",
      "name": "Ángel",
      "surname": "Campos",
      "pathology": "Artrosis",
      "birthdate": "1939-12-17",
      "image": "https://randomuser.me/api/portraits/men/81.jpg"
    },
    {
      "id": 18,
      "dni": "45098712Y",
      "name": "Carmen",
      "surname": "Valverde",
      "pathology": "Demencia vascular",
      "birthdate": "1946-07-01",
      "image": "https://randomuser.me/api/portraits/women/29.jpg"
    }
  ];

  const filteredPeques = peques.filter((p) =>
    `${p.name} ${p.surname} ${p.dni}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <SearchBar onSearch={setSearchTerm} />
      <PequesCollection peques={filteredPeques} />
    </>
  );
}
