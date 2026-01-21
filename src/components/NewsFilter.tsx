import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Button, Card, Flex, TextField } from '@radix-ui/themes';

const categories = [
  'All',
  'business',
  'crime',
  'domestic',
  'education',
  'entertainment',
  'environment',
  'food',
  'health',
  'lifestyle',
  'politics',
  'science',
  'sports',
  'technology',
  'top',
  'tourism',
  'world',
  'other',
];

export const NewsFilter = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Card size="3">
      <Flex direction="column" gap="4">
        <TextField.Root
          size="3"
          placeholder="Search news stories..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        >
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>

        <Flex gap="2" wrap="wrap" className="capitalize">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'solid' : 'soft'}
              color="indigo"
              radius="full"
              onClick={() => setSelectedCategory(category)}
              style={{ cursor: 'pointer' }}
            >
              {category}
            </Button>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
};
