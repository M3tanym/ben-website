import React, {useMemo} from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import {SnackbarProvider, useSnackbar} from 'notistack';
import Layout from "./Layout";
import {grey} from "@material-ui/core/colors";

const LoadApp = props => {
    const {enqueueSnackbar} = useSnackbar();
    const produceSnackBar = (message, variant = "error") => enqueueSnackbar(message, {variant: variant});
    return <Layout produceSnackBar={produceSnackBar} {...props}/>;
};

const themeLight = createTheme({
    palette: {
        mode: 'light',
        type: 'light',
        background: {
            default: "#ffffff",
        },
        text: {
            primary: "#242424",
        },
        primary: {
            main: grey[100],
        },
    }
});

const themeDark = createTheme({
    palette: {
        mode: 'dark',
        type: 'dark',
        background: {
            default: "#121212",
        },
        text: {
            primary: "rgba(255, 255, 255, 0.87)",
        },
        primary: {
            main: grey[300],
        }
    }
});

const App = () => {
    const darkMode = !useMediaQuery('(prefers-color-scheme: light)');
    const theme = useMemo(
        () => darkMode ? themeDark : themeLight,
        [darkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            {/*Mobile accent color (like Safari top bar)*/}
            <meta name="theme-color" content={'background.default'}/>
            <CssBaseline/>
            <SnackbarProvider maxSnack={3} preventDuplicate>
                <LoadApp darkMode={darkMode}/>
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default App;
