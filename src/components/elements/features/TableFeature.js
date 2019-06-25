import React, { useState } from "react";
import T from "../../../utils/i18n";

function columnValue(value) {
  return <td>value</td>;
}

function columns(values) {
  console.log("IS THIS HERE??", values);
  return values.forEach(value => <tr>{columnValue(value)}</tr>);
}

function table(body) {
  console.log("IS THIS HERE", body);
  return <table>{body.forEach(row => columns(row))}</table>;
}

function TableFeature(props) {
  //const { body } = props.value;
  const body = [
    ["Column 1", "Column 2", "Column 3"],
    ["One value goes here", "Another one here", "OK?"]
  ];

  const currentColumnCount = (body[0] || []).length;
  const currentRowCount = body.length;

  const [rowCount, updateRowCount] = useState(currentRowCount || 1);
  const [columnCount, updateColumnCount] = useState(currentColumnCount || 1);

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

  console.log("WTF IS", table(body));

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
      {table(body)}
      {"whynot"}
    </div>
  );
}

export default TableFeature;
