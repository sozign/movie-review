import { useState } from 'react';
import items from '../mock.json';
import { ReviewList } from './ReviewList';

export function App() {
  const [order, orderSet] = useState();
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => {
    orderSet('createdAt');
  };
  const handleBestClick = () => {
    orderSet('rating');
  };

  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleBestClick}>별점순</button>
      <ReviewList items={items} />
    </div>
  );
}
