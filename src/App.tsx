import React, {useState, useEffect, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import {Table,Avatar,Button} from "antd";
import {columns} from './components/columns'
import { fetchData } from './fetchData';

const App = () => {
  const [dataSource, setDataSource] = useState<any[]>([])
  // const fetchAndAssign = async() => {
  //   const data = await fetchData()
  //   setDataSource(data)
  // };
  // const fetchAndAssign = useCallback(async () => {
  //   const data = await fetchData()
  //   setDataSource(data)
  // }, [])

  // useEffect(() => {
  //   fetchAndAssign();
  // }, [fetchAndAssign])

  // const buttonClicked = () => {
  //   fetchAndAssign()
  // }
  const fetchAndAssign = async () => {
    await new Promise(resolve => setTimeout(resolve, 200));
    const data = await fetchData()
    console.log(data)
    setDataSource(data)
  }

  useEffect(() => {
    fetchAndAssign()
    console.log(dataSource)
  }, [])

  const buttonClicked = () => {
    fetchAndAssign()
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button type='primary' onClick={buttonClicked} style={{marginBottom:"2vh",marginTop:"2vh"}}>Fetch Data</Button>
        {/* {
          (dataSource != undefined) && (
            <Table dataSource={dataSource} columns={columns} pagination={false} /> 
          )
        } */}
        <Table dataSource={dataSource} columns={columns} pagination={false} /> 
        
        
          
        
            
      </header>
    </div>
  );
}


export default App;
