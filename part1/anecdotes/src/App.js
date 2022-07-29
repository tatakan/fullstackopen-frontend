import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const randGener = () => Math.floor(Math.random() * anecdotes.length)

  let randIndex = randGener()
  //console.log("current randIndex:", randIndex)
  

  const handlVote = (index) => {
    const cpVotes = [...votes]
    cpVotes[index]++
    setVotes(cpVotes)
    setSelected(selected + 1)
  }

  const maxVoted = () => {
    let mostVoted = 0
    //console.log("current mostVoted", mostVoted)
    
    for (let [index, element] of votes.entries()) {
      
      if (element > votes[mostVoted]){
        mostVoted = index
      }
      
    }
    //console.log("mostVoted b4 return", mostVoted)
    return mostVoted
  }


    
  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[randIndex]}
      <br></br>
      <button onClick={() => handlVote(randIndex)}>vote</button>
      <button onClick={() => setSelected(selected + 1)}>next anecdote</button>
      
      <h2>Anecdote with most votes</h2>
        {anecdotes[maxVoted(randIndex)]}
      
    </div>
  )

}
export default App