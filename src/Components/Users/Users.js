import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spiner from '../layouts/Spiner'
import githubContext from '../../context/github/githubContext'


const Users = () => {

  const { users, loading } = useContext(githubContext);

  if (loading) {
    return <Spiner />
  }
  else {
    return (
      <div style={userStyle}>
        {users.map(user =>
          <UserItem key={user.id} user={user} />
        )}
      </div>
    );
  }

}


const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users
