'use client';

import { Search } from 'lucide-react';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { siteSearchRecipe } from './styles';
import { Input } from '@/components/elements/input';

interface SiteSearchProps {}

export const SiteSearch = (props: SiteSearchProps) => {
  const [opened, setOpened] = useState(false);
  const { container, icon, input, form } = siteSearchRecipe({
    state: opened ? 'opened' : 'closed',
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  useClickAway(formRef, () => {
    setOpened(false);
  });

  function clickHandler() {
    setOpened(true);
    inputRef.current?.focus();
  }

  return (
    <div className={container}>
      <form
        className={form}
        onClick={clickHandler}
        ref={formRef}
        onSubmit={(event) => {
          /** use server action here*/
          event.preventDefault();
          console.log('hit');
        }}
      >
        <button type='submit' className={icon} aria-label='Search for a movie'>
          <Search />
        </button>
        <Input type='search' className={input} />
      </form>
    </div>
  );
};
