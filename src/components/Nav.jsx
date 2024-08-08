import { NavLink, Link } from "react-router-dom";
function Nav({button1text="Default",button2text="Default",button3text="Default"}){
  // console.log(props)
  // let extrabutton;
  // if (props.button4text){
  //   extrabutton = <button>{props.button4text}</button>
  // }
  function handleButton1(item){
    alert("Button 1 Clicked")
    console.log(item);
  }
    return(
    <nav>
        <button><NavLink to={'/'}>Home</NavLink></button>
        <NavLink to={'/students'}>View Students</NavLink>
        <NavLink to={'/addstudent'}>Add Students</NavLink>
        <h1>Now This is a Link Component <Link to={'/addstudent'}>This One HEre</Link> </h1>
      {/* <button onClick={handleButton1}>{button1text}</button>
      <button>{button2text}</button>
      <button>{button3text}</button>
      <h1>NAv Heading</h1> */}
      
      {/* <button>{props.button4text}</button> */}
      {/* {extrabutton} */}
     
    </nav>
    )
}

export default Nav

