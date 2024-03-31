import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/elements/pagination';
import { headers } from 'next/headers';
import { paginationContentLarge, paginationContentSmall } from './styles';

interface MoviePaginationProps {
  page?: number;
  maxPage?: number;
  url?: string | null;
}

const MAX_PAGE_TO_SHOW = 10;

function getPaginationArray(page: number, maxPage: number) {
  if (maxPage <= MAX_PAGE_TO_SHOW || page < MAX_PAGE_TO_SHOW) {
    return Array.from(
      { length: Math.min(MAX_PAGE_TO_SHOW, maxPage) },
      (_, index) => index + 1,
    );
  }

  return Array.from(
    { length: MAX_PAGE_TO_SHOW },
    (_, index) => page - Math.round(MAX_PAGE_TO_SHOW / 2) + index,
  ).filter((page) => page <= maxPage);
}

export const MoviePagination = ({
  page = 1,
  maxPage = 0,
}: MoviePaginationProps) => {
  const headerList = headers();
  const pathname = headerList.get('x-pathname');
  if (!maxPage) return null;
  const paginationArray = getPaginationArray(page, maxPage);
  return (
    <Pagination>
      <PaginationContent className={paginationContentLarge}>
        {page > 1 && (
          <>
            <PaginationItem>
              <PaginationPrevious
                href={{ pathname, query: { page: page - 1 } }}
                isActive={false}
                keepSearch={true}
              />
            </PaginationItem>

            {page >= MAX_PAGE_TO_SHOW && (
              <PaginationItem>
                <PaginationLink
                  href={{
                    pathname,
                    query: { page: 1 },
                  }}
                  keepSearch={true}
                  isActive={false}
                >
                  {1}
                </PaginationLink>
              </PaginationItem>
            )}
          </>
        )}
        {page >= MAX_PAGE_TO_SHOW && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {paginationArray.map((value) => (
          <PaginationItem key={value}>
            <PaginationLink
              href={{
                pathname,
                query: { page: value },
              }}
              isActive={value === page}
              keepSearch={true}
            >
              {value}
            </PaginationLink>
          </PaginationItem>
        ))}
        {maxPage > MAX_PAGE_TO_SHOW && page < maxPage - MAX_PAGE_TO_SHOW && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {page < maxPage && (
          <>
            {page < maxPage - MAX_PAGE_TO_SHOW && (
              <PaginationItem>
                <PaginationLink
                  href={{
                    pathname,
                    query: { page: maxPage },
                  }}
                  keepSearch={true}
                  isActive={false}
                >
                  {maxPage}
                </PaginationLink>
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext
                href={{
                  pathname,
                  query: { page: page + 1 },
                }}
                isActive={false}
                keepSearch={true}
              />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
      <PaginationContent className={paginationContentSmall}>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={{ pathname, query: { page: page - 1 } }}
              isActive={false}
              keepSearch={true}
            />
          </PaginationItem>
        )}
        {page < maxPage && (
          <PaginationItem>
            <PaginationNext
              href={{
                pathname,
                query: { page: page + 1 },
              }}
              isActive={false}
              keepSearch={true}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
