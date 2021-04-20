import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';

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
  const classes = useStyles();

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

      <form noValidate autoComplete="off">
        <TextField
          label="Note Title"
          variant="outlined"
          color="secondary"
          className={classes.field}
          fullWidth
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
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
          onChange={(e) => setDetails(e.target.value)}
          value={details}
        />
      </form>

      <Button
        onClick={() => console.log('You clicked me')}
        type="submit"
        color="secondary"
        variant="contained"
        disableElevation
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Create;
