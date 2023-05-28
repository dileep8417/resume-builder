import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './pages/Content';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/Loading';

const App = () => {
    return (
        <div className='page_container'>
            <Loading />
            <BrowserRouter>
                <Navbar />
                <Content />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;