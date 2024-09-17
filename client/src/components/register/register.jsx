import { Link } from 'react-router-dom'
import './register.scss'

function Register() {
    return (
        <div className='register'>

            <Link className="HB" to="/">Home</Link>
            <form action="">
                <img src="./logo.png" alt="" />
                <label htmlFor="username">Username</label>
                <input type="text" name='username' />
                <label htmlFor="email">Email</label>
                <input type="email" name='email' />
                <label htmlFor="password">Password</label>
                <input type="password" name='pasword' />
                <button type="submit">Register</button>

                <Link to="/login">Have an Account?Login </Link>


            </form>
        </div>
    )
}

export default Register