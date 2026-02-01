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
import {MicrochipIcon, SpotifyIcon, StackOverflowIcon, StravaIcon} from "./CustomIcons";
import LinkButton from "./LinkButton";
// import { YouTube, Twitter } from '@material-ui/icons';
// import { MediumIcon } from "./CustomIcons";

const useStyles = makeStyles(theme => ({
    icon_button: {
        color: theme.palette.text.primary,
    },
    main: {
        marginTop: "5vh",
        height: "50vh",
    },
    me: {
        width: "350px",
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
    card_content: {
        paddingBottom: "4px",
    },
    link_row: {
        display: 'flex',
        justifyContent: 'center'
    },
}));

const Layout = () => {
    const classes = useStyles();
    return (
        <Container>
            <Grid
                container
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                className={classes.main}
            >
                <Grid item>
                    <Card className={classes.me}>
                        <CardMedia
                            className={classes.media}
                            image={Me}
                            title="Me"
                        />
                        <CardContent className={classes.card_content}>
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
                            {/*<Typography className={classes.plat}>*/}
                            {/*    My Stuff:*/}
                            {/*</Typography>*/}
                        </CardContent>
                        <CardActions className={classes.link_row}>
                            <LinkButton href={"https://blog.bengillett.com"}
                                        icon={<MicrochipIcon/>}
                                        tooltipText={"My Blog"}
                                        className={classes.icon_button}/>
                            <LinkButton href={"https://www.linkedin.com/in/ben-gillett"}
                                        icon={<LinkedInIcon/>}
                                        tooltipText={"LinkedIn"}
                                        newTab
                                        className={classes.icon_button}/>
                            <LinkButton href={"https://www.github.com/M3tanym"}
                                        icon={<GitHubIcon/>}
                                        tooltipText={"GitHub"}
                                        newTab
                                        className={classes.icon_button}/>
                            <LinkButton href={"https://stackoverflow.com/users/13765237/ben-gillett"}
                                        icon={<StackOverflowIcon/>}
                                        tooltipText={"StackOverflow"}
                                        newTab
                                        className={classes.icon_button}/>
                        </CardActions>
                        <CardActions className={classes.link_row}>
                            <LinkButton href={"https://www.instagram.com/benjamin_gillett"}
                                        icon={<InstagramIcon/>}
                                        tooltipText={"Instagram"}
                                        newTab
                                        className={classes.icon_button}/>
                            <LinkButton href={"https://www.strava.com/athletes/42381976"}
                                        icon={<StravaIcon/>}
                                        tooltipText={"Strava"}
                                        newTab
                                        className={classes.icon_button}/>
                            <LinkButton href={"https://open.spotify.com/user/thesilentwatcher7"}
                                        icon={<SpotifyIcon/>}
                                        tooltipText={"Spotify"}
                                        newTab
                                        className={classes.icon_button}/>
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
