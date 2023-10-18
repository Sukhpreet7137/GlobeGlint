import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { useState,useEffect } from 'react';

function App() {



  const date1 = new Date();
  let yesterday = new Date(date1)
  yesterday.setDate(yesterday.getDate() - 1)
  let day = yesterday.getDate();
  let month = yesterday.getMonth() + 1;
  let year = yesterday.getFullYear();

let currentDate = `${year}-${month}-${day}`;

  const [topic,settopic]=useState("null");
	const [data,setdata]=useState([]);
  

  useEffect(()=>{
		getdata();
	},[topic]);

  const date=""+currentDate+"";
	async function getdata(){
    if(topic!=="null"){
      const data1=await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=${date}&apiKey=89763507ef3e45a69782b0d41a14fcf3`);
      const output=await data1.json();
      // console.log(output);
      setdata(output?.articles);
    }
    else{
      const data1=await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=89763507ef3e45a69782b0d41a14fcf3");
      const output=await data1.json();
      // console.log(output);
      setdata(output?.articles);
    }
	}


  return (
    <div className="App">
      <Header topic={topic} settopic={settopic} setdata={setdata}/>
      <Body data={data} topic={topic}/>
      
    </div>
  );
}

export default App;
