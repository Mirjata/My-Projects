import theme from 'theme';

export const historyWrap = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '9.438em 0',
};
export const historyLeftContainer = {
  flex: '0 0 auto',
  maxWidth: '50%',
  '&> p': {
    marginTop: '2.1em',
    marginBottom: '1.4em',
  },
};

export const historyImageWrap = {
  flex: '0 0 auto',
  maxWidth: '50%',
  '&> img': {
    maxWidth: '100%',
    height: 'auto',
  },
};

export const historyPointsWrap = {
  paddingLeft: '2em',
};

export const historyPoint = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '3em',
  marginBottom: '2em',
  '& > h4': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '0 0 auto',
    maxWidth: 'auto',
    width: '65px',
    height: '65px',

    color: theme.primary,
    backgroundColor: theme.secondary,
  },
};

export const historyTitle = {
  flex: '1 0 0%',
  maxWidth: 'auto',
};
