import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Homepage from './pages/homepage/Homepage';
import ErrorPage from './pages/error/ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path='/' element ={<Homepage />}/>
          <Route path='*' element = {<ErrorPage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
