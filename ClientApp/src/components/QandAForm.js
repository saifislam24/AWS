import React, { Component } from 'react';

export class QandAForm extends Component 
{
  displayName = QandAForm.name
  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
    //this.postData();
  }
  postData()
  {
    
    var url = "https://localhost:5001/Api/Values/Item";
    fetch(url, {
      method : "POST",
      headers: {
              "Content-Type": "application/json; charset=utf-8",
               },
      body : JSON.stringify({
          Id : document.getElementById('id').value,
          ques : document.getElementById('ques').value,
          ans : document.getElementById('ans').value
          
      })
  })
  .then(function(response)
  {
      response => response.json()
  }).then(function(text)
  {
      //LoadPosts_FetchAPI();    
  });

  }

  render() 
  {
    return (
      <div>
       <form>
       <label>
    Id:
    <input type="text" name="id" id="id"/>
  </label>
  <label>
    Question:
    <input type="text" name="ques" id="ques"/>
  </label>
  <label>
      Answer:
  <input type="text" name="ans" id="ans" />
  </label>
</form>
      </div>
    );
  }
}
