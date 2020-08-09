import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 450,
    position: "relative",
    marginTop: '460px',
    textAlign: 'center'
  },
  title: {
    fontSize: 14,
  },
   '@media(max-width: 770px)': {
    root: {
      marginTop: '850px',
      paddingTop: '10px',
    }
  }
});

 function DropDownDescription() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            To see a Country or States data, please select from the drop down.
            <br/>
             <i> *Data can take up to 24hrs to update*</i>
        </Typography>
      </CardContent>
    
    </Card>
  );
};

export default DropDownDescription;