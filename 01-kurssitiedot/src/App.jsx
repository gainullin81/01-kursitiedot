//1.8: unicafe step3
import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const all = bad+good+neutral
  const average = (good - bad)/all
  const positive = (good / all)*100
return(
 <div>
   <h1>statistics</h1>
    <p>good: {good}</p>
    <p>neutral: {neutral}</p>
    <p>bad: {bad}</p>
    <p>all: {all}</p>
    <p>average: {average}</p>
    <p>positive: {positive} %</p>
  </div>
)
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 

  return (
     <div>
      <h1>give feedback</h1>
       <button onClick={() => setGood(good + 1)}>good</button> 
       <button onClick={() => setNeutral(neutral + 1)}>neutral</button> 
       <button onClick={() => setBad(bad + 1)}>bad</button>
       <Statistics good={good} neutral={neutral} bad={bad} />
    
  </div>
  ) }
  
  export default App



