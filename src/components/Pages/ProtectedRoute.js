import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const ProtectedRoute = ({children}) => {
    const { token } = useAuth
    const navigate = useNavigate()

    useEffect(() => {
        if(!token) {
            navigate('/', {replace: true})
        }
    }, [token, navigate])

    return token ? children : null
}

export default ProtectedRoute