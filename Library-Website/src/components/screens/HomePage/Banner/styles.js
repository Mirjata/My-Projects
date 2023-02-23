import theme from '/theme/';

export const col = {
  flex: '1 0 0%',
  width: '100%',
  maxWidth: '100%',
};

export const wrapper = {
  backgroundColor: theme.primary,
  paddingTop: '5.938em',
};

export const bannerWrap = {
  paddingBottom: '8em',
  display: 'flex',
  flexWrap: 'wrap',
  maxWidth: '100%',
  gap: '5.938em',
};

export const bannerLeftContainer = {
  ...col,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
};

export const bannerImageContainer = {
  ...col,
  '& > img': {
    width: '100%',
    height: 'auto',
  },
};

export const bannerDetails = {
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '3.063em',
  listStyle: 'none',
  '& > .item': {
    ...col,
    display: 'flex',
    '& > .item-dot': {
      width: '1rem',
      height: '1rem',
      borderRadius: '6.25rem',
      backgroundColor: theme.secondary,
      marginTop: '0.5em',
      marginRight: '0.4em',
    },
  },
};

export const itemTitle = {
  color: theme.white,
};

export const itemContent = {
  color: theme.lightBlue,
};

export const bannerHeadline = {
  margin: '1em 0',
  color: theme.white,
};

export const bannerDescription = {
  color: theme.lightBlue,
  paddingBottom: '3.063em',
};

export const bannerLine = {
  borderBottom: `solid 2px ${theme.secondary}`,
  width: '2em',
};

export const lineWrap = {
  display: 'flex',
  alignItems: 'center',
  gap: '1em',
  '& > p ': {
    color: theme.lightBlue,
    fontFamily: 'Cardo',
    fontStyle: 'italic',
  },
};

export const bannerButtonsWrap = {
  '& > a': {
    color: theme.white,
    margin: '0 2em',
    letterSpacing: '0.02rem',
    fontSize: '1.3rem',
    fontFamily: 'Cardo',
    fontWeight: ' 700',
  },
};
