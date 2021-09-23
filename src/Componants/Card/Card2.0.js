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

import { makeStyles } from '@mui/material';
import { Card } from '@mui/material/Card';
import { CardContent } from "@mui/material/CardContent"
import { Button } from "@mui/material/Button"
import { Typography } from '@mui/material/Typography';
import { Avatar } from '@mui/material/Avatar';
import { CardActions } from '@mui/material/CardActions'
import CardHeader from "@mui/material/CardHeader";
import { Collapse } from '@mui/material';
import { createTheme } from '@mui/system';
import Grid from "@mui/material/Grid"
import IconButon from "@mui/material/IconButton"
import Table from "@mui/material/Table"
import { TableBody } from '@mui/material/TableBody';
import { TableCell } from '@mui/material';
import { TableRow } from '@mui/material/TableRow';
import { TableContainer } from '@mui/material/TableContainer';
import { Grid } from '@mui/material/Grid';
import { orange } from '@mui/material/colors';


const useStyles = makeStyles({

    root: {
        minWidth: 275,
        border: "1px solid orange",
        maxWidth: "98vw",
        marginLeft: "auto",
        marginRight: "auto"

    },
    avatar: {
        height: 45,
        width: 45,
        flexDirection: 'row',

    },



    title: {
        fontSize: 14,
    },
    table: {

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



        <Card className={`${classes.root}`} variant="outlined">

            <Grid container spacing={3} alignItems='center'>
                <Grid item>
                    <Avatar className={classes.avatar}>  {split}  </Avatar>
                </Grid>

                <Grid item>

                    <TableContainer className={classes.table}>
                        <TableRow>
                            <TableCell>
                                {name} (2.0)
                            </TableCell>
                            <TableCell>
                                Phone {phone}
                            </TableCell>
                            <TableCell>
                                Email {email}
                            </TableCell>
                            <TableCell>
                                Date Joined {dateCreated}
                            </TableCell>
                            <TableCell>
                                Reccomended by: Jannis Eller
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Network Tech
                            </TableCell>
                            <TableCell>
                                Role Recruiter
                            </TableCell>
                            <TableCell>
                                Points 365
                            </TableCell>
                            <TableCell>
                                Verified? Yes
                            </TableCell>
                            <TableCell>
                                Jobs: 5
                            </TableCell>
                        </TableRow>
                    </TableContainer>

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

