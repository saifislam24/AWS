import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { FetchData } from './components/FetchData';
import { QandAmodule } from './components/QandAmodule';
import {QandAList} from './components/QandAList';
import {QnASubmission} from './components/QnASubmission';


export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={QandAmodule} />        
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/qna' component={QandAList}/>        
        <Route path='/qnasub' component={QnASubmission}/>        
      </Layout>

    );
  }
}
