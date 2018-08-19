import React, { Component } from 'react';
import { QandAList } from './QandAList';
import { QnASubmission } from './QnASubmission';
import 'bootstrap/dist/css/bootstrap.css';

export class QandAmodule extends Component
 { 
  constructor(props)
  {
   super(props);
   this.state = 
   { 
     idfromlist: null,
     toggle: true
  };
   this.myCallback = this.myCallback.bind(this);
   
 }
  myCallback = (dataFromChild) => {
    alert("Parent method called with child data: " + dataFromChild.id);
     this.setState({idfromlist:dataFromChild,toggle: false})
     //this.setState({toggle: !toggle})
}
myCallback2 =()=>
{  
   this.setState({toggle: true})
}
  
  render()
   {
    return(
    <div>
      <QnASubmission title="Insert Question and Answer " selectedRecord ={this.state.idfromlist} btnState={this.state.toggle} callBackHook2 = {this.myCallback2}/>
      <QandAList title="Questions and answers List" CallBackHook = {this.myCallback} />
      </div>
    );
  }
}
