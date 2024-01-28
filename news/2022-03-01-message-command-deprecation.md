# Message Command Deprecation

Message commands are deprecated and have been replaced with [Slash Commands](https://support.discord.com/hc/en-us/articles/1500000368501). This means that the bot will not reply to commands using the prefix set by the server but will instead only use commands that start with a `/`. For example, `!help` has now become `/help`.

<!--truncate-->

:::warning This article may contain outdated information
This is an old article kept for archival reasons and does not represent the current version of RDO Compendium. Any steps outlined in this article may be inaccurate. Please visit the [documentation pages](/wiki/faq) for more accurate information.
:::

This change was implemented because Discord has been limiting access to messages for verified bots since September 1st, 2022, due to privacy reasons. As RDO Compendium does not require access to your messages, we did not apply to get explicit access and instead migrated to Slash Commands. For a more detailed explanation, please [read this support article](https://support-dev.discord.com/hc/en-us/articles/4404772028055).

## Benefits

Moving to Slash Commands brings several benefits for you:

- Integrated auto-completion for various commands such as `/find`;
- Automatic error messages when commands are used incorrectly;
- An easy overview of all commands using `/` and then optionally clicking the bot’s icon;
- Private replies in certain sensitive contexts like changing settings;
- New ways to manage command permissions through Discord itself.

While the primary reason for this move wasn't convenience, it provided several good reasons to transition. We understand that this might cause some inconvenience for you and/or your users, but we hope that after the transition period, you will appreciate this new system.
