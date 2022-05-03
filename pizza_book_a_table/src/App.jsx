import Header from './Header';
import './Header.css'
import Navbar from './Navbar';
import './Navbar.css'
import Introduction from './Introduction';
import './Introduction.css'
import Menu from './Menu';
import './Menu.css'
import Booking from './Booking';
import './Booking.css'
import Footer from './Footer';
import './Footer.css'

function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Orelega+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
      </style>
      <Header />
      <Navbar />
      <Introduction />
      <div className='line'></div>
      <Menu />
      <div className='line'></div>
      <Booking />
      <div className='line'></div>
      <Footer />
    </div>
  );
}

export default App;
