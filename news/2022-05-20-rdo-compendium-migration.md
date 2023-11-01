# RDO Compendium Migration

Hey folks! The moment of the new version of the bot being released is here! The next major version of of the bot has been released.

During the migration period, we migrated all of your settings to the new version of the bot. However, some settings can't be completely migrated automatically. Here's a list of settings that
were migrated automatically, ones that couldn't be automatically migrated and require some additional action, and some that have been deprecated and have not been migrated at all.

<!--truncate-->

:::warning This article may contain outdated information
This is an old article which although kept for archival reasons does not represent the current version of RDO Compendium and any steps outlined in this article may be inaccurate. Please
visit the [documentation pages](/wiki/faq) for more accurate information.
:::

## Premium

Unfortunately it is not possible to migrate your guild's Premium status to the next version of the bot. Therefor the bot will be asking you to re-activate your Premium status.
To do this, follow the [Premium activation instructions](/wiki/guides/premium).

:::danger
Again, if you don't re-activate Premium, you will not able to use the Premium benefits.
:::

:::tip
If for whatever reason you can't activate your guild, reach out to us either in the support channels or send us a DM.
:::

## Manual Migration

The following settings require you to run `/settings fix` in order to get them working correctly again:

:::warning
If you don't run `/settings fix`, the bot will not send out messages for the ping settings. To ensure everything is working fine, set the `test` option to `True` to get a test confirmation message.
:::

| Current Setting | New Setting                 |
| :-------------- | :-------------------------- |
| `benefits`      | Benefits                    |
| `cycles`        | Collector Cycles            |
| `daily`         | Daily Challenges            |
| `events`        | Free Roam Events            |
| `nazar`         | Madam Nazar                 |
| `news`          | Newswire Articles           |
| `patches`       | Patch Notes                 |
| `status`        | Rockstar Service Status     |
| `tunables`      | Tunables                    |
| `weekly`        | Weekly Collectible Requests |

## Deprecated Settings

The following settings have not been migrated as they have been deprecated by the new version of the bot:

| Setting           | Why?                                                                         |
| :---------------- | :--------------------------------------------------------------------------- |
| `prefix`          | [Commands start with `/` now.](/news/2022/03/01/message-command-deprecation) |
| `adminRole`       | The bot now checks whether you have the **Administrator** permission.        |
| `forceLanguage`   | Only the **Language** setting is used for determining language.              |
| `removeCommands`  | Command inputs can't be automatically removed anymore.                       |
| `showCreditLinks` | You can now disable the `/credits` commands using command permissions.       |
| `showSuggestions` | All suggestions are now contained in the chat bar.                           |

## Automatic Migration

The following settings have been migrated automatically and shouldn't require any attention on your part:

| Current Setting     | New Setting          |
| :------------------ | :------------------- |
| `colorizeToastIcon` | Colorize Toast Icons |
| `embedColor`        | Embed Color          |
| `language`          | Language             |
| `preferImage`       | Prefer Images        |
| `showCommunities`   | Show Communities     |
| `showProviders`     | Show Providers       |
| `toastColor`        | Toast Color          |
