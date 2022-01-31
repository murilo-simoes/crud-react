import React, { useState, useEffect } from 'react';
import Axios from "axios";
import './App.css';
import Card from './components/Cards';

function App() {

  const [values, setValues] = useState();
  const [listGames, setListGames] = useState();
  const handleChangeValues = (value) => {
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]:value.target.value,
    }))
  }
  
  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      name:values.name,
      cost:values.cost,
      category:values.category,
    }).then(() => {
      setListGames([...listGames,{
      name:values.name,
      cost:values.cost,
      category:values.category,
      }])
    })
  }

  useEffect(() =>{
    Axios.get("http://localhost:3001/getCards").then((response) =>{
      setListGames(response.data);
    });
  }, []);


  return (
    <div className="app-container">
      <div className='register-container'>
        <h1 className='register-title'>Scrim Shop</h1>
        <input onChange={handleChangeValues} type="text" name='name' autoComplete='off' placeholder='Nome' className='register-input'/>
        <input onChange={handleChangeValues} type="text" name='cost' placeholder='Preço' className='register-input'/>
        <input onChange={handleChangeValues} type="text" name='category' placeholder='Categoria' className='register-input'/>
        <button onClick={() => handleClickButton()} className='register-button'>Cadastrar</button>
      </div>
      {typeof listGames !== "undefined" && listGames.map((value) => {
       return <Card key={value.idgames} listCard={listGames} setListCard={setListGames}
       id={value.idgames}
       name={value.name}
       cost={value.cost}
       category={value.category}
       />
      })}
    </div>
  );
}

export default App;
