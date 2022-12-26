import { Command, CommandRunner } from '../Command';

describe('Command', () => {
  test('Example', () => {
    const result: string[] = [];

    const logCommand: Command = {
      execute() {
        result.push('log');
      }
    };
    const sendCommand: Command = {
      execute() {
        result.push('send');
      }
    };
    const saveCommand: Command = {
      execute() {
        result.push('save');
      }
    };
    const example = new CommandRunner([logCommand, sendCommand, saveCommand]);

    example.run();

    expect(result).toEqual<string[]>(['log', 'send', 'save']);
  });
});
