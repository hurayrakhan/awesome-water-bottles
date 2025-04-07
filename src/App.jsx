import { Suspense } from 'react';
import './App.css'
import Bottles from './components/bottles/bottles';

function App() {
  
  const bottlesPromise = fetch('../public/bottle.json')
    .then(res => res.json());
  return (
    <>
      <h1>Hello World</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
