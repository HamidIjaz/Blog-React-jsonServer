import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreatePost from './components/CreatePost';
import BlogDetail from './components/BlogDetail';
import NotFound from './components/NotFound';
import UpdatePost from './components/UpdatePost';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreatePost />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetail />
            </Route>
            <Route path="/update/:id">
              <UpdatePost />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
