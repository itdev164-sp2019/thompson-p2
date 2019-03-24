import React from 'react';

export const text1w = `import React from 'react'
import {darken} from 'polished'
import mastheadImage from './images/styled-components.png'
import { Menu, Search} from 'styled-icons/feather'

const images = {
  mastheadImage
}

const icons = {
  Menu: <Menu/>,
  Search: <Search/>
}

const breakpoints = [576,768, 900]

const theme = {
  breakpoints: [...breakpoints],
  ${<span style={{color:"blue"}}>space: [0, 4, 8, 16, 32, 64, 128, 256, 512],</span>}
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '3px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid'
  ],
  colors: {
    primary: {
      light: 'hsl(208, 13%, 35%)',
      main: 'hsl(208, 13%, 25%)',
      dark: 'hsl(208, 13%, 15%)',
      contrastText: '#ffffff'
    },
    text: {
      primary: 'hsl(208, 13%, 15%)',
      secondary: 'hsl(208, 13%, 45%)',
      disabled: 'hsl(208, 13%, 75%)',
      hint: 'hsl(208, 13%, 75%)'
    }
  },
  media:{
    sizes: {
      desktop: breakpoints[2],
      tablet: breakpoints[1],
      phone: breakpoints[0]
    }
  },
  transitions: {
    short: 'all 0.3s ease-out',
    medium: 'all 0.6s ease-out',
    long: 'all 0.9s ease-out'
  }
}

const defaults = {
  button: {
    padding: \`\${theme.space[2] / 16}em \${(theme.space[3] + 4) / 16}em\`,
    border: theme.borders[3],
    textTransform: 'uppercase',
    letterSpacing: theme.letterSpacings.tracked
  },
  link: {
    textDecoration: 'none'
  },
  masthead: {
    height: '100%',
    width: '100%',
    background: theme.colors.primary.main,
    borderBottom: theme.borders[1],
    borderColor: darken(0.1, theme.colors.primary.main)
  },
  text: {
    lineHeight: theme.lineHeights.copy
  }
}

const variants = {
  button: {
    primary: {
      ...defaults.button,
      color: theme.colors.primary.main,
      borderColor: theme.colors.primary.main
    },
    contrast: {
      ...defaults.button,
      color: theme.colors.primary.contrastText,
      borderColor: theme.colors.primary.contrastText
    }
  },
  iconButton: {
    primary: {
      color: theme.colors.primary.main
    },
    contrast: {
      color: theme.colors.primary.contrastText
    }
  },
  link: {
    primary: {
      ...defaults.link,
      color: theme.colors.primary.main
    },
    contrast: {
      ...defaults.link,
      color: theme.colors.primary.contrastText
    }
  },
  linkButton: {
    primary: {
      color: theme.colors.primary.main
    },
    contrast: {
      color: theme.colors.primary.contrastText
    }
  },
  mastheadDrawer:{
    primary: {
      background: theme.colors.primary.main
    },
    contrast: {
      background: theme.colors.primary.contrastText
    }
  },
  text: {
    primary: {
      ...defaults.text,
      color: theme.colors.text.primary
    },
    contrast: {
      ...defaults.text,
      color: theme.colors.primary.contrastText
    }
  }
}

const Gray = { ...theme, defaults, variants, images, icons }
export { Gray }`