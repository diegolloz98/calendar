import './assets/styles/App.css';
import React, { useState, useEffect } from 'react';
import Home from './components/home/home';
import firebase from './firebase';
import { QuerySnapshot } from '@firebase/firestore';

function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const ref = firebase.firestore().collection('events');

  function getEvents(){
    setLoading(true);
    ref.onSnapshot((QuerySnapshot)=>{
      const items =[];
      QuerySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setEvents(items);
      setLoading(false);
    });
  }
  useEffect(() =>{
    getEvents();
  }, []);

  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <h1>Calendar</h1>
      <div>
      <section className = 'components'> 
        <Home />
      </section >
      </div>
      <div class='child'> 
        <h1>Events</h1>
        {events.map((evento) => (
          <div key={evento.id}>
            <h2>{evento.time}</h2>
            <h2>{evento.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
