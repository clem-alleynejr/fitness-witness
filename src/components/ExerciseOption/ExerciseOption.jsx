import './ExerciseOption.css';

export default function ExerciseOption({ exercise }) {
    return (
        <div className="ExerciseOption">
            <div className="bodyPart">{exercise.bodyPart}</div>
            <div className="equipment">{exercise.equipment}</div>
            <div className="gifUrl">{exercise.gifUrl}</div>
            <div className="name">{exercise.name}</div>
            <div className="target">{exercise.target}</div>
            <button className="btn-sm" onClick={() => console.log('click')}>
                ADD
            </button>
        </div>
    );
}