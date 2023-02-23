import theme from 'theme';

export const aboutAuthor = {
  backgroundColor: theme.backgroundLightBlue,
  padding: '10em 0',
};

export const authorContacts = {
  backgroundColor: theme.primary,
  marginRight: '10em',
  display: 'flex',
  flexWrap: 'wrap',
  padding: '1em ',
  '&> img': {
    maxWidth: '100%',
    height: 'auto',
  },
  '&> div': {
    marginLeft: '2em',
    lineHeight: '3em',
    '&> h5': {
      color: theme.secondary,
    },
    '&> p': {
      color: theme.lightBlue,
    },
  },
};

export const aboutAuthorWrap = {
  display: 'flex',
  flexWrap: 'wrap',
  '& > .aboutAuthorImage': {
    flex: '0 0 50%',
  },
  '& > img': {
    maxWidth: '100%',
    height: 'auto',
  },
};

export const aboutAuthorContent = {
  flex: '0 0 50%',
  padding: '2em 0',
  ' & > p': {
    marginTop: '1.375rem',
    marginBottom: '2.75rem',
  },
};

export const authorStatisticWrap = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.2em',
  marginBottom: '4rem',
  '& > .separation': {
    backgroundColor: theme.secondary,
    minWidth: '0.2em',
  },
};

export const authorStatisticPoints = {
  color: theme.primary,
};
