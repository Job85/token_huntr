import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav>
                <Link to='/' >Home</Link>
                <Link to='/wallet'>My Wallet</Link>
                <Link to='/locations'>Locations</Link>
                <Link to='/rules'>Rules</Link>
            </nav>
        </div>
    )
}


export default Nav