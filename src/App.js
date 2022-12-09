import './App.css';
import HomePage from './pages/HomePage';
import ViewPage from './pages/ViewPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
 <Routes>
 <Route path='/' element={<HomePage/>} />
 <Route path='/view/:id' element={<ViewPage/>} />

 {/* <Route path='*' element={<NoMatch/>} /> */}

      </Routes>

  </Router>

  );
}

export default App;
