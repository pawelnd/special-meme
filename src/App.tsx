import React from 'react';
import styled from "styled-components";
import JokesPage from "./pages/JokesPage";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <div>
        <QueryClientProvider client={queryClient}>
            <JokesPage />
        </QueryClientProvider>

    </div>
  );
}

export default App;

const AppStyled = styled.div``;
