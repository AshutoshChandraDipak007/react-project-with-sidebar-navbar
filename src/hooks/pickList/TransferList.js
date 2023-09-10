import * as React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";


export default function TransferList(props){  
  const [checked, setChecked] = React.useState([]);
  const [leftData, setLeft] = React.useState(props.leftData);
  const [rightData, setRight] = React.useState(props.rightData);

  const leftChecked = intersection(checked, leftData);
  const rightChecked = intersection(checked, rightData);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleCheckedRight = () => {
    setRight(rightData.concat(leftChecked));
    setLeft(not(leftData, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(leftData.concat(rightChecked));
    setRight(not(rightData, rightChecked));
    setChecked(not(checked, rightChecked));
  };
  

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>{customList(leftData,handleToggle,checked)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right">
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left">
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(rightData,handleToggle,checked)}</Grid>
    </Grid>
  );
}

const customList = (items,handleToggle,checked) => (
  <Card>
    <List
      sx={{
        width: 200,
        height: 230,
        overflow: "auto",
      }}
      dense
      component="div"
      role="list">
      {items.map((value) => {
        return (
          <ListItem key={value} button onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText>{value}</ListItemText>
          </ListItem>
        );
      })}
    </List>
  </Card>
);

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}
