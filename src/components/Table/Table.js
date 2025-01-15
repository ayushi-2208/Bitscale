import React, { useState } from "react";
import "./table.css";
import col1 from "../../images/Frame 16.png";
import col2 from "../../images/image 16.png";
import col3 from "../../images/image 54.png";
import Playcircle from "../../images/play_circle.png";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const Table = () => {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      playCircle: <img src={Playcircle} alt="" />,
      inputColumn: "Oct 12, 2024 at 14:08 PM",
      actionColumn: "Bitscale Evaluation - Account relevancy check",
      enrichCompany: "Bitscale Evaluation - Account relevancy check",
    },
    {
      id: 2,
      playCircle: <img src={Playcircle} alt="" />,
      inputColumn: "Oct 12, 2024 at 14:08 PM",
      actionColumn: "Cell data size exceeds limit",
      enrichCompany: "BMW Evaluation - Relevancy check",
    },
    {
      id: 3,
      playCircle: <img src={Playcircle} alt="" />,
      inputColumn: "Oct 12, 2024 at 14:08 PM",
      actionColumn: "https://www.linkedin.com/bitScale",
      enrichCompany: "Google Evaluation - Lilevancy check",
    },
    {
      id: 4,
      playCircle: <img src={Playcircle} alt="" />,
      inputColumn: "Oct 12, 2024 at 14:08 PM",
      actionColumn: "Loading data, Please wait",
      enrichCompany: "Apple Evaluation - Olvancy check",
    },
    {
      id: 5,
      playCircle: <img src={Playcircle} alt="" />,
      inputColumn: "Oct 12, 2024 at 14:08 PM",
      actionColumn: "Loading data, Please wait",
      enrichCompany: "Figma Evaluation - Evancy check",
    },
  ]);
  const [columns, setColumns] = useState([
    { key: "id", label: "" },
    { key: "playCircle", label: "" },
    { key: "inputColumn", label: "Input Column" },
    { key: "actionColumn", label: "Action Column" },
    { key: "enrichCompany", label: "Enrich Company" },
  ]);
  const handleAddColumn = () => {
    const newKey = `column${columns.length + 1}`;
    setColumns([
      ...columns,
      { key: newKey, label: `New Column ${columns.length - 3}` },
    ]);

    setTableData(tableData.map((row) => ({ ...row, [newKey]: "" })));
  };

  const handleAddRow = () => {
    const newRow = { id: tableData.length + 1 };
    columns.forEach((column) => {
      newRow[column.key] =
        column.key === "playCircle" ? <img src={Playcircle} alt="" /> : "";
    });
    setTableData([...tableData, newRow]);
  };
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>
                <div className="header-div">
                  {col.key === "inputColumn" && <img src={col1} alt="" />}
                  {col.key === "actionColumn" && <img src={col2} alt="" />}
                  {col.key === "enrichCompany" && <img src={col3} alt="" />}
                  {col.label}
                </div>
              </th>
            ))}
            <th>
              <button onClick={handleAddColumn} className="add-column-btn">
                <AddOutlinedIcon
                  style={{
                    backgroundColor: "transparent",
                    width: "18px",
                    height: "18px",
                  }}
                />
                Add Column
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              {columns.map((col, index) => (
                <td key={index}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td colSpan={columns.length + 1} style={{ textAlign: "center" }}>
              <button onClick={handleAddRow} className="add-row-btn">
                <AddOutlinedIcon
                  style={{
                    backgroundColor: "transparent",
                    width: "18px",
                    height: "18px",
                  }}
                />
                Add Row
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
