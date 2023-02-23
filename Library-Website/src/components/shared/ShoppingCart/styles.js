import theme from 'theme';

export const shoppingCart = {
  background: 'rgba(0, 0, 0, .8)',
};

export const shoppingCartWrap = {
  maxWidth: '800px',
  maxHeight: '700px',
  margin: 'auto ',
  backgroundColor: theme.white,
};

export const Header = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2.188em 4.75em',
  color: theme.primary,
  backgroundColor: theme.secondary,
};

export const closeIcon = {
  width: '1.5rem',
  height: '1.5rem',
};

export const itemWrap = {
  display: 'flex',
  alignItems: 'center',
  padding: '3.875em 4.813em',
  borderBottom: '2px solid #E8E8E8',
};

export const itemDetailsWrap = {
  paddingLeft: '2.375em',
  flex: '1 0 0%',
  width: '100%',
  maxWidth: '100%',
  '&> h6': {
    color: theme.primary,
    marginBottom: '.2em',
  },
  '&> p': {
    marginBottom: '3em',
  },
};

export const itemQtyWrap = {
  padding: '0.3em 2.313em 0.3em 1em',
  fontSize: '1.4rem',
  border: '1px solid #E8E8E8',
  marginLeft: '10em',
  flex: '0 0 auto',
  maxWidth: '100%',
  marginBottom: 'auto',
  backgroundColor: '#F9F9F9',
  color: theme.lightGrey,
};

export const imgWrap = {
  flex: '1 0 0% ',
  width: '100%',
  maxWidth: '100%',
  '&> img': {
    width: '100%',
    height: ' auto',
  },
};

export const subTotal = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: theme.primary,
  padding: '4em 5em 0 5em',
};

export const checkOutButton = {
  padding: '3em 5em',
};
