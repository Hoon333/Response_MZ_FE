import React from 'react';
import { Route } from 'react-router';
import { Main, Login, Register, Detail, Edit, PostWrite} from '../pages/index';
import Header from '../component/Header';
import './App.css';
import {ConnectedRouter} from "connected-react-router";
import {history} from "../redux/configStore";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function App() {
  const is_login = useSelector((state) => state.user.is_login);
  
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Header></Header>
        <Route path="/" component={Main} exact></Route>
        <Route path="/login" component={Login} exact></Route>
        <Route path="/register" component={Register} exact></Route>
        <Route path="/postwrite" component={PostWrite} exact></Route>
        <Route path="/edit" component={Edit} exact></Route>
        <Route path="/detail" component={Detail} exact></Route>
      </ConnectedRouter>
      {
        is_login === true ? <FixdBtn onClick={() => {history.push('/postwrite');}}><FontAwesomeIcon icon={faPenToSquare} className="btn_icon" /></FixdBtn> : null
      }
    </div>
  );
}

const FixdBtn = styled.div`
    width: 0;
    height: 0;
    border-bottom: 80px solid #f47b6a;
    border-top: 80px solid transparent;
    border-left: 80px solid transparent;
    border-right: 80px solid #f47b6a;
    position: fixed;
    bottom: 0px;
    right: 0px;
    cursor: pointer;
    .btn_icon {
      font-size: 40px; color: #fff; position: absolute; top: 12px; left: 16px;
    }
`;

export default App;
