import './ExerciseOptionList.css';
import ExerciseOption from '../ExerciseOption/ExerciseOption';

export default function ExerciseOptionList({ exerciseOptions, handleAddToWorkout, useState }) {
  
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
      <div className="SearchBar">
        <input type="text" onChange={(evt) => setSearch(evt.target.value)}/>
      </div>
      <main className="ExerciseOptionList">
        {exercises}
      </main>
    </>
  );
}