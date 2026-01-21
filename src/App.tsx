import { useState } from 'react';
import { Layout } from './components/Layout';
import { NewsFilter } from './components/NewsFilter';
import { NewsList } from './components/NewsList';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Layout>
      <NewsFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <NewsList selectedCategory={selectedCategory} searchQuery={searchQuery} />
    </Layout>
  );
}

export default App;
