import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import {
  AppBar,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { format } from 'date-fns';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  page: {
    width: '100%',
    padding: theme.spacing(3),
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  active: {
    // change this to make sense for dark theme
    background: '#3a3838',
  },
  title: {
    padding: theme.spacing(2),
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  date: {
    flexGrow: 1,
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/',
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/create',
    },
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar
        position="fixed"
        className={classes.appBar}
        elevation={0}
        color="secondary"
      >
        <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>Mario</Typography>
          <Avatar src={'/mario-av.png'} className={classes.avatar} />
        </Toolbar>
      </AppBar>
      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography className={classes.title} variant="h5">
            Ninja Notes
          </Typography>
        </div>
        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
