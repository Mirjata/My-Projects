import theme from 'theme';

export const wlSection = {
  padding: '9em 0',
};

export const wlRows = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '3.313em -1em 0 -1em',
  alignItems: 'center',
};

export const wlCols = {
  flex: '0 0 auto',
  width: '50%',
  padding: '0 1em',
};

export const wlImage = {
  width: '100%',
  height: 'auto',
};

export const wlItem = {
  background: theme.backgroundLightBlue,
  marginBottom: '2em',
  padding: '2.563em 2em',
  '& > h6': {
    textAlign: 'center',
    fontFamily: 'Cardo',
    fontWeight: '700',
    fontSize: '1.5rem',
    backgroundColor: theme.secondary,
    maxWidth: '50px',
    maxHeight: '50px',
    borderRadius: ' 50%',
    marginBottom: '1.938em',
    padding: '0.4em',
  },
  '& > h5': {
    color: theme.primary,
  },
};
