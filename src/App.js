import React, {useMemo} from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import {SnackbarProvider, useSnackbar} from 'notistack';
import Layout from "./Layout";

const LoadApp = props => {
    const {enqueueSnackbar} = useSnackbar();
    const produceSnackBar = (message, variant = "error") => enqueueSnackbar(message, {variant: variant});
    return <Layout produceSnackBar={produceSnackBar} {...props}/>;
};

const App = () => {
    const darkMode = !useMediaQuery('(prefers-color-scheme: light)');
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    type: darkMode ? 'dark' : 'light',
                },
            }),
        [darkMode],
    );
    const metaTheme = darkMode ? "#303030" : "#fafafa";

    return (
        <ThemeProvider theme={theme}>
            {/*Mobile accent color (like Safari top bar)*/}
            <meta name="theme-color" content={metaTheme}/>
            <CssBaseline/>
            <SnackbarProvider maxSnack={3} preventDuplicate>
                <LoadApp darkMode={darkMode}/>
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default App;
