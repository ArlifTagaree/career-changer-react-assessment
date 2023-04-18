import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <div className="bg-dark text-secondary px-4 py-5 text-center min-vh-100">
            <Navbar />
            {children}
        </div>
    )
}

export default Layout
