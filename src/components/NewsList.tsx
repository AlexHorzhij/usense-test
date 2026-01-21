import { Box, Grid, Spinner, Text } from '@radix-ui/themes';
import { NewsArticle } from './NewsArticle';
import type { ResponseNews } from '../types';
import { API } from '../api';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { useDebounce } from 'use-debounce';

export const NewsList = ({
  selectedCategory,
  searchQuery,
}: {
  selectedCategory: string;
  searchQuery: string;
}) => {
  const [debouncedSearchQuery] = useDebounce(searchQuery, 1000);

  const { data, isLoading, isError, error }: UseQueryResult<ResponseNews> =
    useQuery({
      queryKey: ['news', selectedCategory, debouncedSearchQuery],
      queryFn: () =>
        API.getNews({
          category: selectedCategory === 'All' ? '' : selectedCategory,
          q: debouncedSearchQuery,
        }),
      staleTime: 1000 * 60 * 5,
    });

  return (
    <>
      {isLoading && <Spinner size="3" className="mx-auto" />}
      {isError && <Text>Error: {error.message}</Text>}
      <Grid
        columns={{ initial: '1', md: '2', lg: '3' }}
        gap="6"
        width="auto"
        align="center"
      >
        {data?.results && data?.results.length > 0 ? (
          data?.results.map(item => (
            <NewsArticle article={item} key={item.article_id} />
          ))
        ) : (
          <Box py="9" style={{ gridColumn: '1 / -1' }}>
            <Text align="center" size="5" color="gray" as="p">
              No news stories found matching your criteria.
            </Text>
          </Box>
        )}
      </Grid>
    </>
  );
};
