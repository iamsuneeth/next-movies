'use client';

import { Search } from 'lucide-react';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { siteSearchRecipe } from './styles';
import { Input } from '@/components/elements/input';
import { useRouter } from 'next/navigation';

interface SiteSearchProps {}

export const SiteSearch = (props: SiteSearchProps) => {
  const [opened, setOpened] = useState(false);
  const router = useRouter();
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
          if (formRef.current) {
            const formData = new FormData(formRef.current);
            const search = formData.get('search');
            if (search) {
              router.push(`/search?q=${search}`);
            }
          }
        }}
      >
        <button type='submit' className={icon} aria-label='Search for a movie'>
          <Search size='1em' />
        </button>
        <Input name='search' type='search' className={input} />
      </form>
    </div>
  );
};
