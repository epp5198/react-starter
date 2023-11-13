


const initialList = [
  { id: 0, title: 'Great Barrier Reef', seen: false },
  { id: 1, title: 'Grand Canyon', seen: false },
  { id: 2, title: 'Northern Lights', seen: false },
];

export default function BucketList() {
  function useImmer(initialList) {
    
  }

  const [list, updateList] = useImmer(initialList);

  function handleToggle(artworkId, nextSeen) {
    updateList(draft => {
      const artwork = draft.find(a =>
          a.id === artworkId
      );
      artwork.seen = nextSeen;
    });
  }

  return (
      <>
        <h1>My Bucket List</h1>
        <h2>A list of things I want to see:</h2>
        <ItemList
            artworks={list}
            onToggle={handleToggle} />
      </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
      <ul>
        {artworks.map(artwork => (
            <li key={artwork.id}>
              <label>
                <input
                    type="checkbox"
                    checked={artwork.seen}
                    onChange={e => {
                      onToggle(
                          artwork.id,
                          e.target.checked
                      );
                    }}
                />
                {artwork.title}
              </label>
            </li>
        ))}
      </ul>
  );
}

