import React, {useState} from "react";
import ResultList from "./ResultList";
import  classes from "./ResultList.module.css";


const ResultDisplay = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  // show all results handler
  const showResultsHandler =()=>{
    setIsOpen(true);
  }
  // close result handler
  const closeResultsHandler =()=>{
    setIsOpen(false);
  }

  return (
    <div className={classes.resultDisplay}>
      {!isOpen && <button onClick={showResultsHandler}>All Saved Results</button>}
      {isOpen && <ResultList resultArray={props.resultArray} onCancel={closeResultsHandler}/>}
    </div>
    
  );
};
export default ResultDisplay;