import React, { createContext, useState } from 'react'

export const UsersContext = createContext()

const Users = ({ children }) => {
  const [users, setUsers] = useState()

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  )
}

export default Users
