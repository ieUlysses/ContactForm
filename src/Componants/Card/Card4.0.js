import React, { useState } from 'react';
/* import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardActions, CardHeader, Collapse, createTheme, Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';
 */
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        border: "1px solid orange",
        maxWidth: "85vw",
        marginLeft: "auto",
        marginRight: "auto"

    },
    avatar: {
        height: 45,
        width: 45,
        flexDirection: 'row',
        backgroundColor: "orange"
    },

    accent: {
        backgroundColor: "orange",

    },

    title: {
        fontSize: 14,
    },

});

const theme = createTheme({
    palette: {
        primary: orange,
    },
});


export default function OutlinedCard(props) {
    const classes = useStyles();
    const { name, email, phone, dateCreated, area } = props.contact
    let split = name.charAt(0)
    console.log(split)

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (

        <ThemeProvider theme={theme}>

            <Card className={`${classes.root}`} variant="outlined">


                <Grid container spacing={1}>
                    <Grid item>
                        <Avatar className={classes.avatar}>  {split}  </Avatar>
                    </Grid>

                    <Grid item>

                        <Grid container spacing={2}>
                            <Grid item><Typography variant="subtitle1">{name}(4.0)</Typography></Grid>
                            <Grid item><Typography variant="subtitle1">Email: {email}</Typography></Grid>
                            <Grid item><Typography variant="subtitle1">Phone: {phone}</Typography></Grid>
                            <Grid item><Typography variant="subtitle1">Member Since: {dateCreated}</Typography></Grid>
                            <Grid item><Typography variant="subtitle1">Area: Heres</Typography></Grid>
                            <Grid item><Typography variant="subtitle1">Role: Cool-guy</Typography></Grid>
                            <Grid item><Typography variant="subtitle1">Points: 365</Typography></Grid>
                            <Grid item><Typography variant="subtitle1">Verified by Jomigo: yes</Typography></Grid>
                            <Grid item><Typography variant="subtitle1">Jobs: 5</Typography></Grid>
                            <Grid item><Typography variant="subtitle1">Network: Recruiting</Typography></Grid>

                        </Grid>

                    </Grid>
                </Grid>



                <Button expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    variant="contained"
                    color="primary"
                        /* className={classes.accent} */>
                    Show more
                </Button>


                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph variant="h3">More Details...</Typography>
                        <Typography paragraph>
                            Sunt sit cupidatat sit excepteur. Veniam in minim culpa occaecat ea. Enim sint do duis mollit nisi sint reprehenderit culpa Lorem aliqua amet enim. Dolore ad exercitation cupidatat consequat incididunt adipisicing exercitation. Id aute laboris ad eiusmod ad laboris do aute qui aliquip ex. Exercitation eiusmod sit in ut.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>


        </ThemeProvider>
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

