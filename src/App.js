import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CommentForm from './components/comment-form/CommentForm';
import Header from './components/header/Header';
import CommentSection from './components/comment-section/CommentSection';

import './App.css';
import CommentList from './components/comment-list/CommentList';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/comments"></Route>
      </Switch>
      <CommentList />
    </>
  );
}

// <CommentForm />

export default App;
