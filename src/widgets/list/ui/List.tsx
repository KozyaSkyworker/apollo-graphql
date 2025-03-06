import { IItemList } from '../model';

export const List = ({ items }: { items: IItemList[] }) => {
  return (
    <ul>
      {items.map((itm) => (
        <li key={itm?.id}>
          {itm?.id}
          {itm?.title}
        </li>
      ))}
    </ul>
  );
};
