
import React from "react";
import "../style/table.css"
function Table({ columns, data }) {

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ mon,tu,wed,th,fri ,index}) => (
          <tr >
            <td id={`row-${index[0]}`}>{mon}</td>
            <td id= "2">{tu}</td>
            <td id= "3">{wed}</td>
            <td id= "4">{th}</td>
            <td id= "5">{fri}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
