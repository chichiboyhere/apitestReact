import React, { useState, useEffect } from "react";
import QuantitativeResults from "./QuantitativeResults";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";
import classes from "./AptitudeTests.module.css";
import Text from "./Text";
import questions from './QuantitativeQuestionsOne'
import GetSolution from "./GetSolution";
import { useDispatch, useSelector } from "react-redux";
import {
  postQuantitativeSpsec,
  getQuantitativeSpsec,
} from "../../actions/quantitativeActions";
import styles from "../../styles/Global";
import Card from "../UI/Card";
import Message from "../UI/Message";


const QuantitativeTestOne = ({history}) => {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    const [showTime, setShowTime] = useState(true);
    // Quantitative states
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isCorrection, setIsCorrection] = useState(false);
    const [startTest, setStartTest] = useState(false);
    const [showSavedResults, setShowSavedResults] = useState(false);
    const [isNotSubmitted, setIsNotSubmitted] = useState(true);
  
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const postQuantitative = useSelector(state => state.postQuantitative)
    const {
        loading: loadingPostQuantitative,
        error: errorPostQuantitative,
        success: successPostQuantitative,
    } = postQuantitative
  
    useEffect(() => {
      let interval = null;
  
      if (isActive && isPaused === false) {
        interval = setInterval(() => {
          setTime((time) => time + 10);
        }, 10);
      } else {
        clearInterval(interval);
      }
      return () => {
        clearInterval(interval);
      };
    }, [isActive, isPaused]);
  
    // Implement fetch quantitative results
    useEffect(() => {
      if (userInfo) {
        dispatch(getQuantitativeSpsec());
      } else {
        history.push("/auth");
      }
    }, [dispatch, history, userInfo]);
  
    const fetchQuantitative = useSelector((state) => state.fetchQuantitative);
  
    const handleStart = () => {
      setIsActive(true);
      setIsPaused(false);
      setStartTest(true);
    };
  
    const handleReset = () => {
      setIsActive(false);
      setTime(0);
      setStartTest(false);
      setScore(0);
      setCurrentQuestion(0);
    };
  
    // Implement post result
    const saveResultHandler = (data) => {
      dispatch(postQuantitativeSpsec(data));
      setIsNotSubmitted(false); 
    };
  
    //Implement fetch saved results
    const fetchResultHandler = () => {
      setShowSavedResults(true);
    };
  
    // Implement close result
    const closeResultHandler = () => {
      setShowSavedResults(false);
    };
   // Implement close of Answers
   const closeAnswersHandler =()=>{
    setIsCorrection(false);
  }
    
    /* A possible answer was clicked */
    const optionClicked = (isCorrect) => {
      // Increment the score
      if (isCorrect) {
        setScore(score + 1);
      }
  
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
        setShowTime(false);
        setIsPaused(true);
        setIsActive(false);
      }
    };
  
    /* Resets the game back to default */
    const restartGame = () => {
      setScore(0);
      setCurrentQuestion(0);
      setShowResults(false);
      setShowTime(true);
      setIsActive(false);
      setTime(0);
      setStartTest(false);
      setIsNotSubmitted(true);
    };
  
    const getCorrection = () => {
      setIsCorrection(true);
    };
  
    return (
      <Card className={classes.containerWrapper}>
        {showTime && (
          <>
            <div className={classes.stopwatch}>
              <Timer time={time} />
              <Text text={'Quantitative Test One'}/>
              <ControlButtons
                active={isActive}
                isPaused={isPaused} 
                handleStart={handleStart}
                handleReset={handleReset}
              />
            </div>
            <div className={classes.resultDisplay} >
              {!showSavedResults && (
                <button onClick={fetchResultHandler}>Saved Results </button>
              )}
              {showSavedResults && (
                <QuantitativeResults
                  fetchQuantitative={fetchQuantitative}
                  onClose={closeResultHandler}
                />
              )}
            </div>
          </>
        )}
        {startTest && (
          <div className={classes.container}>
            {/* 1. Header  */}
            <h1 className={styles.h1Text}>Quantitative Problems</h1>
  
            {/* 2. Current Score  */}
            <h2>Score: {score}</h2>
  
            {/* 3. Show results or show the question game  */}
            {showResults ? (
              <div className={classes.finalresults}>
              
                <h1 className={styles.h1Text}>Final Results</h1>
                <h2>
                  {score} out of {questions.length} correct - (
                  {(score / questions.length).toFixed(2) * 100}%)
                </h2>
                <h3>
                  You answered {score} questions correctly in {time / 1000}s,
                  that's {(score / (time / 1000)).toFixed(2)} score/s.
                </h3>
                <div className={classes.flashedMsg}>
                {loadingPostQuantitative && <Message className={classes.loadingMessage} >...loading</Message>}
                {successPostQuantitative && <Message className={classes.successMessage} >Result saved</Message>}
                {errorPostQuantitative && <Message className={classes.errorMessage} >{errorPostQuantitative}</Message>}
                
                </div>

                
                <button onClick={() => restartGame()}>Restart </button> &nbsp;
                <button disabled={!isNotSubmitted}
                  onClick={() =>
                    saveResultHandler({
                      score: score,
                      quantitativeSps: (score / (time / 1000)).toFixed(2),
                    })
                  }
                >
                  Save Result
                </button>
                &nbsp;&nbsp;
                {/* {!isCorrection && (
                  <button onClick={() => getCorrection()}>Get Answers </button>
                )} */}
                {score===20? <Message className={classes.successMessage}>Good job!</Message>:<button onClick={() => getCorrection()}>Get Answers </button>}
                {isCorrection && <GetSolution questions={questions} onClose={closeAnswersHandler}/>}
              </div>
            ) : (
              <div className={classes.questioncard}>
                
                <h2>
                  Question: {currentQuestion + 1} out of {questions.length}
                </h2>
                <h3 className={classes.questiontext}>
                   {questions[currentQuestion].text}
                </h3>
                
                {/* List of possible answers  */}
                <ul>
                  {questions[currentQuestion].options.map((option) => {
                    return (
                      <li
                        key={option.id}
                        onClick={() => optionClicked(option.isCorrect)}
                      >
                        {option.text}
                      </li>
                    );
                  })}
                </ul>
                
              </div>
            )}
          </div>
        )}
      </Card>
    );
}

export default QuantitativeTestOne