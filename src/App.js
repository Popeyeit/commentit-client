import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import CommentsPage from './pages/comments-page/CommentsPage';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/comments">
          <CommentsPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
