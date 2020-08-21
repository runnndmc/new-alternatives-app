import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './Screens/Home/Home'
import OurStories from './Screens/OurStories/OurStories'
import TestimonialCreate from './Screens/TestimonialCreate/TestimonialCreate'
import TestimonialDetail from './Screens/TestimonialDetail/TestimonialDetail'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/our-stories" component={OurStories}/>
        <Route exact path="/create-testimonial/:id" component={TestimonialCreate}/>
        <Route exact path="/detail-testimonial/:id" component={TestimonialDetail}/>
      </Switch>
    </div>
  );
}

export default App;
