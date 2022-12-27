import React, { useState } from "react";
import Header from "./Header";
import Table from "./Table";
import { getUsers } from "../db/users";

const App = () => {
  const [rows, setRows] = useState(getUsers());
  const [filter, setFilter] = useState("");

  const handleSearch = (event) => {
    const filter = event.target.value.toLowerCase();
    setFilter(filter);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Table rows={rows} filter={filter} />
    </div>
  );
};

export default App;
