import { FC } from 'react';
import { IItemList, List } from '../../list';

interface Props {
  title: string;
  items: IItemList[];
}

export const VerticalRepresentation: FC<Props> = ({ title, items }) => {
  return (
    <div>
      <h1>{title}</h1>
      <form>form</form>
      <List items={items} />
    </div>
  );
};
