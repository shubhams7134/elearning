import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiOutlineTeam } from 'react-icons/ai';
import { BiRupee } from "react-icons/bi";
import { FcRating } from "react-icons/fc";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import designCourses from "./Design";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import ReactTooltip from 'react-tooltip';
import Third from "./Third";
import Menu from "./Navbar";

import { withStyles } from '@material-ui/core/styles';

import Tooltip from '@material-ui/core/Tooltip';


const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
    },
}));

function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} />;
}

const useStyles2 = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    customWidth: {
        maxWidth: 500,
    },
    noMaxWidth: {
        maxWidth: 'none',
    },
    customHeight: {
        maxHeight: 100,
    },
    noMaxHeight: {
        maxWidth: 'none`'
    }
}));

// function ControlledOpenSelect() {
//     const classes = useStyles2();
//     const [number, setNumber] = React.useState('0');
//     const [open, setOpen] = React.useState(false);

//     const handleChange = (event) => {
//         setNumber(event.target.value);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     return (
//         <div>
//             <FormControl className={classes.formControl}>
//                 <InputLabel id="demo-controlled-open-select-label">Domain</InputLabel>
//                 <Select
//                     labelId="demo-controlled-open-select-label"
//                     id="demo-controlled-open-select"
//                     open={open}
//                     onClose={handleClose}
//                     onOpen={handleOpen}
//                     value={number}
//                     onChange={handleChange}
//                 >
//                     <MenuItem value="">
//                         <em>All</em>
//                     </MenuItem>
//                     <MenuItem value={1}>Developement</MenuItem>
//                     <MenuItem value={2}>Design</MenuItem>
//                     <MenuItem value={3}>Marketing</MenuItem>
//                     <MenuItem value={4}>Business</MenuItem>
//                     <MenuItem value={5}>Music</MenuItem>
//                 </Select>
//             </FormControl>
//         </div>
//     );
// }


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}

                Developed with ❤️ By Les Pirates
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function DesCardila() {
    const classes = useStyles();
    console.log(designCourses)
    
    return (
        <>
        <Menu/>
        <br/>
            {/* <ControlledOpenSelect /> */}
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {designCourses.map((card) => (
                            
                            <>
                            
                             
                                <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            
                                            className={classes.cardMedia}
                                            image={card.Image}
                                            title={card.Category}
                                           
                                            
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <BootstrapTooltip title={card.Description} placement="right">
                                                <Button>{card.Name}</Button>
                                            </BootstrapTooltip>
                                            <Button variant="contained" color="primary" size="large" style={{marginLeft:'auto',marginRight:"auto"}}>
                                                Enroll Now
                                                {/* {card.Image} */}
</Button>
                                            <Typography style={{ marginTop: "2%", marginBottom: "5%" }}>
                                                <span style={{ fontStyle: "bold" }}>By <span style={{ fontFamily: 'cursive', marginTop: "20%", fontStyle: 'oblique' }}>{card.Courseprovider}</span></span>
                                            </Typography>
                                            <Button variant="outlined" color="secondary" style={{ marginLeft: "2%", marginRight: "0%" }}>
                                                <BiRupee /> {card.Price}
                                            </Button>
                                            <Button variant="outlined" color="secondary" style={{ marginLeft: "1%", marginRight: "0%" }}>
                                                <AiOutlineTeam /> {card.Enrollment}
                                         </Button>
                                            <Button variant="outlined" color="secondary" style={{ marginLeft: "1%" }}>
                                                <FcRating />  <span> <span>{card.Rating}</span></span>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            
                            </>
                        ))}
                    </Grid>
                </Container>
                <Third/>
                {/* <Copyright /> */}
            </main>
        </>

    )
}