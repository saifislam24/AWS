import React, { Component } from 'react';
import './NavMenu.css';

export class QandAList extends Component 
{
  displayName = QandAList.name
  constructor(props)
   {
    super(props);
    this.state = { forecasts: [], loading: true };
    this.fetchData();
  }
    fetchData()
  {
    
    fetch('api/Values/TableData')
      .then(response => response.json())
      .then(data => {
          console.log("Data : ",data);         
        this.setState({ forecasts: data, loading: false });
       var val = data.map(value => value.id);
       console.log(val);
      });
  }

   renderForecastsTable(forecasts) {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Question</th>
            <th>Answer</th>            
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.id}>
              <td>{forecast.id}</td>
              <td>{forecast.ques}</td>
              <td>{forecast.ans}</td>
              <td>
              <input  id="btn-sizeList" type="button" className="btn btn-success" value ="Edit"   onClick={() => this.editData(forecast)}/>
              <input  id="btn-sizeList" type="button" className="btn btn-primary" value ="Delete" onClick={() => this.delData(forecast.id)}/>                
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
  editData(_id)
  {
    //alert("child edit called");
    //const { TextValue }  = this.state ;
    this.props.CallBackHook(_id)

  }

  delData(_id)
  {    
    //alert(_id);
    //var a = this.setState({forecasts : forecast.id})
    //var id = parseInt(this.closest('tr').firstChild.textContent);
    console.log(_id);
    fetch('https://localhost:5001/Api/Values/'+_id , {method: 'delete'})
    .then(function(response){
        if(response.ok){
                return response.text();}
        })
    .then((text) =>
    {
        this.fetchData();
        this.renderForecastsTable(this.state.forecasts);
    })  
        
  }

  render() 
  {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.renderForecastsTable(this.state.forecasts);

    return (
      <div>
      <div>
      {this.props.title}
      </div>
      <div>               
        {contents}
      </div>
      </div>
    );
  }
}
