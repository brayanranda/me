import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './pages/home/components/Projects'
import Home from './pages/home'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    ) 
}

export default App
