import theme from 'theme';

export const trustedBy = {
  padding: '10em 0',
};

export const trustedByCompanyImages = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '2.5em -1em',
  '& > .trusted-by-image': {
    display: 'flex',
    textAlign: 'center',
    flex: '0 0 auto',
    width: '25%',
    padding: ' 5em',
    '& > img': {
      maxWidth: '100%',
      height: 'auto',
    },
  },
};

export const trustedByDescriptionWrap = {
  display: 'flex',
  flexWrap: 'wrap',
  '& > .trusted-by-description': {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    flex: '0 0 auto',
    width: '25%',
    maxWidth: '100%',
    '& > h5': {
      color: theme.primary,
    },
  },
};
