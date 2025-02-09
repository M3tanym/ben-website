import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Me from "./images/me.jpg";
import {Container, Grid, Typography} from "@material-ui/core";
import {Instagram as InstagramIcon} from '@material-ui/icons';
import {LinkedIn as LinkedInIcon} from '@material-ui/icons';
import {GitHub as GitHubIcon} from '@material-ui/icons';
import {MenuBook as BlogIcon} from '@material-ui/icons';
import {SpotifyIcon, StackOverflowIcon, StravaIcon} from "./CustomIcons";
import LinkButton from "./LinkButton";
// import { YouTube, Twitter } from '@material-ui/icons';
// import { MediumIcon } from "./CustomIcons";

const useStyles = makeStyles({
    main: {
        height: "90vh"
    },
    me: {
        width: "350px",
        marginTop: "7vh"
    },
    media: {
        height: "250px"
    },
    intro: {
        fontFamily: "Square Peg, cursive",
        fontSize: "2.1rem",
        lineHeight: "0.85em"
    },
    title: {
        fontSize: "3rem",
        fontFamily: "Menlo, monospace",
        fontWeight: "bold",
        lineHeight: "0.9em"
    },
    info: {
        marginBottom: "20px",
        fontFamily: "Menlo, monospace",
        fontSize: "1.2rem",
    },
    plat: {
        fontFamily: "Menlo, monospace"
    },
    link_row: {
        display: 'flex',
        justifyContent: 'center'
    }
});

const Layout = (props) => {
    const classes = useStyles();
    return (
        <Container>
            <Grid
                container
                direction={"column"}
                alignContent={"center"}
                alignItems={"center"}
                spacing={2}
                className={classes.main}
            >

                <Grid item>
                    <Card className={classes.me}>
                        <CardMedia
                            className={classes.media}
                            image={Me}
                            title="Me"
                        />
                        <CardContent>
                            <Typography className={classes.intro}>
                                Hello, I'm
                            </Typography>
                            <Typography className={classes.title}>
                                Ben Gillett
                            </Typography>
                            <Typography className={classes.info}>
                                Software Engineer
                            </Typography>
                            <hr/>
                            <Typography className={classes.plat}>
                                You can find me on these platforms:
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.link_row}>
                            <LinkButton href={"https://www.linkedin.com/in/ben-gillett"}
                                        icon={<LinkedInIcon/>}
                                        tooltipText={"LinkedIn"}/>
                            <LinkButton href={"https://www.github.com/M3tanym"}
                                        icon={<GitHubIcon/>}
                                        tooltipText={"GitHub"}/>
                            <LinkButton href={"https://stackoverflow.com/users/13765237/ben-gillett"}
                                        icon={<StackOverflowIcon/>}
                                        tooltipText={"StackOverflow"}/>
                            <LinkButton href={"https://blog.bengillett.com"}
                                        icon={<BlogIcon/>}
                                        tooltipText={"Blog"}/>
                        </CardActions>
                        <CardActions className={classes.link_row}>
                            <LinkButton href={"https://www.instagram.com/benjamin_gillett"}
                                        icon={<InstagramIcon/>}
                                        tooltipText={"Instagram"}/>
                            <LinkButton href={"https://www.strava.com/athletes/42381976"}
                                        icon={<StravaIcon/>}
                                        tooltipText={"Strava"}/>
                            <LinkButton href={"https://open.spotify.com/user/thesilentwatcher7"}
                                        icon={<SpotifyIcon/>}
                                        tooltipText={"Spotify"}/>
                        </CardActions>
                        {/*<LinkButton href={"https://twitter.com/BnjmnGillett"} icon={<Twitter />}/>*/}
                        {/*Elon ruined Twitter so not linking that anymore*/}
                        {/*<LinkButton href={"https://www.youtube.com/channel/UCDDCEvRr9bflGGlXrbyKkHQ"} icon={<YouTube />}/>*/}
                        {/*YouTube account not mature enough for sharing yet*/}
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Layout;
