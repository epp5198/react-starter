


import { useState } from 'react';
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

export function Form() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>That's right!</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }

    return (
        <>
            <h2>City quiz</h2>
            <p>
                What is 5+5
            </p>
            <form onSubmit={handleSubmit}>
        <textarea
            value={answer}
            onChange={handleTextareaChange}
            disabled={status === 'submitting'}
        />
                <br />
                <button disabled={
                    answer.length === 0 ||
                    status === 'submitting'
                }>
                    Submit
                </button>
                {error !== null &&
                    <p className="Error">
                        {error.message}
                    </p>
                }
            </form>
        </>
    );
}

function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== '10'
            if (shouldError) {
                reject(new Error('Good guess but a wrong answer. Try again!'));
            } else {
                resolve();
            }
        }, 1500);
    });
}