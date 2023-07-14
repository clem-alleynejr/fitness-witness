import './ExerciseChoice.css';

export default function ExerciseChoice({ exerciseChoice, isSaved }) {
  return (
    <div className="ExerciseChoice">
      <div className="flex-ctr-ctr">{exerciseChoice.exercise.bodyPart}</div>
      <div className="flex-ctr-ctr">{exerciseChoice.exercise.name}</div>
      <div className="sets" style={{ justifyContent: isSaved && 'center' }}>
        {!isSaved &&
          <input type="text" name="sets"/>
        }
      <div className="reps" style={{ justifyContent: isSaved && 'center' }}>
        {!isSaved &&
          <input type="text" name="reps"/>
        }        
        <span>{lineItem.qty}</span>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => alert('clicked')}
          >+</button>
        }
      </div>
      </div>
      <div className="ext-price">${lineItem.extPrice.toFixed(2)}</div>
    </div>
  );
}