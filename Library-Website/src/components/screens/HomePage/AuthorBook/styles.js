import theme from 'theme';

export const wrapper = {
  padding: '10em 0',
};

export const authorTitleWrap = {
  marginBottom: '8em',
};

export const authorBooksWrap = {
  display: 'flex',
  flexWrap: 'wrap',
  '& > .authorBook': {
    flex: '1 0 0%',
    width: '100%',
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
  },
};

export const authorBookImage = {
  boxShadow: '0px 35px 25px rgba(4, 11, 20, 0.07)',
  '& > img': {
    height: '100%',
    width: 'auto',
  },
};

export const authorBook = {
  paddingLeft: ' 2em',
  '& > h4 ': {
    color: theme.primary,
    marginBottom: ' 0.875rem',
  },
  '& > p': {
    marginBottom: '1.875rem',
  },
  '& > ul': {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    marginBottom: '1.875rem',
    ' & > li': {
      display: 'flex',
      gap: '0.5em',
      '& > .detailYellowPoint': {
        width: '1rem',
        height: '1rem',
        borderRadius: '6.25rem',
        backgroundColor: theme.secondary,
        marginTop: '0.4em',
        marginRight: '0.4em',
      },
      '& > .detailContainer': {
        color: theme.primary,
      },
    },
  },
};
