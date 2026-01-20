import { JSX } from 'react/jsx-runtime';

export interface Todo {
  map(
    arg0: (todo: {
      id: React.Key;
      title: string;
      completed: string;
    }) => JSX.Element,
  ): import('react').ReactNode;
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}
