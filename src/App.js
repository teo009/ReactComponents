import Alert from './components/Alert'
import Avatar from './components/Avatar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Alert 
          color="lightBlue"
          fontColor="#24435c"
        />
        <Alert 
          text="Success Alert"
        />
        
        <Avatar 
          color="blue"
          fontColor="white"
          name="TO"
          paramsImg=""
        />
      </header>
    </div>
  );
}

export default App;
