import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {openMobileMenu} from "../../utils/actions/index";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CancelIcon from '@material-ui/icons/Cancel';
import * as colors from '../../assets/color'

const useStyles = makeStyles({
    button1: {
      background: `linear-gradient(45deg, ${colors.mainPrimaryColor} 30%, ${colors.mainSecondaryColor} 90%)`,
      border: 0,
      borderRadius: 4,
      boxShadow: `0 3px 5px 2px ${colors.shadowColor}`,
      color: 'white',
      padding: '0.5rem 1.8rem',
      cursor: "pointer",
      border: `0.1em solid ${colors.mainPrimaryColor}`,
      fontWeight: 500,
      '&:hover': {
        background: `${colors.faintSecondaryColor}`,
        color: `${colors.mainPrimaryColor}`
      },
    },

    button2: {
        border: 0,
        borderRadius: 4,
        boxShadow: `0 3px 5px 2px ${colors.shadowColor}`,
        padding: '0.5rem 1.8rem',
        cursor: "pointer",
        border: `0.1em solid ${colors.mainPrimaryColor}`,
        background: `${colors.white}`, 
        color: `${colors.mainPrimaryColor}`,
        fontWeight: 500,
        '&:hover': {
          background: `${colors.faintSecondaryColor}`
        },
      },

    content: {
        padding: '1em 0 0.7em 0',
        display: "flex",
        direction: "column",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 400,
        fontSize: "1.1em"
    },
    headerWrapper: {
        borderBottom: `0.1em solid ${colors.shadowColor}`
    },
    mobileMenu: {
      position: "fixed",
      minWidth: "100vw",
      minHeight: "100vh",
      top: '0px',
      left: '0px',
      padding: '3rem 8rem 6rem 5rem',
      backgroundColor: `${colors.mainSecondaryColor}`
    },
    mobileMenuItem: {
      margin: "2em 0px",
      fontSize: "1.1rem",
      color: "white"
    }
  });


const  HeaderContainer = (props, store) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {mobileMenuToggle} = useSelector(state => state.mobileMenuToggle)

    const menuToggleFunction = () => {
      dispatch(openMobileMenu());
    }

    return (
      <React.Fragment>
        <div className={classes.headerWrapper}>
            <Container>
                <div style={{display: 'flex', minWidth: "100%", justifyContent: 'space-between'}}>

                    <div className={classes.content} 
                        style={{ minWidth: "70%", 
                                justifyContent: "space-between"}}>

                    
                            <div style={{display: 'flex', alignItems: "center"}}>
                                    <div>
                                        <img src="../Skye-taxis-mini.png" style={{maxWidth: "4.2rem", marginRight: "0.5rem"}}/>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <h1 style={{color: `${colors.mainSecondaryColor}`}}>Skye</h1>
                                        <h1 style={{color: `${colors.mainPrimaryColor}`}}>Taxis</h1>
                                </div>
                            </div>
                            
                            <div>
                            <Hidden mdDown>
                                    Hotels
                            </Hidden>
                            </div>
                            
                            <div>
                            <Hidden mdDown>
                                    Customers
                            </Hidden>
                            </div>

                            <div>
                            <Hidden mdDown>
                                    Partners
                            </Hidden>
                            </div>

                            <div>
                            <Hidden mdDown>
                                    Car rental with driver
                            </Hidden>
                            </div>

                            <div>
                            <Hidden mdDown>
                                    Support
                            </Hidden>
                            </div>
                    </div>
                    <div className={classes.content} 
                         style={{ minWidth: "20%", 
                                justifyContent: "space-between"}}>         
                       
                      <Hidden mdDown>
                            <div className={classes.button2}>
                                    Sign up
                            </div>

                            <div className={classes.button1}>
                                    Login
                            </div>
                    </Hidden>

                  {
                    // Menu to display on the mobile device
                    mobileMenuToggle?
                    <Hidden mdUp>
                      <Grid item xs={12}>
                        <Paper className={classes.mobileMenu}>
                            <div>
                              <CancelIcon style={{color: "white", 
                                                  fontSize: "2rem",
                                                  float: "right",
                                                  marginTop: "-0.6em",
                                                  marginRight: "-3em" }}

                                            onClick={() => menuToggleFunction()}/>
                            </div>
                            <div className={classes.mobileMenuItem}>
                                    Hotels
                            </div>
                            
                            <div className={classes.mobileMenuItem}>
                                    Customers
                            </div>

                            <div className={classes.mobileMenuItem}>
                                    Partners
                            </div>

                            <div className={classes.mobileMenuItem}>
                                    Car rental with driver
                            </div>

                            <div className={classes.mobileMenuItem}>
                                    Support
                            </div>
                            <div className={classes.button2} style={{fontSize: "1.2rem", 
                                                                     marginBottom: "2em", 
                                                                     padding: "0.9rem 1.8rem",
                                                                     justifyContent: "center",
                                                                     display: "flex",
                                                                     background:`${colors.faintSecondaryColor}`}}>
                                    Sign up
                            </div>
                            <div className={classes.button1} style={{fontSize: "1.2rem", 
                                                                     padding: "0.9rem 1.8rem",
                                                                     justifyContent: "center",
                                                                     display: "flex"}}>
                                    Login
                            </div>
                        </Paper>
                      </Grid>
                    </Hidden>:
                    ""
                  }
                 
                    <Hidden mdUp>
                            <MenuIcon style={{ fontSize: '2em', 
                                               float: "right", 
                                               margin: "auto" }}
                                      onClick={() => menuToggleFunction()}/>
                    </Hidden> 
                  </div>
                    
                </div>
            </Container>
        </div>
      </React.Fragment>
    );
  }

export default HeaderContainer;
