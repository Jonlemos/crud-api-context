import React, { useContext } from 'react'
import { UsersContext } from '../context/UserContext'

const SimpleTable = (props) => {
  const { users } = useContext(UsersContext)
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Username</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {users ? (
          users.map((user) => (
            <tr key={user._id}>
              <td>{user.person_name}</td>
              <td>{user.business_name}</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(user)
                  }}
                >
                  Editar
                </button>
                <button onClick={() => props.deleteUser(user._id)}>
                  Deletar
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>Não existem usuários cadastrados.</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default SimpleTable
