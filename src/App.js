import { useState, useEffect } from 'react'
import { Container } from '@mui/material';
import Propositions from './Propositions';
import Dialectic from './DialecticList';
import { useFetch, DIALECTIC_ROUTE } from './utils/useFetch';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';

const dialecticList = [
  {
    name: 'Dialectic 1',
    id: 1,
    propositions: [
      {
        id: 1,
        string: 'Proposition 1',
      },
      {
        id: 2,
        string: 'Proposition 2',
      },
    ]
  },
  {
    name: 'Dialectic 2',
    id: 2,
    propositions: [
      {
        id: 1,
        string: 'Proposition 1',
      },
      {
        id: 2,
        string: 'Proposition 2',
      },
    ]
  },
  {
    name: 'Dialectic 3',
    id: 3,
    propositions: [
      {
        id: 1,
        string: 'Proposition 1',
      },
      {
        id: 2,
        string: 'Proposition 2',
      },
    ]
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dialectic dialecticList={dialecticList}/>
  },
  {
    path: "/dialectic",
    element: <Dialectic dialecticList={dialecticList}/>
  },
  {
    path: "/propositions/:dialecticId",
    element: <Propositions/>
  },
]);

function App() {
  const [data, loading] = useFetch(DIALECTIC_ROUTE)

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className="App">
      <Container maxWidth="sm">
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;
