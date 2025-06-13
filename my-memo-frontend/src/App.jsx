import { Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main.jsx';

function App() {

  return (

    <div>
        <div>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </div>
    </div>
  )
}

export default App
