import React from 'react'
import Navbar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


function App() {
let component
switch (window.location.pathname){
  case '/':
    component = <Home />
    break
  case '/about':
    component = <About />
    break
  case '/experience':
    component = <Experience />
    break
  case '/projects':
    component = <Projects />
    break
  case '/contact':
    component = <Contact />
    break
}



  return ( 
  <>
  
  <Navbar />
  <div className="container">{component}</div>
  
  </>
  )
}

export default App;
