import { createMuiTheme } from '@material-ui/core/styles';

export const PALETTE = {
    primary: "#1A1A1D",
    secondary: "#4E4E50",
    darkRed: '#6F2232',
    textColor: '#950740',
    lightPink: '#C3073F'
}

export const MUI_PALETTE = {
    type: 'dark',
    primary: {
      main: PALETTE.primary,
    },
    secondary: {
      main: PALETTE.textColor,
    },
    error: {
      main: PALETTE.lightPink,
    }
}

export const createCustomTheme = () => {
    return createMuiTheme({
        typography: {
            useNextVariants: true,
        },
        palette: MUI_PALETTE,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    })
}