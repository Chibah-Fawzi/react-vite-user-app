import React from 'react'
import { useState } from 'react'
import './App.css'
import Users from './components/Users'

export default function App() {

  const [users, setUsers] = useState([]);

  function addUser(e) {
    e.preventDefault();

    // Récupération des valeurs des inputs
    var name = e.target.name.value
    var age = e.target.age.value
    var email = e.target.email.value
    var profession = e.target.profession.value


    // Création d'un objet avec les nouvelles valeurs
    const newUser = {
      name, age, email, profession
    }

    // On modifie l'état en ajoutant le nouvel user en laissant les anciens
    setUsers([...users, newUser])
  }

  return (
    <div>
      <h1>APP</h1>
      <Users addUser={addUser} users={users} />
    </div>

  )
}
