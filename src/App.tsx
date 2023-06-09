import { useState, useEffect } from 'react'
import { Container } from '@mui/material';
import Propositions from './Propositions';
import Dialectic from './DialecticList';
import { Dialectic as IDialectic} from './types/interfaces';
import { useFetch, DIALECTIC_ROUTE } from './utils/useFetch';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import React from 'react';

function App() {
  const [data, loading, refresh] = useFetch<IDialectic>(DIALECTIC_ROUTE)
  const [dialecticList, setDialecticList] = useState<IDialectic[]>([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dialectic dialecticList={dialecticList} refresh={refresh}/>
    },
    {
      path: "/dialectic",
      element: <Dialectic dialecticList={dialecticList} refresh={refresh}/>
    },
    {
      path: "/propositions/:dialecticId",
      element: <Propositions/>
    },
  ]);

  
  useEffect(() => {
    setDialecticList(data as IDialectic[]);
  }, [data]);
 
  return (
    <div className="App">
      <Container maxWidth="sm">
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;
