import Alert from './components/Alert'
import Avatar from './components/Avatar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Alert 
          color="lightBlue"
          fontColor="#24435c"
          text="Default Alert"
          alertStatus="Default"
        />
        <Avatar 
          color="blue"
          fontColor="white"
          name="TO"
          paramsImg="noEmpty"
        />
      </header>
    </div>
  );
}

export default App;
