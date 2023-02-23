import theme from 'theme';

export const ItemWrap = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '6rem',
  margin: '7.5em 0',
};
export const ItemImageWrap = {
  flex: '1 0 0%',
  width: 'auto',
  backgroundColor: theme.backgroundLightBlue,
  textAlign: 'center',
  padding: '4.375em',
  '& > img': {
    width: '100%',
    maxHeight: 'auto',
  },
};
export const ItemDescriptionWrap = {
  flex: '1 0 0%',
  width: 'auto',
  '&> h4': {
    color: theme.primary,
    marginBottom: '0.3em',
  },
  '&> p': {
    marginBottom: '1.625em',
  },
};

export const ItemPrice = {
  color: theme.secondary,
  fontSize: '1.8rem',
  fontWeight: 'bold',
};

export const ButtonWrap = {
  display: 'flex',
  marginTop: '2.125em',
  '&> div': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.lightGrey,
    flex: '1 0 auto',
    maxWidth: '20%',
    marginRight: '1em',
    border: `1px solid ${theme.secondary} `,
  },
  '&> Button': {
    flex: '1 0 auto',
  },
};

export const AdditionalInfoWrap = {
  textAlign: 'center',
  gap: '4rem',
  marginBottom: '7.5em',
  '&> button': {
    margin: '0 0.5em 2em 0.5em',
    fontSize: '1rem',
    padding: '0',
    width: '17rem',
    height: '3.5rem',
    border: 'none',
    cursor: 'pointer',
  },
  '&> .btn-active': {
    backgroundColor: theme.primary,
    color: theme.white,
  },
  '&> .btn-non-active': {
    backgroundColor: theme.backgroundLightBlue,
    color: theme.primary,
    '&:hover': {
      backgroundColor: theme.primary,
      color: theme.white,
    },
  },
  '&> p': {
    maxWidth: '65rem',
    margin: 'auto',
  },
};

export const FooterWrap = {
  backgroundColor: theme.secondary,
};

export const Footer = {
  '&> ul': {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',

    '&> li': {
      flex: '1 0 0%',
      width: 'auto',
      textAlign: 'center',
      padding: '5.313em 0',
      color: theme.primary,
      '&> p': {
        color: theme.primary,
      },
    },
  },
};

export const FooterIcon = {
  display: 'inline-flex',
  backgroundColor: theme.primary,
  padding: '1em',
  maxWidth: '4rem',
  maxHeight: '4rem',
  marginBottom: '1em',
};

export const ShoppingIcon = {
  marginRight: '0.5rem',
};
