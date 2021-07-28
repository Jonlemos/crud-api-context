import React, { useState, useEffect } from 'react'
import UserForm from './form/UserForm'
import EditUserForm from './form/EditUserForm'
import SimpleTable from './tables/SimpleTable'
import axios from 'axios'

const App = () => {
  const initialFormState = { id: null, name: '', username: '' }

  const [users, setUsers] = useState()
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:4000/business').then((response) => {
      console.log(response.data)
      setUsers(response.data)
    })
  }, [])

  const deleteUser = (id) => {
    setEditing(false)
    axios.get('http://localhost:4000/business/delete/' + id)
  }

  const updateUser = (user) => {
    console.log(user)

    const obj = {
      person_name: user.name,
      business_name: user.username,
    }
    axios
      .post('http://localhost:4000/business/update/' + user.id, obj)
      .then((res) => console.log(res.data))
  }

  const editRow = (user) => {
    setEditing(true)

    setCurrentUser({
      id: user._id,
      name: user.person_name,
      username: user.business_name,
    })
  }

  return (
    <div className="container">
      <h1>Simples Crud-Klever</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <>
              <h2>Editar Usuário</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </>
          ) : (
            <>
              <h2>Adicionar Usuário</h2>
              <UserForm />
            </>
          )}
        </div>
        <div className="flex-large">
          <h2>Todos usuários</h2>
          <SimpleTable
            users={users}
            editRow={editRow}
            deleteUser={deleteUser}
          />
        </div>
      </div>
    </div>
  )
}

export default App
