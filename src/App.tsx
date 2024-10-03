import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TableMain from "./Components/Table";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <TableMain />
      </div>
    </QueryClientProvider>
  );
}

export default App;
