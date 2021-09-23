import React, { useState } from "react"
import { nanoid } from "nanoid";
import './App.css';
import ContactList from "./Componants/ContactList/ContactList";
/* import { Button, Container, Grid, TextField, Tooltip } from "@material-ui/core";
import { AddRounded, CalendarToday, Email, People, Phone, SearchOutlined, Work, } from "@material-ui/icons";
 */
/* import {
  withStyles,
} from '@material-ui/core/styles'; */
/* import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import { orange } from '@mui/material/colors'; */
import Button from "@mui/material/Button"

import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"

import { AddRounded, CalendarToday, Email, People, Phone, SearchOutlined, Work } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { createTheme } from "@mui/system";
import { orange } from "@mui/material/colors";
import { ThemeProvider } from "@material-ui/styles";


function App() {
  //logic
  const [contacts, setContacts] = useState([])

  const [addFormData, setAddFormData] = useState({
    name: "", email: "", phone: "", dateCreated: "", area: ""
  })



  /* search reflects the value of the googleesque, search bar. */
  const [search, setSearch] = useState("")
  /* refrlcts the  */
  const [searchResults, setSearchResults] = useState([])

  const handleAddFormChange = (e) => {
    e.preventDefault()
    const fieldName = e.target.getAttribute("name")
    console.log(fieldName)
    let fieldValue = e.target.value
    console.log(fieldValue)
    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue
    setAddFormData(newFormData)
  }

  const handleAddFormSubmit = (e) => {
    e.preventDefault()

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      email: addFormData.email,
      phone: addFormData.phone,
      dateCreated: addFormData.dateCreated,
      area: addFormData.area,
      split: addFormData.split
    }

    const newContacts = [...contacts, newContact]
    setContacts(newContacts)

    /*  const clearInputs = {
       id: "",
       name: "",
       email: "",
       phone: "",
       dateCreated: "",
       area: "",
       split: "",
     }
 
     setContacts(clearInputs) */
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value)

    if (search !== "") {
      const newContactList = contacts.filter((contact) => {
        console.log(Object.values(contact).join(" ").toLowerCase())
        return Object.values(contact).join(" ").toLowerCase().includes(search.toLowerCase())

      })
      console.log(search)
      console.log(Object.values(contacts).join(" ").toLowerCase())
      setSearchResults(newContactList)

    } else {
      setSearchResults(contacts)
    }
  }

  //style below

  //Takes a standard Text input from material ui, and applies the following styles. then to render the desired "optik" you call the const 
  /* 
    const CssTextField = withStyles({
      root: {
        //label=text
        '& label.Mui-focused': {
          color: 'green',
        },
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
  
    })(TextField);
   */

  const theme = createTheme({
    palette: {
      primary: orange,
    },
  });
  return (
    <>

      <ThemeProvider theme={theme}>


        <Grid container spacing={1} alignItems="center" >

          <Grid item>
            <SearchOutlined />

          </Grid>

          <Grid item style={{ marginBottom: "15px", marginTop: "15px" }} >
            <TextField type="text" variant="outlined" label="Search" onChange={handleSearch} />
          </Grid>

        </Grid>


        <form >
          {/* Main Container with soacing between pairs set to (3) */}
          <Grid container spacing={3} >
            {/* First pair, people icon + name input */}
            <Grid item>

              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  {/* icon */}
                  <Tooltip title="Name" placement="bottom" arrow>
                    <People />
                  </Tooltip>
                </Grid>
                <Grid item>
                  {/* input */}
                  <TextField label="Name" variant="outlined" id="name" name="name" type="text" onChange={handleAddFormChange} />
                </Grid>
              </Grid>

            </Grid>

            {/* Second pair */}
            <Grid item>

              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  {/* icon */}
                  <Tooltip title="what's your name" placement="bottom" arrow>
                    <Work />
                  </Tooltip>
                </Grid>
                <Grid item>
                  {/* Input */}
                  <TextField label="Area" variant="outlined" color="colME" id="area" name="area" type="text" onChange={handleAddFormChange} />
                </Grid>
              </Grid>

            </Grid>

            {/* Third Pair */}
            <Grid item>

              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  {/* Icon */}
                  <Tooltip title="name@example.com" placement="bottom" arrow>
                    <Email />
                  </Tooltip>
                </Grid>
                <Grid item>
                  {/* input */}
                  <TextField label="Email" variant="outlined" id="email" name="email" type="text" onChange={handleAddFormChange} />
                </Grid>
              </Grid>

            </Grid>

            <Grid item>

              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  {/* Icon */}
                  <Tooltip title="Ex:(0049)15208513630" placement="bottom" arrow>
                    <Phone />
                  </Tooltip>
                </Grid>
                <Grid item>
                  {/* Input */}
                  <TextField label="phone" variant="outlined" id="dateCreated" name="phone" type="text" onChange={handleAddFormChange} />
                </Grid>
              </Grid>

            </Grid>

            <Grid item>

              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  {/* Icon */}
                  <Tooltip title="Format:dd/mm/yyyy" placement="bottom" arrow>
                    <CalendarToday />
                  </Tooltip>
                </Grid>
                <Grid item>
                  {/* Input */}
                  <TextField label="Date" variant="outlined" id="dateCreated" name="dateCreated" type="text" onChange={handleAddFormChange} />
                </Grid>
              </Grid>
            </Grid>





          </Grid>


          <Button style={{ marginBottom: "15px", marginTop: "15px", }} onClick={handleAddFormSubmit} variant="contained" startIcon={<AddRounded />}>
            Add
          </Button>
        </form>

      </ThemeProvider>


      {/* if there less than 1 character in the search bar render the normal contacts, if not render only the contacts that match the search input...  */}


      <ContactList contacts={search.length < 1 ? contacts : searchResults} key={contacts.id} />



    </>

  );
}

export default App;
