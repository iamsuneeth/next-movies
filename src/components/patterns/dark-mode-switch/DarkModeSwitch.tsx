'use client';
import { Switch } from '@/components/elements/switch';
import { css } from '@styled-system/css';
import { useTheme } from 'next-themes';
import { use, useEffect, useState } from 'react';

interface DarkModeSwitchProps {}

const container = css({
  display: 'flex',
  alignItems: 'center',
  gap: 2,
});

const button = css({
  cursor: 'pointer',
  fontSize: '1.5rem',
});

export const DarkModeSwitch = (props: DarkModeSwitchProps) => {
  const { setTheme, theme } = useTheme();
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <div className={container}>
      <button
        className={button}
        type='button'
        onClick={() => setTheme('light')}
      >
        ☀
      </button>
      {isClient && (
        <Switch
          id='dark-mode-toggle'
          checked={theme === 'dark'}
          onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        />
      )}
      <button className={button} type='button' onClick={() => setTheme('dark')}>
        ☾
      </button>
    </div>
  );
};
