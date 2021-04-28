import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import Typography from '@material-ui/core/Typography';

const NoteCard = ({ note, deleteNote }) => {
  const { id, category, title } = note;

  return (
    <Card style={{ height: '100%' }} elevation={3}>
      <CardHeader
        action={
          <IconButton onClick={() => deleteNote(id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={title}
        subheader={category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
