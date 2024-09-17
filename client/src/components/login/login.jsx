import { Link } from 'react-router-dom'
import './login.scss'


function Login() {
    return (
        <div className='login'>
            <Link className="HB" to="/">Home</Link>

            <form action="">
                <img src="/logo.png" alt="" />
                <label htmlFor="username">Username</label>
                <input type="text" name='username' />
                <label htmlFor="password">Password</label>
                <input type="password" name='pasword' />
                <button type="submit">Login</button>

                <Link to="/register" >New User? Create Account</Link>
            </form>
        </div >
    )
}

export default Login