import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Badge, Box, Card, Flex, Heading, Inset, Text } from '@radix-ui/themes';

export const NewsArticle = ({ article }: { article: any }) => {
  console.log(article);
  return (
    <Card
      size="2"
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {article.urlToImage && (
        <Inset clip="padding-box" side="top" pb="current">
          {article.urlToImage ? (
            <img
              src={article.urlToImage}
              alt={article.title}
              onError={() => {
                article.urlToImage = '../../public/placehold.jpg';
              }}
              style={{
                display: 'block',
                objectFit: 'cover',
                width: '100%',
                height: 200,
                backgroundColor: 'var(--gray-5)',
              }}
            />
          ) : (
            <MagnifyingGlassIcon />
          )}
        </Inset>
      )}
      <Flex direction="column" gap="3" p="3" flexGrow="1">
        <Box>
          <Badge color="indigo" variant="soft" size="1">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.source.name}
            </a>
          </Badge>
        </Box>
        <Heading as="h3" size="4" trim="start">
          {article.title}
        </Heading>
        <Text
          as="p"
          size="2"
          color="gray"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {article.description}
        </Text>
        <Flex
          mt="auto"
          pt="3"
          justify="between"
          align="center"
          style={{ borderTop: '1px solid var(--gray-5)' }}
        >
          <Text size="1" color="gray">
            By {article.author || 'Unknown'}
          </Text>
          <Text size="1" color="gray">
            {new Date(article.publishedAt).toLocaleDateString()}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};
