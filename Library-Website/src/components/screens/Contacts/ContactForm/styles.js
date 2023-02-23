import theme from 'theme';

const IconPosition = {
  position: 'absolute',
  top: '1.1rem',
  left: '1rem',
};

const InputPosition = {
  outline: 'none',
  border: '1px solid #E8E8E8',
  paddingLeft: '2.5em',
  fontSize: '19px',
  width: '100%',
  height: '65px',
};

export const Cont = {
  display: 'flex',
  flexWrap: 'wrap',
  padding: '7.125em 0',
  margin: '0 -3em',
};

export const KeepInTouch = {
  flex: '0 0 auto',
  maxWidth: '50%',
  padding: '0 3em',
  '&>p': {
    marginTop: ' 1.688em',
    marginBottom: '2.5em',
  },
  '&> ul': {
    listStyle: 'none',
    '&> li': {
      display: 'flex',
      alignItems: 'start',
    },
  },
};

export const Contact = {
  marginBottom: '1.1em',
  marginLeft: '2em',
  '&> h4': {
    color: theme.primary,
  },
};

export const ContactIcon = {
  backgroundColor: theme.primary,
  padding: '1em',
};

export const Form = {
  ...KeepInTouch,
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1em',
};

export const InputWrap = {
  position: 'relative',
  flex: '1 1 0%',
  width: 'auto',
  maxWidth: '100%',
  fontFamily: 'Inter',
  fontSize: '1.2rem',
  '&> input': {
    ...InputPosition,
  },
  '&> img': {
    ...IconPosition,
  },
};

export const BigField = {
  position: 'relative',
  flex: '0 0 100%',
  fontFamily: 'Inter',
  fontSize: '1.2rem',
  '&> input': {
    ...InputPosition,
  },
  '&> img': {
    ...IconPosition,
  },
};

export const MessageField = {
  position: 'relative',
  width: '100%',
  marginBottom: '1em ',
  '&> img': {
    ...IconPosition,
  },
  '&> textarea': {
    outline: 'none',
    border: '1px solid #E8E8E8',
    paddingLeft: '2.5em',
    paddingTop: '1em',
    width: '100%',
    height: '100%',
    fontFamily: 'Inter',
    fontSize: '1.2rem',
  },
};

export const CheckBox = {
  fontSize: '1.1em',
  fontFamily: 'Inter',
  color: theme.lightGrey,
  margin: '1em 0',
  '&> input': {
    width: '1rem',
    height: '1rem',
    marginRight: '1em',
  },
};
