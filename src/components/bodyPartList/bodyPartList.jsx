import './BodyPartList.css';

export default function BodyPartList({ bodyParts, activeBodyPart, setActiveBodyPart }) {
  const bPs = bodyParts.map(bP =>
    <a
      key={bP}
      className={bP === activeBodyPart ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'}
      aria-current={activeBodyPart ? 'true' : 'false'}
      onClick={() => setActiveBodyPart(bP)}
    >
      {bP}
    </a>
  );
  return (
    <div className="BodyPartList list-group">
      {bPs}
    </div>
  );
}