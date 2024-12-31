import React from "react";
import Container from "./components/Container";
import { Outlet } from "react-router-dom";
import NotesProvider, { useNote } from "./context/Context";

const App = () => {
  return (
    <NotesProvider>
      <Container> 
        <Outlet />
      </Container>
    </NotesProvider>
  );
};

export default App;
