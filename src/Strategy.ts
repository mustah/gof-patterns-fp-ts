import { Predicate } from './Predicate';

export interface FormattingStrategy<T> {
  format: (value: T) => string;
}
