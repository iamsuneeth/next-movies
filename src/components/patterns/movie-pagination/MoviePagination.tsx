'use client';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/elements/pagination';

interface MoviePaginationProps {
  page?: number;
  maxPage?: number;
  url?: string | null;
}

export const MoviePagination = ({
  page = 1,
  maxPage = 0,
  url = '',
}: MoviePaginationProps) => {
  if (!maxPage) return null;
  const paginationArray = Array(Math.min(3, maxPage)).fill(0);
  return (
    <Pagination>
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={{ pathname: url, query: { page: page - 1 } }}
              isActive={false}
            />
          </PaginationItem>
        )}
        {paginationArray.map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href={{
                pathname: url,
                query: { page: index + 1 },
              }}
              isActive={index + 1 === page}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        {maxPage > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {page < maxPage && (
          <PaginationItem>
            <PaginationNext
              href={{
                pathname: url,
                query: { page: page + 1 },
              }}
              isActive={false}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
