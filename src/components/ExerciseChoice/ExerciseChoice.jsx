import './ExerciseChoice.css';

export default function ExerciseChoice({ exerciseChoice, isSaved, handleChangeSetQty, handleChangeRepQty, editWorkout, setEditWorkout, workout }) {

    function handleSetQty(evt) {
        handleChangeSetQty(exerciseChoice.exercise._id, evt.target.value)
    }


    return (
        <div className='card'>
            <div className="card-body">

                <h5 className="flex-ctr-ctr">{exerciseChoice.exercise.name}</h5>
                <p className="flex-ctr-ctr">Body Part: {exerciseChoice.exercise.bodyPart}</p>
                <p className="target">Target: {exerciseChoice.exercise.target}</p>
                <p className="flex-ctr-ctr">Equipment: {exerciseChoice.exercise.equipment}</p>

                <div className="sets">
                    {isSaved ?
                        <p>{exerciseChoice.setQty}</p>
                        :
                        <div class="mb-3">
                            <label for="sets" className='form-label'>Enter Sets:</label>
                            <input id="sets" type="text" placeholder='Ex. "3"' className='form-control' defaultValue={editWorkout && workout ? exerciseChoice.setQty : ''} onChange={handleSetQty} />
                        </div>
                    }
                </div>

                <div className="reps">
                    {isSaved ?
                        <p>{exerciseChoice.repQty}</p>
                        :
                        <div class="mb-3">
                            <label for='reps' className='form-label'>Enter Reps:</label>
                            <input id='sets' type="text" placeholder='Ex. "6-8"' className='form-control' defaultValue={editWorkout && workout ? exerciseChoice.repQty : ''} onChange={(evt) => handleChangeRepQty(exerciseChoice.exercise._id, evt.target.value)} />
                        </div>
                    }
                </div>

            </div>
        </div>
    );
}