import theme from 'theme';

export const freeChapterCardWrap = {
  textAlign: 'center',
  padding: '5em 10em',
  '& > p': {
    color: theme.primary,
    padding: ' 2em 2em',
  },
  '& > form': {
    display: 'flex',
    gap: '1em',
    justifyContent: 'center',
    maxWidth: '100%',
    maxHeight: 'auto',
    '& > input': {
      border: 'none',
      flex: '1 0 0%',
      width: 'auto',
    },
  },
};
