import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Navigate,Outlet} from'react-router-dom'

//use navigate is hook but naviagte is a component

function PrivateRoute() {
    const {currentUser} =  useSelector(state => state.user)  

  return (
    currentUser ? <Outlet/> : <Navigate to='/sign-in'/>
  )
}

export default PrivateRoute
