import './ExerciseChoice.css';

export default function ExerciseChoice({ exerciseChoice, isSaved, handleChangeSetQty, handleChangeRepQty, editWorkout, setEditWorkout, workout }) {

    function handleSetQty(evt) {
        handleChangeSetQty(exerciseChoice.exercise._id, evt.target.value)
    }

    function capitalizeFirstLetter(string) {
        return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    const capitalizedExerciseName = capitalizeFirstLetter(exerciseChoice.exercise.name);
    const capitalizedBodyPart = capitalizeFirstLetter(exerciseChoice.exercise.bodyPart);
    const capitalizedTarget = capitalizeFirstLetter(exerciseChoice.exercise.target);
    const capitalizedEquipment = capitalizeFirstLetter(exerciseChoice.exercise.equipment);

    return (
        <div className='card'>
            <div className="card-body">

                <h5 className="flex-ctr-ctr">{capitalizedExerciseName}</h5>
                <p className="flex-ctr-ctr">Body Part: {capitalizedBodyPart}</p>
                <p className="target">Target: {capitalizedTarget}</p>
                <p className="flex-ctr-ctr">Equipment: {capitalizedEquipment}</p>

                <div className="sets">
                    {isSaved ?
                        <p>{exerciseChoice.setQty}</p>
                        :
                        <div className="mb-3">
                            <label htmlFor="sets" className='form-label'>Enter Sets:</label>
                            <input id="sets" type="text" placeholder='Ex. "3"' className='form-control' defaultValue={editWorkout && workout ? exerciseChoice.setQty : ''} onChange={handleSetQty} />
                        </div>
                    }
                </div>

                <div className="reps">
                    {isSaved ?
                        <p>{exerciseChoice.repQty}</p>
                        :
                        <div className="mb-3">
                            <label htmlFor='reps' className='form-label'>Enter Reps:</label>
                            <input id='sets' type="text" placeholder='Ex. "6-8"' className='form-control' defaultValue={editWorkout && workout ? exerciseChoice.repQty : ''} onChange={(evt) => handleChangeRepQty(exerciseChoice.exercise._id, evt.target.value)} />
                        </div>
                    }
                </div>

            </div>
        </div>
    );
}
