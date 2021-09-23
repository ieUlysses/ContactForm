import React, { useState } from 'react';
/* import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardActions, CardHeader, Collapse, createTheme, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';
import { ArrowDropDownCircle } from '@material-ui/icons'; */
import { Box } from '@mui/system';

const useStyles = makeStyles({
    root: {

        border: "1px solid orange",
        minWidth: "90vw",
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
    table: {

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

                <Grid container spacing={3} alignItems='center'>
                    <Grid item>
                        <Avatar className={classes.avatar}>  {split}  </Avatar>
                    </Grid>

                    <Grid item>
                        <Box>

                            <Grid container spacing={3}>
                                <Grid item>
                                    {name} (3.0)
                                </Grid>
                                <Grid item>
                                    Phone {phone}
                                </Grid>
                                <Grid item>
                                    Email {email}
                                </Grid>
                                <Grid item>
                                    {dateCreated}
                                </Grid>
                                <Grid item>
                                    Reccomended by: Jannis Eller
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item>
                                    Network: Tech
                                </Grid>
                                <Grid item>
                                    Role Recruiter
                                </Grid>
                                <Grid item>
                                    Points 365
                                </Grid>
                                <Grid item>
                                    Verified?Yes
                                </Grid>
                                <Grid item>
                                    Jobs: 5
                                </Grid>
                            </Grid>
                        </Box>

                    </Grid>

                </Grid>

                <IconButton expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    variant="contained"
                    color="primary"
                        /* className={classes.accent} */>
                    <ArrowDropDownCircle />
                </IconButton>


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

