import theme from 'theme';

export const navBarSection = {
  backgroundColor: theme.primary,
};

export const navBarWrap = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1.5rem 0',
  '& > .logo-wrap': {
    display: 'flex',
    alignItems: 'center',
    '& > img': {
      marginRight: '2.5em',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
};

export const navBarIconWrap = {
  display: 'flex',
  gap: '1em',
};

export const navBarIcon = {
  backgroundColor: theme.white,
  color: theme.primary,
  cursor: 'pointer',
  padding: '0.5em 0.5em 0.3em 0.5em',
  '&:hover': {
    backgroundColor: theme.secondary,
  },
};

export const linksWrap = {
  display: ' flex',
  flexWrap: ' wrap',
  gap: '2rem',
  listStyle: 'none',
  alignItems: 'center',
  '&>:hover': {
    color: theme.secondary,
  },
};

export const navLink = {
  fontFamily: 'Inter',
  fontWeight: '500',
  fontSize: '1rem',
  textDecoration: 'none',
  padding: '1.5em 0',
  color: theme.white,
  cursor: 'pointer',
  '&:hover': {
    color: theme.secondary,
  },
};

export const navBarShoppingIcon = {
  color: theme.white,
  width: '1.1rem',
  height: '1.1rem',

  margin: '0 2em',
  '&:hover': {
    color: theme.secondary,
  },
};

export const itemCount = {
  position: 'absolute',
  backgroundColor: theme.secondary,
  color: theme.black,
  fontSize: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '1rem',
  width: '1.2rem',
  borderRadius: '50%',
  right: '-20px',
  top: '-5px',
};

export const cartButton = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'white',
  position: 'relative',
  cursor: 'pointer',
  height: '1rem',
  width: '1rem',
  padding: '0',
  '&:hover': {
    color: theme.secondary,
  },
};
