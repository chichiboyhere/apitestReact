import React, { useEffect } from "react";
import GameStart from "./components/MentalGame/GameStart";
import ResultDisplay from "./components/MentalGame/ResultDisplay";
import { useDispatch, useSelector } from 'react-redux'
import { postMyResult, getMyResults} from './actions/resultActions';
import styles from "./styles/Global";


function Api({history}) { 
  
  const dispatch = useDispatch()
  //const postResult = useSelector(state => state.postResult)
  
  
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

 // Implement fetch results 
  useEffect(() => {
    if (userInfo) {
        dispatch(getMyResults())
    } else {
        history.push('/auth')
    }

}, [dispatch, history, userInfo])

const resultList = useSelector(state => state.resultList);



  
// Implement post result
const saveResultHandler = (data) => {
  dispatch(postMyResult(data));  
};


     
  return (
    <div className={`items-center  
    w-11/12 sm:w-full minmd:w-3/4`}>
      
     <GameStart onSave={saveResultHandler}/>
     <ResultDisplay  resultArray={resultList}/>
    </div>
  );
}

export default Api;
