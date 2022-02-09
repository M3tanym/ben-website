import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PlanePic from "./plane.jpg";

import { Container, Grid, Typography } from "@material-ui/core";
import { Instagram, LinkedIn, GitHub, Twitter, YouTube } from '@material-ui/icons';
import { SpotifyIcon, MediumIcon, StackOverflowIcon, StravaIcon } from "./CustomIcons";
import LinkButton from "./LinkButton";

const useStyles = makeStyles({
	me: {
		width: "350px"
	},
	media: {
		height: "250px"
	},
	intro: {
		fontSize: "1.1rem",
		fontFamily: "Lucida Handwriting, cursive, sans-serif",
		color: "grey"
	},
	title: {
		fontSize: "3rem",
		fontFamily: "monospace",
		fontWeight: "bold",
		lineHeight: "0.8em"
	},
	info: {
		marginBottom: "20px",
		fontFamily: "monospace",
		color: "grey"
	},
	plat: {
		fontFamily: "monospace"
	}
});

const Layout = (props) =>
{
	const classes = useStyles();
	return (
		<Container>
			<Grid
				container
				direction={"column"}
				justifyContent={"center"}
				alignContent={"center"}
				alignItems={"center"}
				spacing={2}
				style={{height: "100vh"}}
				>
				<Grid item>
					<Card className={classes.me}>
						<CardMedia
							className={classes.media}
							image={PlanePic}
							title="Plane"
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
							<hr />
							<Typography className={classes.plat}>
								You can find me on these platforms:
							</Typography>
						</CardContent>
						<CardActions>
							<LinkButton href={"https://www.linkedin.com/in/ben-gillett"} icon={<LinkedIn />}/>
							<LinkButton href={"https://medium.com/@ben-gillett"} icon={<MediumIcon />}/>
							<LinkButton href={"https://www.github.com/M3tanym"} icon={<GitHub />}/>
							<LinkButton href={"https://stackoverflow.com/users/13765237/ben-gillett"} icon={<StackOverflowIcon />}/>
						</CardActions>		
						<CardActions>
							<LinkButton href={"https://www.instagram.com/benjamin_gillett"} icon={<Instagram />}/>
							<LinkButton href={"https://twitter.com/BnjmnGillett"} icon={<Twitter />}/>
							<LinkButton href={"https://www.youtube.com/channel/UCDDCEvRr9bflGGlXrbyKkHQ"} icon={<YouTube />}/>
							<LinkButton href={"https://open.spotify.com/user/thesilentwatcher7"} icon={<SpotifyIcon />}/>
							<LinkButton href={"https://www.strava.com/athletes/42381976"} icon={<StravaIcon />}/>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</Container>
	)
};

export default Layout;
