import theme from 'theme';

export const pageWrap = {
  backgroundImage: "url('assets/images/ErrorPage.jpg')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  textAlign: 'center',
};

export const contentWrap = {
  margin: 'auto',
  maxWidth: '38rem',
  padding: '15em 0',
  '&> h1': {
    fontSize: '15rem',
    color: theme.primary,
    textShadow: `8px 8px ${theme.secondary}`,
  },
  '&> h4': {
    color: theme.primary,
    marginBottom: '1em',
  },
  '&> p': {
    marginBottom: '1em',
  },
};
