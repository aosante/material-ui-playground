import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';

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
