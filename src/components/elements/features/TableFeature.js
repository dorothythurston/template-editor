import React, { useState } from "react";
import T from "../../../utils/i18n";
// import TextFeature from "../features/TextFeature";
function headerColumnValue() {
  return <th>header value</th>;
}

function columnValue() {
  return <td>value</td>;
}

function headerColumns() {
  return <tr>{headerColumnValue()}</tr>;
}

function columns(columnCount) {
  return <tr>{columnValue()}</tr>;
}

function formatTable(body) {
  return (
    <table>
      {headerColumns()}
      {columns()}
    </table>
  );
}

function TableFeature(props) {
  const { rows, columns } = props;
  // column count is body[0].length
  // row count is body.length
  const [rowCount, updateRowCount] = useState(rows || 1);
  const [columnCount, updateColumnCount] = useState(columns || 1);

  const onSubmit = event => {
    // props.onUpdate({ table });
    event.preventDefault();
  };

  /*{
    style: 'tableExample',
    table: {
      body: [
        ['Column 1', 'Column 2', 'Column 3'],
        ['One value goes here', 'Another one here', 'OK?']
      ]
    }
  }, */

  return (
    <div className="TableFeature">
      <header>{T.translate("tableFeature.header")}</header>
      <form onSubmit={onSubmit}>
        <label>
          {T.translate("tableFeature.rowCountLabel")}
          <input
            type="number"
            name="rows"
            onChange={event => updateRowCount(event.target.value)}
            value={rowCount}
          />
        </label>
        <label>
          {T.translate("tableFeature.columnCountLabel")}
          <input
            type="number"
            name="columns"
            onChange={event => updateColumnCount(event.target.value)}
            value={columnCount}
          />
        </label>
        <input type="submit" value={T.translate("tableFeature.update")} />
      </form>
      {formatTable()}
    </div>
  );
}

export default TableFeature;
