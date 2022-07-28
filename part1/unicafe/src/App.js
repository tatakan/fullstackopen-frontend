import { useState } from 'react'

const Button = ({button, onClicked}) => {
  return(
    <button onClick = {() => onClicked(button)}>
      {button}
    </button>
  )
  
}

const Statistics = ({results}) => {

  let valuesAll = results[0] + results[1] + results[2]
  if (results[0] + results[1] + results[2] === 0){
    return(
    <div>
      <p>No feedback given</p>
      {console.log("log1")}
    </div>
    ) 
  }
  let valuesAvg = (results[0] - results[2]) / valuesAll
  let valuesPos = `${(((results[0]) / valuesAll)*100)} %`
  
  return(
    <table>
      <tbody>
        <StatisticLine text="good" value ={results[0]} />
        <StatisticLine text="neutral" value ={results[1]} />
        <StatisticLine text="bad" value ={results[2]}/>
        <StatisticLine text="all" value ={valuesAll} />
        <StatisticLine text="average" value ={valuesAvg} />
        <StatisticLine text="positive" value ={valuesPos} />
      </tbody>
    </table>
  )
}
const StatisticLine = ({text, value}) => {
  return(    
    /*<div>
      <p>{text} {value}</p>
    </div>)*/
    
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
  )

}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const results = [good, neutral, bad]
  
  const clickHandle = (button) => {
    //console.log(button)
    if (button === "good"){ 
      setGood(good+1)
    } else if (button === "bad") {
      setBad(bad+1)
    } else if (button === "neutral"){
      setNeutral(neutral+1)
    } else {
      console.log("not expected func argument", button)
    }
    
  }

  return (
    <div>
      <h2>give feedback</h2>
        <Button button = "good" onClicked= {(param) => clickHandle(param)} />
        <Button button = "neutral" onClicked= {(param) => clickHandle(param)} />
        <Button button = "bad" onClicked= {(param) => clickHandle(param)} />
      <h2>statistics</h2>
        <Statistics results = {results} />
    </div>
  )
}

export default App