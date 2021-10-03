import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
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

  return (
    <Grid container spacing={2}>
      {notes.map((note) => (
        <Grid item key={note.id} xs={12} md={4} style={{ display: 'flex' }}>
          <NoteCard deleteNote={handleDeleteNote} note={note} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Notes;
