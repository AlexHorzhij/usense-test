import { Container, Flex, Heading } from '@radix-ui/themes';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container size="4" p="5">
      <Flex direction="column" gap="6">
        <header>
          <Heading
            size="9"
            align="center"
            weight="bold"
            style={{
              background: 'linear-gradient(to right, #818cf8, #c084fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.025em',
            }}
          >
            GLOBAL NEWS REPORTER
          </Heading>
        </header>
        {children}
      </Flex>
    </Container>
  );
};
