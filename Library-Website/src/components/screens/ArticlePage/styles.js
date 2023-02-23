import theme from 'theme';

export const ArticleWrap = {
  margin: '9.375em 0',
  '&> img': {
    height: 'auto',
    maxWidth: '100%',
    marginBottom: '1em',
  },
  '&> h6': {
    color: theme.primary,
    marginBottom: '1.625em',
  },
};

export const ThePerfectBook = {
  marginTop: '2.75em',
  '&>h4': {
    marginBottom: '0.688em',
    color: theme.primary,
  },
  '&> p': {
    marginBottom: '1.375em',
  },
  '&> ul': {
    listStyleType: 'none',
    lineHeight: '1.875rem',
    '&> li': {
      display: 'flex',
      alignItems: 'center',
      color: theme.primary,
    },
  },
};

export const ListDecoration = {
  backgroundColor: theme.secondary,
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  margin: '0 1.313em 0 2.75em',
};

export const MiddleBanner = {
  position: 'relative',
  textAlign: 'center',
  padding: '3.313em 5.25em',
  backgroundColor: theme.primary,
  margin: '2.75em 0',
  '&> img': {
    position: 'absolute',
    top: 0,
    left: 20,
  },
};

export const ThePerfectBookSecond = {
  marginTop: '2.75em',
  '&>h4': {
    marginBottom: '0.688em',
    color: theme.primary,
  },
  '&> p': {
    marginBottom: '1.375em',
  },
  '&> ol': {
    lineHeight: '1.875rem',
    '&> li': {
      marginLeft: '2.75em',
      color: theme.primary,
    },
  },
};
