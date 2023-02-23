import theme from 'theme';

export const ProductsWrap = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  margin: '9.375em -2em',
  '& > .authorBook': {
    flex: '0 0 auto',
    width: '33.33%',
    maxWidth: '33.33%',
    padding: '0 2em',
    marginBottom: '4.375em',
    '&> img': {
      width: '100%',
      height: 'auto',
    },
  },
};

export const authorBook = {
  '&> img': {
    width: '100%',
    height: '100%',
  },
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

export const freeChapterCard = {
  backgroundColor: theme.secondary,
  padding: '2em 4em',
  margin: '9em 0',
};
