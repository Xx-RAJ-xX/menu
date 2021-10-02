import React from 'react';
import items from './data';
import Item from './Item';
import {useState} from 'react';

const App = () => {

  const [meal,setMeal]= useState("all");

  const handleAll=()=>{
    setMeal("all");  }

    const handleBreakfast=()=>{
    setMeal("breakfast");
  }
  const handleLunch=()=>{
    setMeal("lunch");
  }
  const handleShakes=()=>{
    setMeal("shakes");
  }

  return (
    <main>
      <section className="menu section">
        <div className='title'>
      <h2>Our menu</h2>
      <div className="underline"></div>
      </div>
      <div className='btn-container'>
        <button type="button" className="filter-btn" onClick={handleAll}>All</button>
        <button type="button" className="filter-btn"onClick={handleBreakfast}>Breakfast</button>
        <button type="button" className="filter-btn"onClick={handleLunch}>Lunch</button>
        <button type="button" className="filter-btn"onClick={handleShakes}>Shakes</button>
      </div>
      <div className='section-center'>
        {
          items.map((item)=>{
            console.log({meal})
            return(
              
             <Item key={item.id} item={item} meal={meal}/>
            );
          })
        }
      </div>
      
      </section>
    </main>
  )
}

export default App
