# Message Command Deprecation

Message commands are deprecated and have been replaced with [Slash Commands](https://support.discord.com/hc/en-us/articles/1500000368501). This means that the bot will not reply to commands using the
prefix set by the guild, but will instead only use commands that start with a `/`. This means that commands like `!help` have turned into `/help`.

<!--truncate-->

This change has been made since Discord has been limiting access to messages to verified bots since September 1st 2022 for privacy reasons. As RDO Compendium does not need access to your messages, we
did not apply to get explicit access to your messages and instead migrated to Slash Commands. For a more detailed explanation, feel free to
[read this support article](https://support-dev.discord.com/hc/en-us/articles/4404772028055).

## Benefits

Moving over to Slash Commands has several benefits for you:

- Integrated auto-completion for various commands such as `/find`;
- Automatic error messages when using commands incorrectly;
- An easy overview of all commands using `/` and then optionally clicking the bot’s icon;
- Private replies in certain sensitive contexts like changing settings;
- New ways to manage command permissions through Discord itself.

While it wasn’t the primary reason to move over to Slash Commands, it was a very good set of reasons to move over. We appreciate that this might cause some inconvenience for you and/or your users,
but we hope that after the transition period you will appreciate this new system.
