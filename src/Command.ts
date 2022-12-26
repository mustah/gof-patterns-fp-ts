export interface Command {
  execute(): void;
}

export class CommandRunner {
  constructor(private commands: Command[] = []) {
  }

  run() {
    this.commands.forEach(command => command.execute());
  }
}
