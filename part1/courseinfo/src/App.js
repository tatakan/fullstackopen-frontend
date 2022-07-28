const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
  
      {
        name: 'Using props to pass data',
        exercises: 7
      },
  
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  } 

  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

const Header = (props) => {
  console.log(props.course)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part = {props.parts[0].name} exercises = {props.parts[0].exercises} />
      <Part part = {props.parts[1].name} exercises = {props.parts[1].exercises} />
      <Part part = {props.parts[2].name} exercises = {props.parts[2].exercises} />
    </div>
  )
}
const Part = (props) => {
  console.log("Part:" + props)
  return (      
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  console.log(props)
  let total = 0
  props.parts.forEach(element => {
    total += element.exercises
  });

  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
    
  )

}

export default App