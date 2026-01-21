import { Container, Flex, Heading } from '@radix-ui/themes';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container size="4" p="5">
      <Flex direction="column" gap="6">
        <header>
          <Heading
            size="9"
            align="left"
            weight="bold"
            style={{
              background: 'linear-gradient(to right, #818cf8, #c084fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.025em',
            }}
          >
            Global news reporter
          </Heading>
        </header>
        {children}
      </Flex>
    </Container>
  );
};
