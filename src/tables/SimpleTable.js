import React from 'react'
import axios from 'axios'

const SimpleTable = (props) => {
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
        {props.users ? (
          props.users.map((user) => (
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
