import theme from 'theme';

export const aboutAuthorSection = {
  padding: '9.438em 0',
  backgroundColor: '#F6F8FC',
};

export const authorImageWrap = {
  textAlign: 'center',
  paddingBottom: '5em',
  '&> img': {
    boxShadow: '0px 35px 45px rgba(4, 11, 20, 0.15)',
    maxWidth: '100%',
    height: 'auto',
  },
};
export const aboutAuthor = {
  display: 'flex',
  flexWrap: 'wrap',
};
export const aboutAuthorLeft = {
  flex: '0 0 auto',
  maxWidth: 'auto',
  padding: '2.813em 4.125em ',
  display: 'flex',
  flexWrap: 'wrap',
};
export const aboutAuthorRight = {
  flex: '1 0 0%',
  width: '100%',
  maxWidth: '100%',
  paddingLeft: '6.75em',
  '& > p': {
    maxWidth: '40rem',
    margin: '1.688em 0 2.125em 0',
  },
};
export const aboutAuthorTitles = {
  margin: '2em 2em',
  lineHeight: '2.5em',
  '&> h5': {
    color: theme.primary,
  },
};
export const aboutAuthorDetails = {
  margin: '2em 0',
  lineHeight: '3em',
  '&> p': {
    lineHeight: '2.1em',
  },
};

export const aboutAuthorSocialIcons = {
  display: 'flex',
};

export const aboutAuthorIcon = {
  color: theme.primary,
  marginRight: '1em',
};
