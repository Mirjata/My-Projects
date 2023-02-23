import theme from 'theme';

export const dropdownMenu = {
  width: '600px',
  position: 'absolute',
  top: ' 90px',
  listStyle: ' none',
  textAlign: 'start',
  backgroundColor: theme.white,
  borderRadius: '10px',
  '&> li': {
    cursor: 'pointer',
  },
};

export const dropdownMenuClicked = {
  display: 'none',
};

export const dropdownLink = {
  display: 'block',
  height: ' 100%',
  width: '100%',
  textDecoration: 'none',
  padding: ' 16px',
  color: theme.primary,
};
