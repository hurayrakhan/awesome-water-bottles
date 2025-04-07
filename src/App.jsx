import './App.css'

function App() {
  
  const bottlesPromise = fetch('../public/bottle.json')
    .then(res => res.json());
    
  console.log(bottlesPromise)
  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
