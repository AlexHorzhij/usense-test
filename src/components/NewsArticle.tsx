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
      <a href={article.link} target="_blank" rel="noopener noreferrer">
        {article.image_url && (
          <Inset clip="padding-box" side="top" pb="current">
            {article.image_url ? (
              <img
                src={article.image_url}
                alt={article.title}
                onError={() => {
                  article.image_url = '../../public/placehold.jpg';
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
              <img
                src={'/placehold.jpg'}
                alt={article.title}
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 200,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            )}
          </Inset>
        )}
        <Flex direction="column" gap="3" p="3" flexGrow="1">
          <Box>
            <Badge color="indigo" variant="soft" size="1">
              {/* <a
              href={article.source_url}
              target="_blank"
              rel="noopener noreferrer"
            > */}
              {article.source_id}
              {/* </a> */}
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
      </a>
    </Card>
  );
};
