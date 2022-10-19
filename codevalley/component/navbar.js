import Link from 'next/link'

const Navbar = () => {
    return (

        <nav className='navbar'>
            <div className="logo">
                <h1>Code Valley</h1>
            </div>
            <a>Home</a>
            <a>About</a>
            <a>Services</a>
            <a>Contact</a>
        </nav>

    )
}

export default Navbar;