import githubContext from './githubContext';
import GithubReducer from './githubReducer';
import React, { useReducer } from 'react';
import {
  CLEAR_USERS,
  SET_LOADING
} from '../type'



const GithubState = (prop) => {

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  //Search Users

  //Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS })


  //Set loading

  const setLoading = () => dispatch({ type: SET_LOADING })

  return <githubContext.Provider value={{
    ...state,
    setLoading,
    dispatch,
    clearUsers
  }}>

    {prop.children}

  </githubContext.Provider>



}

export default GithubState;