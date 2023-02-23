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
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '1em',
    textAlign: 'center',
    flex: '0 0 auto',
    width: '25%',
    padding: '4em',
    '& > .trusted-by-description': {
      '& > h5': {
        color: theme.primary,
        marginBottom: '0.5em',
      },
    },
    '& > img': {
      maxWidth: '100%',
      height: 'auto',
    },
  },
};
