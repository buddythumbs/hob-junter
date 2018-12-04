import { createMuiTheme } from '@material-ui/core/styles';

export const PALETTE = {
    primary: "#1A1A1D",
    secondary: "#4E4E50",
    darkRed: '#6F2232',
    textColor: '#950740',
    lightPink: '#C3073F'
}

export const MUI_PALETTE = {
    primary: {
      main: PALETTE.lightPink,
    },
    secondary: {
      main: PALETTE.textColor,
    },
    error: {
      main: PALETTE.lightPink,
    },
    text : { 
        primary: "rgba(255, 255, 255, 0.87)",
        secondary: "rgba(255, 255, 255, 0.54)",
        disabled: "rgba(255, 255, 255, 0.38)",
        hint: "rgba(255, 255, 255, 0.38)",
     },
    divider: '#fff',
}

export const createCustomTheme = (theme) => {
    return createMuiTheme({
        type: theme.paletteType,
        typography: {
            useNextVariants: true,
            fontSize: 12,
            fontFamily: [
                'Nanum Gothic Coding', 
                'monospace', 
            ].join(',')
        },
        background: {
            default: theme.paletteType === 'dark' ? PALETTE.primary : '#fafafa',
            paper: theme.paletteType === 'dark' ? PALETTE.secondary : '#fff',
        },
        text : { 
            primary: "rgba(255, 255, 255, 0.87)",
            secondary: "rgba(255, 255, 255, 0.54)",
            disabled: "rgba(255, 255, 255, 0.38)",
            hint: "rgba(255, 255, 255, 0.38)",
        },
        palette: MUI_PALETTE,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    })
}