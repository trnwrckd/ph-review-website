import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Review from './Components/Review/Review';
import Services from './Components/Services/Services';

import './App.css';
function App() {
  return (
    <div className="App">
      {/* setting up routes */}
      <BrowserRouter>
        {/* header */}
        <div><Header></Header></div>

        <div className="main">
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/review'>
              <Review></Review>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>

        {/* footer */}
        <div><Footer></Footer></div>
      </BrowserRouter>
    </div>
  );
}

export default App;