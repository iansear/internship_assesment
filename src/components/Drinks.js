import React, { useEffect, useState } from 'react'
import './Drinks.css'

function Drinks() {
  
  const [drinks, setDrinks] = useState([])
  const [drinkOptions, setDrinkOptions] = useState([])
  const [selectValue, setSelectValue] = useState('')
  const [instructions, setInstructions] = useState('')

  const showInstructions = () => {
    if(selectValue === 'NONE') {
      setInstructions('')
    } else { 
      const drink = drinks.find((drink) => selectValue === drink.strDrink)
      setInstructions(drink.strInstructions)
    }
  }

  const selectOption = (e) => {
    setSelectValue(e.target.value)
  }

  const populateSelect = (drinks) => {
    const selectOptions = drinks.map((drink, index) => {
    return (<option key={index} value={drink.strDrink}>{drink.strDrink}</option>)
    })
    setDrinkOptions(selectOptions)
  }

  const fetchData = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then((resp) => resp.json())
    .then((resp) => {
      setDrinks(resp.drinks)
      populateSelect(resp.drinks)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div id="selectDrink">
      <div id="selectOptions"> 
        <select onChange={selectOption}>
          <option value="NONE">Select a Drink</option>
          {drinkOptions}
        </select>
        <button onClick={showInstructions}>Show Instructions</button>
      </div>
      <div id="instructions">
        <p>{instructions}</p>
      </div>
    </div>
  );
}

export default Drinks;
