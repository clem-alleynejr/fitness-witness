import './ExerciseChoice.css';

export default function ExerciseChoice({ exerciseChoice, isSaved, handleChangeSetQty, handleChangeRepQty, editWorkout, setEditWorkout, workout }) {

    function handleSetQty(evt) {
        handleChangeSetQty(exerciseChoice.exercise._id, evt.target.value)
    }


    return (
        <div className="ExerciseChoice">
            <div className="flex-ctr-ctr">{exerciseChoice.exercise.name}</div>
            <div className="flex-ctr-ctr">Body Part: {exerciseChoice.exercise.bodyPart}</div>
            <div className="flex-ctr-ctr">Equipment: {exerciseChoice.exercise.equipment}</div>

            <div className="sets">
                <p>Sets</p>
                {isSaved ?
                    <span>{exerciseChoice.setQty}</span>
                    :
                    <input type="text" name="sets" defaultValue={editWorkout && workout ? exerciseChoice.setQty : ''} onChange={handleSetQty} />
                }
            </div>

            <div className="reps">
                <p>Reps</p>
                {isSaved ?
                    <span>{exerciseChoice.repQty}</span>
                    :
                    <input type="text" name="reps" defaultValue={editWorkout && workout ? exerciseChoice.repQty : ''} onChange={(evt) => handleChangeRepQty(exerciseChoice.exercise._id, evt.target.value)} />
                }
            </div>

        </div>
    );
}