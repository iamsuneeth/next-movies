import { sva } from '@styled-system/css';
export const siteSearchRecipe = sva({
  slots: ['container', 'form', 'icon', 'input'],
  base: {
    container: {
      color: 'white',
    },
    form: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'pink.700',
      border: '1px solid',
      borderColor: 'pink.500',
      padding: '1.5rem',
      transition: 'width 0.3s ease',
    },
    input: {
      backgroundColor: 'transparent',
      outline: 'none',
      width: '100%',
      border: 'none',
      _focusVisible: {
        outline: 'none',
        boxShadow: 'none',
      },
    },
    icon: {
      cursor: 'pointer',
    },
  },
  variants: {
    state: {
      opened: {
        form: {
          width: '30rem',
          height: '2rem',
          borderRadius: '250px',
          paddingLeft: '1rem',
        },
        icon: {
          pointerEvents: 'auto',
          marginRight: '0.5rem',
        },
      },
      closed: {
        form: {
          width: '2rem',
          height: '2rem',
          borderRadius: '250px',
          cursor: 'pointer',
        },
        icon: {
          pointerEvents: 'none',
        },
        input: {
          width: 0,
          paddingInline: 0,
        },
      },
    },
  },
});
