import React from "react"
import {Navigate, Outlet} from "react-router-dom"

import { useContext } from "react";
import {AuthContext} from '../../AuthProvider'
 


const ProtectedRoute = () => {
const {login} = useContext(AuthContext);


		return login ?  <Outlet /> :<Navigate to="/login"  /> ;

	}

export default ProtectedRoute;