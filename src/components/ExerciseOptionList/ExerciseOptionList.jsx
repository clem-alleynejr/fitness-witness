import './ExerciseOptionList.css';
import ExerciseOption from '../ExerciseOption/ExerciseOption';

export default function ExerciseOptionList({ exerciseOptions, handleAddToWorkout, useState, activeBodyPart }) {

  const [search, setSearch] = useState('')
  console.log(search)

  const exercises = exerciseOptions.filter((e) => {
    return search.toLowerCase() === '' ? e : e.name.toLowerCase().includes(search);
  }).map(e =>
    <ExerciseOption
      key={e._id}
      exercise={e}
      handleAddToWorkout={handleAddToWorkout}
    />
  );

  return (
    <>
      <main className="ExerciseOptionList">
        <div className="mb-3">
          <input className="form-control" type="text" placeholder={`Search ${activeBodyPart} Exercise...`} onChange={(evt) => setSearch(evt.target.value)} />
        </div>
        {exercises}
      </main>
    </>
  );
}