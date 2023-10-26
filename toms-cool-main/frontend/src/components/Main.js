import React from 'react'
import NavBar from './NavBar'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Button, Input} from '@material-ui/core'
import {useState} from 'react'


function Main() {
    const [homeAboutPressed, setHomeAboutPressed] = useState("none")
    const [aboutPressed, setAboutPressed] = useState("none")
    const [projectsPressed, setProjectsPressed] = useState("none")
    const [contactPressed, setContactPressed] = useState("none")
    const [nextBtn, setNextBtn] = useState("block")

    const [firstname, setFirstname] = useState(null)
    const [lastname, setLastname] = useState(null)
    const [email, setEmail] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [message, setMessage] = useState(null)

    const styles = makeStyles({
        wrapper: {
            paddingLeft: "2rem",
            textAlign: "left",
            color: "#fff",
        },
        continueBtn: {
            textTransform: 'capitalize',
            color: "#fff",
            fontFamily: "JetBrains Mono",
            fontWeight: "100",
            fontSize: "1.25rem",
            paddingLeft: "0rem",
            paddingRight: "0rem",
            display: [nextBtn],
        },
        welcome: {
            paddingTop: "5rem",
        },
        homeAbout: {
            display: [homeAboutPressed],
        },
        aboutTitle: {
            display: [aboutPressed],
            fontWeight: "1000",            
        },
        about: {
            display: [aboutPressed],
        },
        projects: {
            display: [projectsPressed],
        },
        projectsTitle: {
            display: [projectsPressed],
            fontWeight: "1000",
        },
        contactTitle: {
            display: [contactPressed],
            fontWeight: "1000",
        },
        contact: {
            display: [contactPressed],
        },
        form: {
            display: [contactPressed],
            color: "#fff",
            border: ".15rem solid #fff",
            marginRight: "20rem",
            marginLeft: "1.5rem",
            paddingLeft: ".5rem",
            marginBottom: "1rem",
            '@media (max-width:780px)': { 
                marginRight: "3rem",
            },
        },
        formBtn: {
            textTransform: 'capitalize',
            color: "#fff",
            fontFamily: "JetBrains Mono",
            fontWeight: "100",
            fontSize: "1.25rem",
            marginLeft: "1.5rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            outline: ".15rem solid #fff",
            display: [contactPressed],
            marginBottom: "5rem",
        }
    })

    function handleClick() {
        if (projectsPressed === "block" && aboutPressed === "none") {
            setContactPressed("block");
            setNextBtn("none");
        } else if (homeAboutPressed === "none") {
            setHomeAboutPressed("block");
        } else if (aboutPressed === "none") {
            setAboutPressed("block");
        } else if (projectsPressed === "none") {
            setProjectsPressed("block");
        } else if (contactPressed === "none") {
            setContactPressed("block");
            setNextBtn("none");
        }
    }

    function submitForm() {
        fetch("https://tomapi.jamesz.dev/forms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone_number: phoneNumber,
                message: message
            })
        }).then(resp => resp.json()).then((data) => {
            if (data.message === "success") {
                alert("Sent successfully!");
            } else {
                alert("An error has occurred: " + data.message);
            }
        })
    }

    function goHome() {
        setHomeAboutPressed("none");
        setAboutPressed("none");
        setProjectsPressed("none");
        setContactPressed("none");
        setNextBtn("block");
    }

    function goAbout() {
        setHomeAboutPressed("block");
        setAboutPressed("block");
        setProjectsPressed("none");
        setContactPressed("none");
        setNextBtn("block");
    }

    function goProjects() {
        setHomeAboutPressed("none");
        setAboutPressed("none");
        setProjectsPressed("block");
        setContactPressed("none");
        setNextBtn("block");
    }

    function goContact() {
        setHomeAboutPressed("none");
        setAboutPressed("none");
        setProjectsPressed("none");
        setContactPressed("block");
        setNextBtn("none");
    }


    const classes = styles(); 

    return (
        <>
            <NavBar goHome={goHome} goAbout={goAbout} goProjects={goProjects} goContact={goContact}/>
            <div className={classes.wrapper}>
                <Typography className={classes.welcome} variant="h5" >
                    {'>'} Hi, I'm Tom
                </Typography>
                <Typography className={classes.homeAbout} variant="h5"> 
                    {'>'} I am a student, programmer, and much more!
                </Typography>
                <Typography className={classes.aboutTitle} variant="h5">
                    <br/>{'>'} <b>☰ABOUT☰:</b>
                </Typography>
                <Typography className={classes.about} style={{marginLeft: "3rem"}} variant="h6">
                    - I have been programming even since I came out of the womb. My Dad first introduced it to me when I was small, I started with scratch as many do and worked up to text languages such as golang, C#, C++ and Processing (java). From there I started my own programming journey and started to learn python by myself with the help of online forums and YouTube videos. I soon found my program buddy AKA James (jamesz.dev) she motivated me to achieve more and together we started making discord bots together in python. Our major project was Lively, It reached 100 servers but never got verified due to "Inorganic Growth". I am now currently 17 and studying Computer Science at 2nd level. 
                </Typography>
                <Typography className={classes.projectsTitle} variant="h5">
                    <br/>{'>'} <b>☰PROJECTS☰:</b>
                </Typography>
                <Typography className={classes.projects} style={{marginLeft: "3rem"}} variant="h6">
                    - My first major project was a C# ui Login/Signup and an XML file for data storing data lol
                    <br/>- The main reason I loved programming so much was the game dev and I started using Unity to create games, I used C# and my pixel art skills to produce small mobile games which didn't do that well but I uploaded them to Google Play
                    <br/>- The next bigger type project was Lively of course which I have talked about a bit already, but we used python with discord libraries and cogs. We used an sqlitedb though admittedly I didn't do much of the database work and preferred to design algorithms for different commands, data manipulation and such
                    <br/>- I suddenly had a big interest with machine learning and deep learning so I researched that for days and ended up first using tensorflow in python, but many lines of code I didn't understand so I set off to learn deep learning from scratch. And a lot of maths later I managed to make something small. It wasn't very impressive but I was proud of myself.
                    <br/>- After taking a bit of a break from making projects, Google asked me to play their "Foo Bar" challenges. I managed to complete every single one besides the last one. It was unfortunate but it became extremely difficult as you could imagine, as they sometimes employed people if they passed them all.
                    <br/>- I got back into machine learning again but this time it was different, I started using a new language specifically for ML and DL called Julia. I made a simple MNIST digit interpreter for the nation Young Scientist Competition and James made the website for it
                    <br/>- In my class we made small projects with the microbit and the ardino we used components like servos and pcr sensors (which weren't great tbh) we programmed in C++ but for most other things we used python
                    <br/>- I have since relearned go, echo and mongo db and am learning react JS to make this website and our new project pronto
                    <br/>- And many more projects to go! 
                </Typography>
                <Typography className={classes.contactTitle} variant="h5">
                <br/>{`>`} <b>☰CONTACT☰:</b>
                </Typography>
                <Input
                    style={{marginLeft: "3rem"}} 
                    className={classes.form}
                    disableUnderline={true}
                    variant="outlined"
                    placeholder="Firstname"
                    onChange={(e) => setFirstname(e.target.value)}/>
                <Input
                    style={{marginLeft: "3rem"}} 
                    className={classes.form}
                    disableUnderline={true}
                    variant="outlined"
                    placeholder="Lastname"
                    onChange={(e) => setLastname(e.target.value)}/>
                <Input
                    style={{marginLeft: "3rem"}} 
                    className={classes.form}
                    disableUnderline={true}
                    variant="outlined"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}/>
                <Input
                    style={{marginLeft: "3rem"}} 
                    className={classes.form}
                    disableUnderline={true}
                    variant="outlined"
                    placeholder="Phone-number"
                    onChange={(e) => setPhoneNumber(e.target.value)}/>
                <Input
                    style={{marginLeft: "3rem"}}
                    className={classes.form}
                    disableUnderline={true}
                    variant="outlined"
                    multiline={true}
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}/>
                <Button className={classes.formBtn} onClick={() => submitForm()}>
                    Submit Form
                </Button>
                <Button className={classes.continueBtn} onClick={() => handleClick()}>
                    {`>`} Press to continue...
                </Button>
        </div>
       </>
    )
}

export default Main
