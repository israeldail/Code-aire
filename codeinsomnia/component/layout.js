import Navbar from '../component/navbar'
import Footer from '../component/footer'

const Layout = ({children}) => {
    return(
        <div className="content">
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
}

export default Layout;