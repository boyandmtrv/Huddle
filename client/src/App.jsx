import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Route path='/' exact component={Join}></Route>
            <Route path='/chat' component={Chat}></Route>
        </Router>
    )
}

export default App
