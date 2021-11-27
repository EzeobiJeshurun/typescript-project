//when we use abstract in a class, we expect that classes which
//extends the class, should implement it.

abstract class Command {
    abstract commandLine(): string;

    execute() {
        console.log('Executing:', this.commandLine());
    }
}

class GitResetCommand extends Command {
    commandLine() {
        return 'git reset --hard';
    }
}

class GitFetchCommand extends Command {
    commandLine() {
        return 'git fetch --all';
    }
}

new GitResetCommand().execute();
new GitFetchCommand().execute();

//note You cannot create instances of an abstract class  by itself.
//eg new Command() because it has missing methods yet to be implemented.