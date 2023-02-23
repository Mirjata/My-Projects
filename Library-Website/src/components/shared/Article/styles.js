import theme from 'theme';

export const article = {
  backgroundColor: theme.white,
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  boxShadow: '0px 35px 25px rgba(4, 11, 20, 0.04)',
};

export const articleImage = {
  flex: '0 0 50%',
  '& > img': {
    width: '100%',
    height: 'auto',
  },
};

export const articleTextWrap = {
  margin: '1.688em 2em',
  flex: '0 0 50%',
  '& > h5': {
    marginBottom: '0.875em',
    color: theme.primary,
  },
  '& > ': {},
};

export const articleDate = {
  display: 'flex',
  justifyContent: 'space-between',

  paddingTop: '1em',
  '& > p, a': {
    color: theme.primary,
    fontFamily: 'Cardo',
    lineHeight: '1.5rem',
  },
};
