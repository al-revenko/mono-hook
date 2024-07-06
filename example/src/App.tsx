import { useState } from 'react';
import useFoo from '@lokixio/foo-hook';

function App() {
  const [count, setCount] = useState(0);

  const value = useFoo();

  return (
    <>
      <h1>{value}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
