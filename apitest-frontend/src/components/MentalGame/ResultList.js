import React from "react";
import classes from "./ResultList.module.css";
import ResultItem from "./ResultItem";
import Button from "../UI/Button";
//import { useHistory, useLocation } from 'react-router-dom';

// const sortResults = (results, ascending) => {
//   return results.sort((resultA, resultB) => {
//     if (ascending) {
//       return resultA.id > resultB.id ? 1 : -1;
//     } else {
//       return resultA.id < resultB.id ? 1 : -1;
//     }
//   });
// };

const ResultList = (props) => {
  // const history = useHistory();
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);

  // const isSortingAscending = queryParams.get('sort') === 'asc';

  // const sortedResults = sortResults(props.resultArray.results, isSortingAscending);

  // const changeSortingHandler = () => {
  //   history.push(location.pathname, {
  //     search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`,
  //   });
  // };

  return (
    <div>
      <span onClick={props.onCancel} className={classes.canceller}>
        &times;
      </span>
      {/* <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div> */}

      {props.resultArray.loading ? (
        <h3>Loading...</h3>
      ) : props.resultArray.error ? (
        <h3>{props.resultArray.error}</h3>
      ) : (
        <ul className={classes.resultsList}>
          {props.resultArray.results.map((result) => (
            <ResultItem
              key={result.id}
              score={result.score}
              questions={result.questions}
              speed={result.speed}
              time={result.time}
            />
          ))}
        </ul>
      )}

      <Button onClick={props.onCancel}>Close</Button>
    </div>
  );
};

export default ResultList;

/**
 * 
  return (
    <div>
      <span onClick={props.onCancel} className="canceller">
        &times;
      </span>

      {props.resultArray.loading ? (
        <h3>Loading...</h3>
      ) : props.resultArray.error ? (
        <h3>{props.resultArray.error}</h3>
      ) : (
        <ul className="results-list">
          {props.resultArray.results.map((result) => (
            <ResultItem
              key={result.id}
              score={result.score}
              questions={result.questions}
              speed={result.speed}
              time={result.time}
            />
          ))}
        </ul>
      )}

      <Button onClick={props.onCancel}>Close</Button>
    </div>
  );
};

 */