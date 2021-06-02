import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Radio from "@material-ui/core/Radio";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import ListData from '../ListData';
import Divider from '@material-ui/core/Divider';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});
function List() {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
    setSelectedValue(event.target.value);
    };
    const classes = useStyles();
return (
    
    // <div>
    //     <Radio
    //     checked={selectedValue === 'd'}
    //     onChange={handleChange}
    //     value="d"
    //     color="default"
    //     name="radio-button-demo"
    //     inputProps={{ 'aria-label': 'D' }}
    //   />
    // </div>
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Radio />}
            label="AGBUUY13042020_1042"
          />
          <Divider orientation="vertical" flexItem style={{ marginLeft:"7%", marginRight:"7%" }} />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <div style={{ paddingTop:"7px", marginLeft:"6px"}}>
              Pranay Makwana
          </div>
          <Divider orientation="vertical" flexItem style={{ marginLeft:"7%", marginRight:"7%" }} />
          <Avatar alt="Remy Sharp" src='../Img/Excel.png' />
          <div style={{ paddingTop:"7px", marginLeft:"6px"}}>
            RFQLIST_13042020_1042
          </div>
          <div style={{paddingTop:"8px", paddingLeft:"5px"}}>
          <GetAppIcon />
          </div>
        </AccordionSummary>
        
        <AccordionDetails>
          <Typography color="inherit">
              <ListData />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
);
}

export default List;
