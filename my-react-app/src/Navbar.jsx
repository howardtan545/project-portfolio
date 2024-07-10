
function Navbar() {

    return <nav className="nav">
        <a href="/" className="site-title">Howard's Projects</a>
        <ul>
            <li> 
                <a href="/projects">Projects</a>
                </li>
                <li>
                <a href="/about">About</a>
                </li>
                <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </nav>

}

export default Navbar