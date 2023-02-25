import { userContext } from 'react'
import { AuthContext } from '../contexts/auth'

const useAuth = () => {
    const contexts = userContext(AuthContext)
    return contexts
}

export default useAuth