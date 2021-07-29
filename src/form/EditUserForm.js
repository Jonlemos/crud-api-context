import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        props.updateUser(user)
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
      <button>Atualizar Usuário</button>
      <button onClick={() => props.setEditing(false)}>Cancelar</button>
    </form>
  )
}

export default EditUserForm
