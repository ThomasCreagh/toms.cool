import React from 'react'
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#000",
        color: "#fff",
        '@media (max-width:780px)': { 
           flexDirection: "column"
        },
        justifyContent: "right"
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 20,
        "&:hover": {
            color:  "#888888"
        },
        '@media (max-width:780px)': { 
            paddingBottom: ".2rem"    }
    },
    h_pipes: {
        cursor: "pointer", 
        '@media (max-width:780px)': { 
           display: "none"
        }
    },
    header: {
        flexGrow: 1000,
    }
})

function NavBar({goHome, goAbout, goProjects, goContact}) {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <Typography variant="h3" className={classes.header}>
                    Toms.cool
                </Typography>
                <Typography variant="h5" className={classes.menuItem} onClick={() => goHome()}>
                   home
                </Typography>
                <Typography variant="h5" className={classes.h_pipes}>
                    |
                </Typography>
                <Typography variant="h5" className={classes.menuItem} onClick={() => goAbout()}>
                    about
                </Typography>
                <Typography variant="h5" className={classes.h_pipes}>
                    | 
                </Typography>
                <Typography variant="h5" className={classes.menuItem} onClick={() => goProjects()}>
                    projects 
                </Typography>
                <Typography variant="h5" className={classes.h_pipes}>
                    | 
                </Typography>
                <Typography variant="h5" className={classes.menuItem} onClick={() => goContact()}>
                    contact 
                </Typography>
            </Toolbar>
    )
}

export default NavBar
