import React from "react";
import Card from "../Card/Card";
/* import Card2 from "../Card/Card2.0"
import Card3 from "../Card/Card3.0"
import Card4 from "../Card/Card4.0" */
import { Grid } from "@material-ui/core";
const ContactList = (props) => {


    const renderContactList = props.contacts.map((contact) => {
        return (


            <Grid item>
                <Card
                    contact={contact}
                    key={contact.id}
                />
            </Grid>


        );
    });
    return <Grid container spacing={5}>{renderContactList}</Grid>;
};

export default ContactList;