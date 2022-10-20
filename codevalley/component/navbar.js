import Link from 'next/link'

const Navbar = () => {
    return (

        <nav className='navbar'>
            <div className="logo">
            <Link href="/"><h1>Code Valley</h1></Link>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/services"><a>Services</a></Link> 
            <Link href="/contact"><a>Contact</a></Link>
        </nav>

    )
}

export default Navbar;