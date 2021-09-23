import React, { useState } from 'react';
/* import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardActions, CardHeader, Collapse, createTheme, Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors'; */


import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import Collapse from '@mui/material/Collapse';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import { CardHeader } from '@material-ui/core';

const JamesCard = styled(Card)({
    minWidth: 275,

    maxWidth: "98vw",
})

const JamesAvatar = styled(Avatar)({
    height: 45,
    width: 45,
    flexDirection: 'row',

})




export default function OutlinedCard(props) {

    const { name, email, phone, dateCreated, area } = props.contact
    let split = name.charAt(0)
    console.log(split)

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (


        <JamesCard variant="outlined">
            <CardHeader avatar={<JamesAvatar>  {split}  </JamesAvatar>} title={<Typography>{name}</Typography>} />

            <CardContent >
                <Grid container spacing={2}>
                    <Grid item><Typography variant="subtitle1">Email: {email}</Typography></Grid>
                    <Grid item><Typography variant="subtitle1">Phone: {phone}</Typography></Grid>
                    <Grid item><Typography variant="subtitle1">Member Since: {dateCreated}</Typography></Grid>
                    <Grid item><Typography variant="subtitle1">Area: Heres</Typography></Grid>
                    <Grid item><Typography variant="subtitle1">Role: Cool-guy</Typography></Grid>
                    <Grid item><Typography variant="subtitle1">Points: 365</Typography></Grid>
                    <Grid item><Typography variant="subtitle1">Verified: Sure</Typography></Grid>
                </Grid>
            </CardContent>

            <CardActions disableSpacing>
                <Button expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    variant="contained"

                        /* className={classes.accent} */>
                    Show more
                </Button>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph variant="h3">More Details...</Typography>
                    <Typography paragraph>
                        Sunt sit cupidatat sit excepteur. Veniam in minim culpa occaecat ea. Enim sint do duis mollit nisi sint reprehenderit culpa Lorem aliqua amet enim. Dolore ad exercitation cupidatat consequat incididunt adipisicing exercitation. Id aute laboris ad eiusmod ad laboris do aute qui aliquip ex. Exercitation eiusmod sit in ut.
                    </Typography>
                </CardContent>
            </Collapse>
        </JamesCard>



    );
}

/* const ContactCard = (props) => {

    const { name, email, phone, dateCreated } = props.contact
    return (
        <div className="item">

            <div className="content">
                <div >{name}</div>
                <div>{email}</div>
                <div>{phone}</div>
                <div>{dateCreated}</div>

            </div>

        </div>
    );
}; */

