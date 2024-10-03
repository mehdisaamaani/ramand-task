import React from "react";
import useTableLogical from "./table.logical";
import Table from "./component/table";

const TableMain = () => {
  const { data } = useTableLogical();
  return (
    <div className="bg-red-800">
      <Table columns={data} />
    </div>
  );
};

export default TableMain;
