import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink,
} from 'react-router-dom';
import Home from './home';
import About from './about';
import Posts from './posts';
import NotFound from './NotFound';
import Post from './post';
function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink exact activeStyle={{ color: 'green' }} to="/">
          Home
        </NavLink>
        <NavLink exact activeStyle={{ color: 'red' }} to="/about">
          About
        </NavLink>
        <NavLink exact activeStyle={{ color: 'blue' }} to="/posts">
          Posts
        </NavLink>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/posts" component={Posts} />
        <Route path="/home">
          <Redirect to="/" />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
