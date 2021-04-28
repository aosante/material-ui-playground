import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
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
    <Container>
      <Grid container spacing={3} alignItems="stretch" direction={'row'}>
        {notes.map((note) => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <NoteCard deleteNote={handleDeleteNote} note={note} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notes;
