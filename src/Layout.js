import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Me from "./images/me.jpg";

import { Container, Grid, Typography } from "@material-ui/core";
import { Instagram, LinkedIn, GitHub, Twitter } from '@material-ui/icons';
// import { YouTube } from '@material-ui/icons';
import { SpotifyIcon, MediumIcon, StackOverflowIcon, StravaIcon } from "./CustomIcons";
import LinkButton from "./LinkButton";

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
		// fontFamily: "Lucida Handwriting, cursive, sans-serif",
		fontFamily: "Square Peg, cursive",
		fontSize: "2.1rem",
		lineHeight: "0.85em"
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
		fontSize: "1.2rem",
	},
	plat: {
		fontFamily: "monospace"
	},
	link_row: {
		display:'flex',
		justifyContent:'center'
	}
});

const Layout = (props) =>
{
	const classes = useStyles();
	const dm = props.darkMode;
	const bg = dm ? "#303030" : "#fafafa";
	const img = Me;

	return (
		<Container>
			{/*Mobile accent color (like Safari top bar)*/}
			<meta name="theme-color" content={bg} />
			<Grid
				container
				direction={"column"}
				// justifyContent={"center"}
				alignContent={"center"}
				alignItems={"center"}
				spacing={2}
				className={classes.main}
				>

				<Grid item>
					<Card className={classes.me}>
						<CardMedia
							className={classes.media}
							image={img}
							title="Image"
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
						<CardActions className={classes.link_row}>
							<LinkButton href={"https://www.linkedin.com/in/ben-gillett"} icon={<LinkedIn />}/>
							<LinkButton href={"https://www.github.com/M3tanym"} icon={<GitHub />}/>
							{/*<LinkButton href={"https://medium.com/@ben-gillett"} icon={<MediumIcon />}/>*/}
							{/*Need to find Medium replacement*/}
							<LinkButton href={"https://stackoverflow.com/users/13765237/ben-gillett"} icon={<StackOverflowIcon />}/>
						</CardActions>
						<CardActions className={classes.link_row}>
							<LinkButton href={"https://www.instagram.com/benjamin_gillett"} icon={<Instagram />}/>
							{/*<LinkButton href={"https://twitter.com/BnjmnGillett"} icon={<Twitter />}/>*/}
							{/*Elon ruined Twitter so not linking that anymore*/}
							{/*<LinkButton href={"https://www.youtube.com/channel/UCDDCEvRr9bflGGlXrbyKkHQ"} icon={<YouTube />}/>*/}
							{/*YouTube account not mature enough for sharing yet*/}
							<LinkButton href={"https://www.strava.com/athletes/42381976"} icon={<StravaIcon />}/>
							<LinkButton href={"https://open.spotify.com/user/thesilentwatcher7"} icon={<SpotifyIcon />}/>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</Container>
	)
};

export default Layout;
