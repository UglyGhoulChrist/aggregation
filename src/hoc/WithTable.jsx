import React from "react";

function WithTable(Component) {
  function hocComponent(props) {
    let sortedList = [];
    switch (Component.name) {
      case "YearTable":
        // ! ToDo сделать сортировку по году
        sortedList = props.list
          ? props.list.sort((x, y) => y.year - x.year)
          : [];
        break;
      case "SortTable":
        sortedList = props.list
          ? props.list.sort((x, y) => y.amount - x.amount)
          : [];
        break;
      case "MonthTable":
        // ! ToDo сделать сортировку по месяцам за последний год
        sortedList = props.list
          ? props.list.sort((x, y) => y.monthNumber - x.monthNumber)
          : [];
        break;
    }

    return <Component list={sortedList} />;
  }

  return hocComponent;
}

export default WithTable;
