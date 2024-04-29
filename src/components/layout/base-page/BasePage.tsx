import { flex } from '@styled-system/patterns';

interface BasePageProps {
  children: React.ReactNode;
}

const basePageStyles = flex({
  direction: 'column',
  gap: 4,
  paddingBottom: 8,
  marginTop: '5rem',
});

export const BasePage = ({ children }: BasePageProps) => {
  return <div className={basePageStyles}>{children}</div>;
};
