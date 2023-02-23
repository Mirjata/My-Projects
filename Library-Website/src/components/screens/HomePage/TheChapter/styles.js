import theme from 'theme';

export const theChapter = {
  padding: '10em 0',
  backgroundColor: theme.backgroundLightBlue,
};

export const chapterRow = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '3.125em -1em 4.938em -1em',
};

export const chapterCol = {
  flex: '0 0 auto',
  width: '50%',
  padding: '0 1.25em',
};

export const chapterItem = {
  backgroundColor: theme.white,
  textAlign: 'start',
  boxShadow: '0px 35px 25px rgba(4, 11, 20, 0.07)',
  padding: '3em 3.2em',
  marginBottom: '2.5em',
  '&> h5': {
    color: theme.primary,
    marginBottom: '0.875em',
  },
  '&> p': {
    marginBottom: '1.563em',
  },
};

export const chapterDetails = {
  display: 'flex',
  gap: '3.5rem',
  listStyle: ' none',
};

export const chapterDetailItem = {
  display: 'flex',
  gap: '0.5em',
  alignItems: 'center',
  '&> .chapter-detail-point': {
    width: '1em',
    height: '1em',
    borderRadius: '6.25rem',
    backgroundColor: theme.secondary,
    marginBottom: '0.2em',
  },
};

export const chapterDetailsWrap = {
  display: 'flex',
  gap: '0.3em',
  '&> h5': {
    color: theme.primary,
  },
  '&> p': {
    marginTop: '0.13em',
  },
};

export const chapterAnchor = {
  color: theme.primary,
  '&:hover': {
    color: theme.secondary,
  },
};

export const chapterButton = {
  textAlign: 'center',
  '&> p': {
    marginTop: '2em',
  },
};
