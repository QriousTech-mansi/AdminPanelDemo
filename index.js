import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import Content from './component/MainContent';
import Header from './component/Header';
import Dummy from './component/Dummy';




class Demo extends React.Component{
  render(){
    return(
      <div>
                  <Header />
                  <Route exact path='/' component={Content}></Route> 
                  <Route exact path="" render={() => (<Redirect to ="/"/>)}/>
                  <Route exact path='/dashboard' component={Content}></Route> 
                  <Route exact path='/dummy' component={Dummy}></Route> 

      </div>
    )
  }
}

ReactDOM.render(<Router><Demo/></Router>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
