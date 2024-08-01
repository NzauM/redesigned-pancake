function Nav({button1text,button2text,button3text}){
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
      <button onClick={handleButton1}>{button1text}</button>
      <button>{button2text}</button>
      <button>{button3text}</button>
      <h1>NAv Heading</h1>
      {/* <button>{props.button4text}</button> */}
      {/* {extrabutton} */}
     
    </nav>
    )
}

export default Nav

