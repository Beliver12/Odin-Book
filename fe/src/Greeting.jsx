import { useState } from "react"

function Game (props) {
    const [buttonText, setButtonText] = useState(1);
    const changeButtonText = () => {
        setButtonText(buttonText + 1)
    }
    return (
        <><button onClick={props.resetGame}>reset game</button>
        <button onClick={changeButtonText}>{buttonText}</button></>
    )
}

function GamePage(props) {
    const [key, setKey] = useState(0);
    

   
    
  debugger
  console.log(key)
    return <Game {...props} key={key}  resetGame={() => setKey(key + 1)} />;
  }
  

function Wrapper({children}) {
    return (
        <div style={{backgroundColor: 'pink'}}>
            {children}
        </div>
    )
}

function Greeting(props) {
   
debugger
    const greetingStyle = {
        theme:{
            backgroundColor: props.backgroundColor,
            color: props.color,
            fontSize: props.fontSize+ "px"
        }
    }

    
    
    
        return <><h1>welcome user</h1><button style={greetingStyle.theme} onClick={props.changeButton}>{props.text}</button></>
    

}




function GreetingContainer(props) {
     const [buttonValue, setButtonValue] = useState("Welcome");
     debugger
      const changeButton = () => {
        if(buttonValue === 'Goodbye' ) {
            setButtonValue('Welcome')
        } else {
            setButtonValue('Goodbye')
        }
     }

    return <Wrapper>
    <Greeting {...props} changeButton={changeButton} text={buttonValue} fontSize={30} backgroundColor="red"/>
<GamePage />
   </Wrapper>
}



export  {GreetingContainer}