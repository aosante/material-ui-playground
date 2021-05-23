import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
});

const Create = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos');

  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) setTitleError(true);
    if (!details) setDetailsError(true);

    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push('/'));

      setTitleError(false);
      setDetailsError(false);
    }
  };

  const handleChange = ({ target: { value } }) => setCategory(value);

  return (
    <Container size="sm">
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Note Title"
          variant="outlined"
          color="secondary"
          className={classes.field}
          fullWidth
          required
          onChange={({ target: { value } }) => setTitle(value)}
          value={title}
          error={titleError}
        />
        <TextField
          label="Details"
          variant="outlined"
          color="secondary"
          className={classes.field}
          multiline
          rows={4}
          fullWidth
          required
          onChange={({ target: { value } }) => setDetails(value)}
          value={details}
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Category</FormLabel>
          <RadioGroup value={category} onChange={handleChange}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          disableElevation
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
