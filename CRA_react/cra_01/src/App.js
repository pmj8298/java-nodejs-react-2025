import './App.css';

function App() {
  const pop = () => alert('반가워요')
  return (
    <div className="App">
      <h1>CRA로 처음 리액드를 시작</h1>
      <button onClick={pop}>안녕</button>
    </div>
  );
}

export default App;
