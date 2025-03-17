import { ButtonHTMLAttributes, FC } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'create' | 'delete' | 'update';
}

const styles = {
  create: {
    backgroundColor: 'green'
  },
  delete: {
    backgroundColor: 'red'
  },
  update: {
    backgroundColor: 'yellow'
  }
};

export const Button: FC<Props> = ({ children = 'button', variant = 'create', ...props }) => (
  <button
    style={styles[variant]}
    {...props}
  >
    {children}
  </button>
);
