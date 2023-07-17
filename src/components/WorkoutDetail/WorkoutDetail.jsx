import './WorkoutDetail.css';
import ExerciseChoice from '../ExerciseChoice/ExerciseChoice';

export default function WorkoutDetail({ workout, handleChangeWorkoutName, handleChangeSetQty, handleChangeRepQty, handleSaveUnsavedWorkout, handleDeleteWorkout, handleEditWorkout }) {
    if (!workout) return null;

    const exerciseChoices = workout.exerciseChoices.map(exercise =>
        <ExerciseChoice
            exerciseChoice={exercise}
            isSaved={workout.isSaved}
            key={exercise._id}
            handleChangeSetQty={handleChangeSetQty}
            handleChangeRepQty={handleChangeRepQty}
        />
    );
    

    return (
        <div className="WorkoutDetail">
            <div className="section-heading">
                {workout.isSaved ?
                    <span>{workout.name}</span>
                    :
                    <>
                    <span>Enter Workout Name:</span>
                    <input type="text" name="workoutName" onChange={(evt) => handleChangeWorkoutName(workout._id, evt.target.value)} />
                    </>
                }
            </div>
            <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
                {exerciseChoices.length ?
                    <>
                        {exerciseChoices}
                        <section className="total">
                            {workout.isSaved ?
                                <>
                                    <button
                                        className="btn-sm"
                                        onClick={() => handleEditWorkout(workout._id)}
                                    >EDIT WORKOUT</button>
                                    <button
                                        className="btn-sm"
                                        onClick={() => handleDeleteWorkout(workout._id)}
                                    >DELETE WORKOUT</button>
                                </>
                                :
                                <button
                                    className="btn-sm"
                                    onClick={handleSaveUnsavedWorkout}
                                    disabled={!exerciseChoices.length}
                                >SAVE WORKOUT</button>
                            }
                        </section>
                    </>
                    :
                    <div className="doIt">Yesterday, you said tomorrow. So <img src="https://media.tenor.com/kA8khAUYJZ8AAAAC/shia-labeouf.gif" alt="JUST DO IT" /> </div>
                }
            </div>
        </div>
    )
}