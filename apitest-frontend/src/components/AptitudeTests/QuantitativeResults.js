import AptitudeResultItem from './ApitudeResultItem';
import classes from '../MentalGame/ResultList.module.css';
import Button from '../UI/Button';

function QuantitativeResults ({fetchQuantitative, onClose}){
    return (
        <div>
          {/* <span onClick={props.onCancel} className={classes.canceller}>
            &times;
          </span> */}
          {/* <div className={classes.sorting}>
            <button onClick={changeSortingHandler}>
              Sort {isSortingAscending ? 'Descending' : 'Ascending'}
            </button>
          </div> */}
    
          {fetchQuantitative.loading ? (
            <h3>Loading...</h3>
          ) : fetchQuantitative.error ? (
            <h3>{fetchQuantitative.error}</h3>
          ) : (
            <ul className={classes.resultsList}>
              {fetchQuantitative.results.map((result) => (
                <AptitudeResultItem
                  key={result.id}
                  score={result.score}
                  aptitudeSps={result.quantitativeSps}
                  time={result.time}
                />
              ))}
            </ul>
          )}
    
          <Button onClick={onClose} >Close</Button>
        </div>
      );

}
export default QuantitativeResults;