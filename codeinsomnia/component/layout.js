import Navbar from '../component/navbar'
import Footer from '../component/footer'
import { ScrollTop } from './scrollto'

const Layout = ({children}) => {
    return(
        <div className="content">
            <Navbar/>
                {children}
                <ScrollTop/>
            <Footer/>
        </div>
    )
}

export default Layout;