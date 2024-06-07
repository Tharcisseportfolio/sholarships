import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
// import Search from './components/search/Search'; // Import the Search component
import Header from './containers/header/Header';
import Footer from './containers/footer/Footer';
import Admission from './components/admission/Admission';
import InfoCards from './components/Info/InfoCards';
import Contact from './containers/contact/Contact';

// import College from './components/college/College';
// import NotFound from './components/NotFound';

import './App.css';


const App = () => {

  // const image = {
  //   backgroundImage: `url(${background})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   width: '100%',
  //   height: '60%',
  //   filter: 'blur(3px)' // Increase the blur value to make it more blurry
  // }


  return (
    <div className='App'>

      <Navbar />
      <div className='App-header'>
        <Header /> 
      </div>
      <InfoCards />
      <Admission />
      <Contact />
      <Footer/>
    </div>
  )
}



export default App
