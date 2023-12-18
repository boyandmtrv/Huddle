import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Join from './components/join/Join';
import Chat from './components/chat/Chat';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Join />}></Route>
                <Route path='/chat' element={<Chat />}></Route>
            </Routes>
        </Router>
    )
}

export default App
