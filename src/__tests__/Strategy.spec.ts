import { Predicate } from '../Predicate';
import { FormattingStrategy } from '../Strategy';

describe('Strategy', () => {
  const publishText = <T extends string = string>(
    text: T,
    when: Predicate<T>,
    format: FormattingStrategy<T>
  ): string => {
    return when(text) ? format.format(text) : text;
  }

  test('publish text ', () => {
    const isShortText: Predicate<string> = (s) => s.length <= 3;
    const isLongText: Predicate<string> = (s) => s.length > 3;

    const upperCaseFormattingStrategy: FormattingStrategy<string> = { format: value => value.toUpperCase() };
    const lowerCaseFormattingStrategy: FormattingStrategy<string> = { format: value => value.toLowerCase() };

    expect(publishText('Test', isLongText, upperCaseFormattingStrategy)).toBe('TEST');
    expect(publishText('api', isShortText, upperCaseFormattingStrategy)).toBe('API');
    expect(publishText('Testing A Long Text', isLongText, lowerCaseFormattingStrategy)).toBe('testing a long text');
  });

});
