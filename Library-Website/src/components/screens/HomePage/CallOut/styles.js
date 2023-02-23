import theme from 'theme';

export const callOut = {
  backgroundColor: theme.primary,
};

export const callOutWrap = {
  display: 'flex',
  flexWrap: 'wrap',
  padding: '2.313rem 0',
  '& > .call-out-content': {
    flex: '0 0 50%',
    padding: '5.125rem 0',
    '& > .call-out-title ': {
      marginBottom: '1.375rem',
    },
    '& > .call-out-description': {
      marginBottom: '1.938rem',
      color: theme.lightBlue,
    },
  },
};

export const callOutImage = {
  flex: '0 0 50%',
  '& > img': {
    maxWidth: '100%',
    height: 'auto',
  },
};

export const navLink = {
  textDecoration: 'none',
};
