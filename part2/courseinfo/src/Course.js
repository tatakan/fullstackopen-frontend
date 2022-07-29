
const Course = ({courses}) =>{
    //console.log(courses)
    const forArrayPurposes = courses.map((x) =>
    <div key = {x.id}>
      <Header name = {x.name} />
      <Content parts = {x.parts} />
      <Total parts = {x.parts} />
    </div>)
  
    return forArrayPurposes
  
  }
  
  const Header = ({name}) => {
    //console.log(name)
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
  
  
  const Content = ({parts}) => {
    //console.log(props)
    const forCallPurposes = parts.map((element, index) => <Part part = {element.name} exercises = {element.exercises} key = {element.id} />)
    return (
      <div>
        {forCallPurposes}
      </div>
    )
  }
  
  /*    <Part part = {parts[0].name} exercises = {parts[0].exercises} />
        <Part part = {parts[1].name} exercises = {parts[1].exercises} />
        <Part part = {parts[2].name} exercises = {parts[2].exercises} />
        
  */
  const Part = ({part, exercises}) => {
    //console.log("Part:" + props)
    return (      
      <p>
        {part} {exercises}
      </p>
    )
  }
  
  const Total = ({parts}) => {
    //console.log(parts)
    
    const total = parts.reduce((sum, value) => {
      //console.log(sum.exercises + " - " + value.exercises)
      return(sum += value.exercises)}, 0)
    //let total = 0
    /*parts.forEach(element => {
      total += element.exercises
    });*/
    
    return (
      <div>
        <p>Number of exercises {total}</p>
      </div>
      
    )
  }

export default Course