import { FC } from 'react';
import { Button } from '../../../shared';
import { IItemList } from '../model';

type Props = {
  items: IItemList[];
  handleDeleteItem?: (id: string) => void;
  handleUpdateItem?: () => void;
};

export const List: FC<Props> = ({ items, handleDeleteItem, handleUpdateItem }) => {
  const deleteItem = (id: string) => {
    handleDeleteItem?.(id);
  };

  return (
    <ul>
      {items.map((itm) => (
        <li key={itm?.id}>
          <p>
            {itm?.id}
            {itm?.title}
          </p>
          <Button variant='update'>update</Button>
          <Button
            variant='delete'
            onClick={() => deleteItem(String(itm?.id))}
          >
            delete
          </Button>
        </li>
      ))}
    </ul>
  );
};
