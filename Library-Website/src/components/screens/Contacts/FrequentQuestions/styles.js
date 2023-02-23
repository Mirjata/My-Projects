import theme from 'theme';

export const QuestionsWrap = {
  backgroundColor: theme.backgroundLightBlue,
  padding: '9.125em 0',
};

export const QuestionsList = {
  margin: '2em -3em',
};

export const QuestionWrap = {
  maxWidth: '54.375rem',
  margin: 'auto',
  borderBottom: `1px solid ${theme.primary}`,
  lineHeight: '5rem',
  color: theme.primary,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  '& > span': {
    '& > .rotate': { transition: 'all .5s linear' },
    '&> .rotate-down': {
      transform: 'rotate(180deg)',
      transition: 'all .5s linear',
    },
  },
  '&> .visible': {
    height: '100px',
    overflow: 'hidden',
    transition: 'all .5s linear',
  },
  '&> .hidden': {
    height: '0',
    overflow: 'hidden',
    transition: 'all .5s linear',
  },
};
