import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const Create = () => {
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

      <Button
        onClick={() => console.log('You clicked me')}
        type="submit"
        color="secondary"
        variant="contained"
        disableElevation
      >
        Submit
      </Button>
    </Container>
  );
};

export default Create;
