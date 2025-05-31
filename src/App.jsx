import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
    <ScrollToTop/>
      <Navbar />
       <main>
        <Outlet/>
       </main>
    <Footer/>
    </>
   
  );
}

export default App;
