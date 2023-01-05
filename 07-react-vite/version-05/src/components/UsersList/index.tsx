import { useEffect, useState } from 'react'

const UsersList = () => {

  const [users, setUsers] = useState<any>(null);
  const [usersB, setUsersB] = useState<any>(0);


  useEffect(() => {
    loadUsers();
  }, [usersB])

  const loadUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log('res>', response);
    const data = await response.json();
    console.log('data>', data);
    setUsers(data);
    
  }
  
  if(!users) return (
    <div>Cargando</div>
  )

  return (
    <div>
      {users.map((user: any) => (
        <div>
          {user.name}
        </div>
      ))}
    </div>
  )
}

export default UsersList