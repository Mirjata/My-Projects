import theme from 'theme';

export const tm = {
  padding: '10em 0',
};

export const tmWrap = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  margin: '0 -1em',
  gap: '2em',
};

export const tmColLeft = {
  flex: '0 0 auto',
  padding: '0 1em',
  '&> p': {
    maxWidth: '25em',
  },
};

export const tmTitle = {
  maxWidth: '25em',
  marginBottom: '2em',
};

export const tmColRight = {
  display: 'flex',
  alignItems: 'center',
  margin: '0 -1em',
  flex: '1 0 0%',
};

export const tmColRightWrap = {
  flex: '0 0 50%',
  padding: '0 1em',
};

export const tmItem = {
  backgroundColor: theme.primary,
  width: '100%',
  marginBottom: '2em',
  padding: '2em',
  '&> .review-name': {
    color: theme.white,
  },
  '&> .review': {
    color: theme.white,
  },
  '&> .review-text': {
    color: theme.lightBlue,
  },
};

export const tmRating = {
  display: 'flex',
  gap: '0.3em',
  alignItems: 'center',
  marginBottom: '0.5em',
  '.tm-rating-point': {
    width: '13px',
    height: '13px',
    backgroundColor: theme.secondary,
    borderRadius: '50%',
  },
  h5: {
    color: theme.primary,
  },
};
