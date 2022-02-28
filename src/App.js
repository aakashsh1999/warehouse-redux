import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Warehouse = lazy(()=> import('./views/Warehouse'))
const Info = lazy(()=> import('./views/Info'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div> Loading.....</div>}>
      <Routes>
        <Route path="/" element={<Warehouse />} />
        <Route path="/info" element={<Info />} />
      </Routes>
      </Suspense>
    </Router >
  );
}

export default App;
