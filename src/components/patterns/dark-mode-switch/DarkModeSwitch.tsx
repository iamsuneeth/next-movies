'use client';
import { Switch } from '@/components/elements/switch';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { button, container } from './styles';

interface DarkModeSwitchProps {}

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
      <Switch
        id='dark-mode-toggle'
        checked={isClient && theme === 'dark'}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        color='pink.700'
      />

      <button className={button} type='button' onClick={() => setTheme('dark')}>
        ☾
      </button>
    </div>
  );
};
