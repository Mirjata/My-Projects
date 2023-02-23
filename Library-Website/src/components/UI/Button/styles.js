const textColorMap = theme => ({
  primary: theme.primaryDark,
  secondary: theme.primary,
});

const backgroundColorMap = theme => ({
  primary: theme.primary,
  secondary: theme.secondary,
});

const borderColorMap = theme => ({
  primary: theme.secondary,
  secondary: theme.secondary,
});

const hoverBackgroundColorMap = theme => ({
  primary: theme.secondary,
  secondary: theme.transparent,
});

const hoverBorderColorMap = theme => ({
  primary: theme.secondary,
  secondary: theme.secondary,
});

const hoverTextColorMap = theme => ({
  primary: theme.primaryDark,
  secondary: theme.primary,
});

export const buttonContainer = (props, isLoading) => theme => {
  const {
    type = 'primary',
    outline,
    disabled,
    color,
    borderColor,
    backColor,
    hoverBackColor,
    hoverBorderColor,
    hoverTextColor,
    fullWidth,
  } = props;
  const backgroundColor = theme[backColor] ?? backgroundColorMap(theme)[type] ?? theme.primary;
  const hoverBackgroundColor = theme[hoverBackColor] ?? hoverBackgroundColorMap(theme)[type] ?? theme.primaryDark;
  const textColor = theme[color] ?? textColorMap(theme)[type] ?? theme.white;
  const textHoverColor = theme[hoverTextColor] ?? hoverTextColorMap(theme)[type] ?? theme.primary;
  const borderColorDefault = theme[borderColor] ?? borderColorMap(theme)[type] ?? backgroundColor;
  const borderColorHover = theme[hoverBorderColor] ?? hoverBorderColorMap(theme)[type] ?? hoverBackgroundColor;

  return [
    {
      fontFamily: 'Cardo',
      fontSize: '1.1875rem',
      cursor: disabled ? 'not-allowed' : 'pointer',
      padding: '1em 1.5em',
      width: fullWidth ? '100%' : 'auto',
      minHeight: '4rem',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: textColor,
      lineHeight: 1,
      border: `1px solid ${borderColorDefault}`,
      opacity: isLoading || disabled ? 0.4 : 1,
      backgroundColor: outline ? 'transparent' : backgroundColor,
      userSelect: 'none',
      whiteSpace: 'nowrap',
      transition:
        'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out, width .4s ease-in-out',

      '&:hover': {
        borderColor: borderColorHover,
        backgroundColor: hoverBackgroundColor,
        color: textHoverColor,
      },

      '&:active': { outline: `2px solid ${theme.highlight}` },

      '& > i': { marginRight: 6 },
    },
    (disabled || isLoading) && {
      '& *': { pointerEvents: 'none' },
    },
  ];
};
