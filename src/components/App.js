import { useState } from 'react';
import mockItems from '../mock.json';
import { ReviewList } from './ReviewList';

export function App() {
  const [order, orderSet] = useState('createdAt');
  const [items, setItems] = useState(mockItems);
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => {
    orderSet('createdAt');
  };
  const handleBestClick = () => {
    orderSet('rating');
  };
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleBestClick}>별점순</button>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}
