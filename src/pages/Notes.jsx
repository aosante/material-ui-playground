import { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Masonry from 'react-masonry-css';
import NoteCard from '../components/NoteCard';

const BASE_URL = 'http://localhost:8000/notes';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  }, []);

  const handleDeleteNote = async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard deleteNote={handleDeleteNote} note={note} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
