import Header from "../components/Header"
import Footer from "../components/Footer"


const AuthLayouth = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer/>

        </div>

    )
}


export default AuthLayouth