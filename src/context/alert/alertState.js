import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import AlertContext from './alertContext'
import { SET_ALERT, REMOVE_ALERT } from '../type'
import AlertReducer from './alertReducer'

const AlertState = (props) => {

  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState)

  //set Alert method
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 4000);

  }

  return <AlertContext.Provider
    value={{
      alert: state,
      setAlert
    }}>
    {props.children}

  </AlertContext.Provider>

}
AlertState.propTypes = {
  children: PropTypes.object.isRequired
}

export default AlertState;