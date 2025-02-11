import './App.css';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Footer from './footer/footer';
import Main from './main/main';

function App() {
  return (
   <div> 
    <Sidebar />
    <Header />
    <Main />
    <Footer />
    </div>
  );
}

export default App;
