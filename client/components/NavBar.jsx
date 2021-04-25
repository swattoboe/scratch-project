import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MyBooks from './MyBooks.jsx';
import Reviews from './Reviews.jsx';
import Complete from './Complete.jsx';
import Profile from './Profile.jsx';
import Search from './Search.jsx';
import Main from './Main.jsx';
import ToBeRead from './ToBeRead.jsx';

// Displays the profile element and links to other components
// Main is what will display upon initial render
export default function NavBar() {
  return (
    <Router>
      <nav>
        <Profile />
        <Link to='/newHome'>Home</Link>
        <Link to='/MyBooks'>My Books</Link>
        <Link to='/ToBeRead'>To Be Read</Link>
        <Link to='/Complete'>Complete</Link>
        <Link to='/Reviews'>My Reviews</Link>
        <Link to='/Search'>Search</Link>
      </nav>
      <Switch>
        <Route exact path='/home' component={Main} />
        <Route exact path='/newHome' component={Main} />
        <Route path='/MyBooks' component={MyBooks} />
        <Route path='/ToBeRead' component={ToBeRead} />
        <Route path='/Complete' component={Complete} />
        <Route path='/Reviews' component={Reviews} />
        <Route path='/Search' component={Search} />
      </Switch>
    </Router>
  );
}
