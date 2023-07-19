import './WorkoutDetail.css';
import ExerciseChoice from '../ExerciseChoice/ExerciseChoice';
import { useState } from 'react';


export default function WorkoutDetail({ workout, handleChangeWorkoutName, handleChangeSetQty, handleChangeRepQty, handleSaveUnsavedWorkout, handleDeleteWorkout, handleEditWorkout, editWorkout, setEditWorkout }) {

    if (!workout) return null;

    const exerciseChoices = workout.exerciseChoices.map(exercise =>
        <ExerciseChoice
            exerciseChoice={exercise}
            isSaved={workout.isSaved}
            key={exercise._id}
            handleChangeSetQty={handleChangeSetQty}
            handleChangeRepQty={handleChangeRepQty}
            editWorkout={editWorkout}
            setEditWorkout={setEditWorkout}
            workout={workout}
        />
    );

    function handleEdit(evt) {
        setEditWorkout(true);
        handleEditWorkout(workout._id)
    }

    return (

        // waffle
        <main className="WorkoutDetail">
            <div className="section-heading">
                {workout.isSaved ?
                    <span>{workout.name}</span>
                    :
                    <>
                        <div class="mb-3">
                            <label for="workoutName" className="form-label">New Workout Name:</label>
                            <input id="workoutName" placeholder='Ex. "Leg Day"' type="text" className="form-control" defaultValue={editWorkout ? workout.name : ''} onChange={(evt) => handleChangeWorkoutName(workout._id, evt.target.value)} />
                        </div>
                    </>
                }
            </div>
            <div>
                {exerciseChoices.length ?
                    <>
                        {exerciseChoices}
                        <section className="total">
                            {workout.isSaved ?
                                <>
                                    <button
                                        className="btn-sm"
                                        onClick={handleEdit}
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
                    <>
                        {workout.isSaved ?
                            <>
                                <button
                                    className="btn-sm"
                                    onClick={handleEdit}
                                >EDIT WORKOUT</button>
                                <button
                                    className="btn-sm"
                                    onClick={() => handleDeleteWorkout(workout._id)}
                                >DELETE WORKOUT</button>
                            </>
                            :
                            <div className="doIt">Add exercises from the right side of the page! <br /><br />Yesterday, you said tomorrow. So... <br /> <img src="https://media.tenor.com/kA8khAUYJZ8AAAAC/shia-labeouf.gif" alt="JUST DO IT" /> </div>
                        }
                    </>
                }
            </div>
        </main>
    )
}