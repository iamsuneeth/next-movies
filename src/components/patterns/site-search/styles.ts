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
      transition: 'width 0.3s ease',
      borderRadius: '250px',
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
      fontSize: '1rem',
    },
  },
  variants: {
    state: {
      opened: {
        form: {
          paddingLeft: '0.5rem',
          lg: {
            width: '20rem',
            paddingLeft: '1rem',
          },
          width: '8rem',
          height: '2rem',
        },
        icon: {
          pointerEvents: 'auto',
        },
        input: {},
      },
      closed: {
        form: {
          cursor: 'pointer',
          width: '2rem',
          height: '2rem',
          padding: '1rem',
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
