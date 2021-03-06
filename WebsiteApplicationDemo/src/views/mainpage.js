import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import Header from "../components/Header/Header";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import MySidebar from "mycomponents/MySidebar.js";
import Input from "./inputs.js"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import image from "assets/img/landing-bg.jpg"
const cateogryRoutes = [

];



class mainPage extends React.Component {
   
    render() {
        const { classes, ...rest } = this.props;
        return (
        <div className={classes.wrapper}>
            <div className = {classes.background}>  
                {/* <Parallax filter image={require("../assets/img/landing-bg.jpg")} > */}
                <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
                >
                    <Header
                        color="transparent"
                        routes={cateogryRoutes}
                        brand="University Of Southern California - Viterbi"
                        fixed
                        changeColorOnScroll={{
                            height: 100,
                            color: "while"
                        }}
                        {...rest}
                    />
                    <div className={classes.container}>
                        <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Paper Search Engine</h1>
                            <h4>
                            Paper Search Engine allow users to search articles from firebase and present article metadata in the 
                            web page. User could add limitations, like contrain authors, category or published year. You can also
                            download or view the detail of this article in this webpage.
                            </h4>
                            <br />
                            <Button
                            color="danger"
                            size="lg"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <i className="fas fa-play" />get start
                            </Button>
                        </GridItem>
                        </GridContainer>
                    </div>
                    
                </div> 
                <div className={classes.container}>
                     <Input/>
                     <GridContainer justify="center" id='cardDetails'>
                     </GridContainer>
                </div>
                
            </div>
            
            
            <MySidebar/>
            <br/><br/><br/><br/><br/><br/>
            <div className={classes.mainPanel} ref="mainPanel">
                <div className={classes.content}>
                    <div className={classes.container}>

                    </div>
                </div>
            </div>
            
        </div>
        );
    }
}
export default withStyles(landingPageStyle)(mainPage);