import './BodyPartList.css';

export default function BodyPartList({ bodyParts, activeBodyPart, setActiveBodyPart }) {
  const bPs = bodyParts.map(bP =>
    <li
      key={bP}
      className={bP === activeBodyPart ? 'active' : ''}
      onClick={() => setActiveBodyPart(bP)}
    >
      {bP}
    </li>
  );
  return (
    <ul className="BodyPartList">
      {bPs}
    </ul>
  );
}