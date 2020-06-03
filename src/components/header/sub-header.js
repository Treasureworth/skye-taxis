import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {openMobileMenu} from "../../utils/actions/index";
import * as colors from '../../assets/color'
import SLIDDER_1 from '../../assets/images/slidder.svg'
import SLIDDER_2 from '../../assets/images/slidder_2.svg'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        height: '100%'
    }, 
    slidder: {
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'flex-end', 
      height: '100%'
    },
    searchWrapper: {
      minHeight: '4em',
      minWidth: '100%'
    }
  });

const  SubHeaderContainer = (props, store) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {mobileMenuToggle} = useSelector(state => state.mobileMenuToggle)

    const menuToggleFunction = () => {
      dispatch(openMobileMenu());
    }

    return (
      <React.Fragment>
        <Container maxWidth="lg">
            <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', minHeight: '45vh'}}>

            <Grid item xs={6}>
                <div className={classes.headerWrapper}>                   
                   <span className="headerText"> Transfers from airports and hotels in 
                        <span style={{color: colors.mainPrimaryColor}}>102 Countries </span> 
                    </span>
                    <Paper className={classes.searchWrapper}>
                        Search Widget comes here
                    </Paper>
                </div>
            </Grid>

            <Grid item xs={6}>
                <div className={classes.slidder}>
                  <SLIDDER_2/>
                </div>
            </Grid>

            </div>
        </Container>
      </React.Fragment>
    );
  }

export default SubHeaderContainer;
