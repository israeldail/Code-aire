import Link from 'next/link'

const Footer = () => {
    return(
        <div className="footer">
            <p>Copyright 2022 <Link href="/"><a className='footer-companyname'>Code-aire</a></Link> LLC</p>
        </div>
    )
}

export default Footer;