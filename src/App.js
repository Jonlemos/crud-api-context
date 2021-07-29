import React, { useState, useEffect, useContext } from 'react'
import UserForm from './form/UserForm'
import EditUserForm from './form/EditUserForm'
import SimpleTable from './tables/SimpleTable'
import axios from 'axios'
import { UsersContext } from './context/UserContext'

const App = () => {
  const initialFormState = { id: null, name: '', username: '' }

  const { users, setUsers } = useContext(UsersContext)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)
  const [changeUser, setChangeUser] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:4000/business').then((response) => {
      console.log(response.data)
      setUsers(response.data)
    })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:4000/business').then((response) => {
      console.log(response.data)
      setUsers(response.data)
    })
  }, [changeUser])

  const deleteUser = (id) => {
    setEditing(false)
    axios.get('http://localhost:4000/business/delete/' + id)
    setChangeUser(!changeUser)
  }

  const updateUser = (user, updateUser) => {
    setEditing(false)

    const obj = {
      person_name: user.name,
      business_name: user.username,
    }
    axios
      .post('http://localhost:4000/business/update/' + user.id, obj)
      .then((res) => {
        console.log(res.data)
        setChangeUser(!changeUser)
      })
  }

  const editRow = (user) => {
    setEditing(true)

    setCurrentUser({
      id: user._id,
      name: user.person_name,
      username: user.business_name,
    })
    // setChangeUser(!changeUser)
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
              <UserForm userAdd={setChangeUser} atualState={changeUser} />
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
