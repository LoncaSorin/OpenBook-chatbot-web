import { styled } from '@mui/material/styles';

export const StyledMessageWrapper = styled('div')(({ theme, mode, hasError }) => {
  let backgroundColor = mode === 'primary' ? theme.palette.secondary.main : theme.palette.primary.secondary;
  let color = theme.palette.text.primary;

  if (hasError) {
    backgroundColor = theme.palette.primary.main;
    color = theme.palette.common.white;
  }

  return {
    maxWidth: '350px',
    padding: theme.spacing(2),
    borderRadius: '16px',
    borderBottomRightRadius: mode === 'primary' ? '0px' : '16px',
    borderBottomLeftRadius: mode !== 'primary' ? '0px' : '16px',
    position: 'relative',
    backgroundColor,
    color,
    '& #feedbacks': {
      display: 'none',
    },
    '&:hover': {
      '& #feedbacks': {
        display: 'flex',
      },
    },
  };
});

export const StyledIconWrapper = styled('div')(({ theme, disabled, isActive }) => ({
  border: `1px solid ${isActive ? theme.palette.border.main : theme.palette.border.secondary}`,
  height: '24px',
  width: '24px',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.main,
  '& svg': {
    height: '16px',
    width: '16px',
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  opacity: disabled ? 0.5 : 1,
  cursor: isActive ? 'initial' : 'pointer',
  '&:hover': !disabled
    ? {
      border: `1px solid ${theme.palette.border.main}`,
    } : {
      cursor: 'not-allowed',
    },
}));
