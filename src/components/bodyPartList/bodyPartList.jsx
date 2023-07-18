import './BodyPartList.css';

export default function BodyPartList({ bodyParts, activeBodyPart, setActiveBodyPart }) {
  const bPs = bodyParts.map(bP => {
    const formattedBP = bP.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
      <a
        key={bP}
        className={bP === activeBodyPart ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'}
        aria-current={activeBodyPart ? 'true' : 'false'}
        onClick={() => setActiveBodyPart(bP)}
      >
        {formattedBP}
      </a>
    );
  });

  return (
    <div className="BodyPartList list-group">
      <h6>Select Body Part Filter:</h6>
      {bPs}
    </div>
  );
}