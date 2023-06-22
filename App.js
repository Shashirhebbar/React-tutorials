function Heading() {
    return (
      <h1>This is an h1 heading</h1>
    )
  }

  function Heading2() {
    return (
      <h2>This is an h2 heading</h2>
    )
  }

  function App() {
    return ( 
      <div className="App"> 
        This is the starting code for "Your first component" ungraded lab 
        <Heading />
        <Heading2 /> 
      </div> 
    ); 
  } 
   
  export default App;   