import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { searchUsers } from '../../context/github/actions'
import GithubContext from '../../context/github/githubContext'
import { SEARCH_USERS, SET_LOADING } from '../../context/type'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {

  const { dispatch, users, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);


  const [text, setText] = useState('');


  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      dispatch({ type: SET_LOADING })
      searchUsers(text).then(users => {
        dispatch({ type: SEARCH_USERS, payload: users })
      });
      setText('');
    }

  }

  const handleChange = (e) => {
    const { value } = e.target
    setText(value);
  }



  return (

    <div>
      <form onSubmit={onSubmit} className="form">
        <input type="text" name="text" placeholder="Search User..." value={text} onChange={handleChange} />
        <input type="submit" value="search" className="btn btn-block btn-dark" />
      </form>
      {users.length > 0 &&
        <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
      }
    </div>
  )

}

Search.propTypes = {
  showAlert: PropTypes.func.isRequired
};


export default Search;
