import './ExerciseOptionList.css';
import ExerciseOption from '../ExerciseOption/ExerciseOption';

export default function ExerciseOptionList({ exerciseOptions }) {
  const exercises = exerciseOptions.map(e =>
    <ExerciseOption
      key={e._id}
      exercise={e}
    />
  );
  return (
    <main className="ExerciseOptionList">
      {exercises}
    </main>
  );
}