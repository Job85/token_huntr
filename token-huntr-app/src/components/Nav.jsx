import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav>
                <Link to='/' >Home</Link>
                <Link to='/Wallet'>My Wallet</Link>
                <Link to='/Locations'>Locations</Link>
                <Link to='/Rules'>Rules</Link>
            </nav>
        </div>
    )
}


export default Nav