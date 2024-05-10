import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Table,Avatar,Button} from "antd";
import {columns} from './components/columns'

const App = () => {
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('https://random-data-api.com/api/v2/users?size=10')
      if (!response.ok) {
        throw new Error('could not fetch data')
      }
      const data = await response.json()
      const formattedData = data.map((item:any) => ({
        key: item.id,
        first_name: item.first_name,
        last_name: item.last_name,
        email: item.email,
        // avatar: <img src={item.avatar} style={{maxHeight:"100px"}}/>
        avatar: <Avatar src={item.avatar} size='large'/>
      }))
      setDataSource(formattedData)
    }
    catch (error) {
      console.error('error found')
    }
  }

  const buttonClicked = () => {
    fetchData()
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button type='primary' onClick={buttonClicked}>Fetch Data</Button>
        <Table dataSource={dataSource} columns={columns} pagination={false} />     
      </header>
    </div>
  );
}


export default App;
