import React, { useState } from 'react'
import axios from 'axios'

const UserForm = (props) => {
  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
    console.log(user)
  }

  const sendItem = (e) => {
    e.preventDefault()
    const obj = {
      person_name: user.name,
      business_name: user.username,
    }
    axios.post('http://localhost:4000/business/add', obj)

    setUser(initialFormState)
  }

  return (
    <form
      onSubmit={(e) => {
        sendItem(e)
      }}
    >
      <label>Nome</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Adicionar Novo Usuário</button>
    </form>
  )
}

export default UserForm
