import { useEffect, useState } from "react";
import moment from "moment";
import "./App.css";
import MonthTable from "./components/MonthTable";
import YearTable from "./components/YearTable";
import SortTable from "./components/SortTable";

const URL =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((list) =>
        setList(
          // Добавляем свойства month, year, monthNumber для сортировки
          list.list.map((el) => {
            return {
              ...el,
              year: moment(el.date).format("YYYY"),
              month: moment(el.date).format("MMM"),
              monthNumber: moment(el.date).format("MM"),
            };
          })
        )
      )
      .catch(() => {})
      .finally(() => {});
  }, [URL]);

  return (
    <div className="App" id="app">
      <MonthTable list={list} />
      <YearTable list={list} />
      <SortTable list={list} />
    </div>
  );
}

export default App;
