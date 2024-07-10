import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
function App() {
    let component
    switch (window.location.pathname) {
      case "/":
        component = <App/>
        break
      case "/projects":
        component = <Projects/>
        break
      case "/about":
        component = <About/>
        break
      case "/contact":
        component = <Contact/>
    }
    return(
      <>
        <Navbar/>
        <div className="container">
        {component}
        </div>
        <Header/>
        <Footer/>
        
      </>
    );
}

export default App
