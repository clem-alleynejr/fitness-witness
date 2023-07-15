import './ExerciseOptionList.css';
import ExerciseOption from '../ExerciseOption/ExerciseOption';

export default function ExerciseOptionList({ exerciseOptions, handleAddToWorkout }) {
  const exercises = exerciseOptions.map(e =>
    <ExerciseOption
      key={e._id}
      exercise={e}
      handleAddToWorkout={handleAddToWorkout}
    />
  );
  return (
    <main className="ExerciseOptionList">
      {exercises}
    </main>
  );
}