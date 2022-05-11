import Counter from './counter';
import User from './User';

function App() {
  const data = {userDetails: [
    { name: 'John', age: 24, id: 1234 },
    { name: 'Mary', age: 29, id: 1289 },
    { name: 'Joel', age: 27, id: 1567 }
  ]}
  return (
    <div className="App">
      <Counter/>
      <User
       name={this.userDetails}
      />

    </div>
  );
}

export default App;
