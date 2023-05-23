import { Container } from '@mui/material';
import Propositions from './Propositions';
import Dialectic from './DialecticList';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dialectic />
  },
  {
    path: "/dialectic",
    element: <Dialectic />
  },
  {
    path: "/propostions",
    element: <Propositions />
    ,
  },
]);

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;
