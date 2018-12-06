import { createMuiTheme } from '@material-ui/core/styles';

export const PALETTE = {
    primary: "#1A1A1D",
    secondary: "#eee",
    darkRed: '#6F2232',
    textColor: '#950740',
    lightPink: '#C3073F'
}

export const MUI_PALETTE = {
    type: 'light',
    primary: {
      main: "#04A367",
    },
    secondary: {
      main: "#DB8201",
    },
    error: {
      main: "#B64201",
    },
    tonalOffset: 0.2,
    contrastThreshold: 3,
    textColor: PALETTE.primary,
    alternateTextColor: "#B64201",
}

export const createCustomTheme = () => {
    return createMuiTheme({
        typography: {
            useNextVariants: true,
            fontSize: 12,
            fontFamily: [
                'Nanum Gothic Coding', 
                'monospace', 
            ].join(',')
        },
        palette: MUI_PALETTE
    })
}