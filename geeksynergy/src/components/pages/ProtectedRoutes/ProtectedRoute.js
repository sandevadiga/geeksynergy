import React from "react"
import {Navigate, Outlet} from "react-router-dom"
import { useLocation } from "react-router-dom";

import { useContext } from "react";
import {AuthContext} from '../../AuthProvider'
 


const ProtectedRoute = () => {
const {login} = useContext(AuthContext);

  const location =useLocation();

		return login ?  <Outlet /> :<Navigate to="/login"  state={{from :location}} /> ;

	}

export default ProtectedRoute;