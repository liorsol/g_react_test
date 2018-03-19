import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
    width: "100%"
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function SimpleTable(props) {
  const { classes, repos, orderBy } = props;

  return (
    <Paper className={classes.root}>
      {repos && <Table className={classes.table} style={{width: "100%"}}>
        <TableHead>
          <TableRow>
            <TableCell onClick={() => orderBy("name")}>Name</TableCell>
            <TableCell onClick={() => orderBy("description")}>Description</TableCell>
            <TableCell>url</TableCell>
            <TableCell numeric>Forks count</TableCell>
            <TableCell onClick={() => orderBy("watchers_count")} numeric>Watchers Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repos.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.name}</TableCell>
                <TableCell>{n.description}</TableCell>
                <TableCell>{n.url}</TableCell>
                <TableCell numeric>{n.forks}</TableCell>
                <TableCell numeric>{n.watchers_count}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>}
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
