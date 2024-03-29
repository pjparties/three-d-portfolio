import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SocialMedia, Webdev, Mobiledev, Uifeatures, Contact } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Topwrapper } from './hoc'
import Privacy from './constants/privacy'
import Tnc from './constants/Tnc'
import BonzoTambola from './pages/BonzoTambola/BonzoTambola'
import VowsnView from './pages/VowsnView/VowsnView'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        {/* <Route path="/#contact" element={<Contact/>} /> */}
        <Route path="/uiux" element={<Topwrapper><Uifeatures /></Topwrapper>} />
        <Route path="/web" element={<Topwrapper><Webdev /></Topwrapper>} />
        <Route path="/mobile" element={<Topwrapper> <Mobiledev /> </Topwrapper>} />
        <Route path="/digital" element={<Topwrapper> <SocialMedia />   </Topwrapper>} />
        <Route path = "/privacy" element={<Topwrapper> <Privacy/> </Topwrapper>}/>
        <Route path = "/tnc" element={<Topwrapper> <Tnc/> </Topwrapper>}/>
        <Route path = "/BonzoTambola" element={<Topwrapper> <BonzoTambola/> </Topwrapper>}/>
        <Route path = "/vnw" element={<Topwrapper> <VowsnView/> </Topwrapper>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
