import { createMuiTheme } from '@material-ui/core/styles';

export const PALETTE = {
    primary: "#1A1A1D",
    secondary: "#eee",
    darkRed: '#6F2232',
    textColor: '#950740',
    lightPink: '#C3073F'
}

export const MUI_PALETTE = {
    type: 'dark',
    primary: {
      main: "#65ccb8",
    },
    secondary: {
      main: "#182628",
    },
    error: {
      main: "#529163",
    },
    tonalOffset: 0.2,
    contrastThreshold: 3,
}

export const createCustomTheme = (theme) => {
    return createMuiTheme({
        typography: {
            useNextVariants: true,
            fontSize: 12,
            fontFamily: [
                'Nanum Gothic Coding', 
                'monospace', 
            ].join(',')
        },
        toolbar: {
            height: 25,
        },
        palette: MUI_PALETTE
    })
}