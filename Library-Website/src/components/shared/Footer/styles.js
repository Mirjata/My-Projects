import theme from 'theme';

export const footer = {
  backgroundColor: theme.primary,
};

export const footerWrap = {
  display: 'flex',
  flexWrap: 'wrap',
  padding: '5em 0',
};

export const footerIcons = {
  flex: '1 0 0%',
  width: 'auto',
  color: theme.white,
  '& > img': {
    cursor: 'pointer',
  },
};

export const footerLogos = {
  display: 'flex',
  gap: '1em',
  marginTop: '1em',
  '&> .logo': {
    border: `1px solid ${theme.secondary}`,
    padding: '0.8em 1em',
    cursor: ' pointer',
  },
  '& > .logo:hover': {
    backgroundColor: theme.secondary,
  },
};

export const footerRightCol = {
  flex: '1 0 0 %',
  width: 'auto',
  display: 'flex',
  flexWrap: 'wrap',
};

export const footerExplore = {
  flex: '1 0 0%',
  width: '100%',
  maxWidth: '100%',
  paddingLeft: '2em',
  '& > h5': {
    color: theme.white,
  },
};

export const footerUtility = {
  ...footerExplore,
};

export const footerContacts = {
  ...footerExplore,
};

export const footerTextCursor = {
  color: theme.lightBlue,
  cursor: 'pointer',
  '&:hover': {
    color: theme.secondary,
  },
};

export const footerLinksWrap = {
  display: 'flex',
  alignItems: ' center',
  gap: '1em',
  margin: '1em 0',
};

export const footerContactsTitles = {
  color: theme.white,
};

export const footerContactWrap = {
  padding: '1em 0',
  display: 'flex',
  gap: '1em',
  alignItems: 'flex-start',
};

export const footerUnderline = {
  borderTop: `1px solid ${theme.lightBlue}`,
};

export const footerCopyright = {
  padding: '2em 0',
  color: theme.white,
  textAlign: 'center',
  '& > span': {
    color: theme.lightBlue,
  },
};
