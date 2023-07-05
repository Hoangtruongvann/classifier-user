import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { columns, data } from "../../fakers/project";
import { projectServices } from "../../service/projectServices";

const Table = () => {
  const [pending, setPending] = useState(true);
  const [projectData,  setProjectData] = useState([]);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  const getProjects = async () => {
    const { data } = await projectServices.get();
   setProjectData(data);
  };

  useEffect(() => {
    getProjects();
  }, []);
console.log(projectData);
  return (
    <DataTable
      columns={columns}
      data={projectData}
      direction="auto"
      fixedHeader
      fixedHeaderScrollHeight="800px"
      selectableRows
      dense
      pagination
      responsive
      progressPending={pending}
      title={"Projects"}
    />
  );
};
export default Table;
