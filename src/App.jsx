import './App.css'
import { Header } from './components/header/Header'
import { About } from './components/about/About'
import { Portofolio } from './components/portofolio/Portofolio'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import { Home } from './components/home/Home'
import { Services } from "./components/services/Services";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Portofolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App
