import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './pages/Content';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <div className='page_container'>
            <BrowserRouter>
                <Navbar />
                <Content />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;