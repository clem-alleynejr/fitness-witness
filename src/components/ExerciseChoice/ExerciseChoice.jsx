import './ExerciseChoice.css';

export default function ExerciseChoice({ exerciseChoice, isSaved }) {
    return (
        <div className="ExerciseChoice">
            <div className="flex-ctr-ctr">{exerciseChoice.exercise.name}</div>
            <div className="flex-ctr-ctr">{exerciseChoice.exercise.bodyPart}</div>
            <div className="flex-ctr-ctr">{exerciseChoice.exercise.equipment}</div>

            <div className="sets">
                <p>Sets</p>
                {isSaved ? 
                    <span>{exerciseChoice.setQty}</span>
                    :
                    <input type="text" name="sets" />
                }
            </div>      

            <div className="reps">
                <p>Reps</p>
                {isSaved ?
                    <span>{exerciseChoice.repQty}</span>
                    :
                    <input type="text" name="reps" />
                }
            </div>

        </div>
    );
}