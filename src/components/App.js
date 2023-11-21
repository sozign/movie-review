import items from '../mock.json';
import { ReviewList } from './ReviewList';

export function App() {
  return (
    <div>
      <ReviewList items={items} />
    </div>
  );
}
