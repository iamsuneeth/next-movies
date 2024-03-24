'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/elements/select';
import { SORT_BY_OPTIONS } from '@/constants/sort-by';
import { css } from '@styled-system/css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface MovieSortProps {}

export const MovieSort = (props: MovieSortProps) => {
  const params = new URLSearchParams(useSearchParams());
  const pathName = usePathname();
  const sort = params.get('sort') ?? SORT_BY_OPTIONS[0].value;
  const { push } = useRouter();
  return (
    <div
      className={css({
        md: {
          maxWidth: '20rem',
        },
      })}
    >
      <Select
        defaultValue={sort}
        onValueChange={(value) => {
          params.set('sort', value);
          push(`${pathName}?${params}`);
        }}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {SORT_BY_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
