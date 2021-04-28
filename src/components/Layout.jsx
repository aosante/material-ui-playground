import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  page: {
    width: '100%',
  },
});
const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      {/* app bar */}
      {/* side drawer */}
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
