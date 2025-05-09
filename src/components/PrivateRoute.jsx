import { Children } from "react";
import { useAuthValue } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Children }) => {
    const { user } = useAuthValue();
    return user ? Children : <Navigate to="/login" />
}

export default PrivateRoute;