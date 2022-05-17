# Settings

To configure the bot, a selection of different settings are available in the bot which you can change.
This quick guide provides an in-depth look at all the different settings, what they do, and what they can be set to.

Settings are divided into multiple categories in this guide. Settings are saved on a per-Discord basis, so if you add the bot to multiple servers,
you will need to configure the bot on all the different guilds you administrate.

## Commands

| Command                | Description                                                         |
| :--------------------- | :------------------------------------------------------------------ |
| /settings fix          | Fixes up settings and ensures everything works as intended          |
| /settings list         | Displays all the settings for this guild                            |
| /settings reset        | Resets a setting to its default value                               |
| /settings set boolean  | Updates a [boolean setting](./settings#booleans) to a new value     |
| /settings set color    | Updates a [color setting](./settings#colors) to a new value         |
| /settings set events   | Updates the [events setting](./settings#events) to a new value      |
| /settings set language | Updates the [language setting](./settings#languages) to a new value |
| /settings set pings    | Updates a [ping setting](./settings#pings) to a new value           |
| /settings set role     | Updates a [role setting](./settings#roles) to a new value           |

## Options

### Booleans

The following settings are available for free to any guild.

| Setting                  | Description                                             |
| :----------------------- | :------------------------------------------------------ |
| Show Communities         | Whether to show links to communities in /links.         |
| Show Deprecation Message | Whether to show the deprecation message.                |
| Show Feedback Buttons    | Whether to show feedback buttons in certain situations. |

The following settings are available to Premium-activated guilds.

| Setting              | Description                                        |
| :------------------- | :------------------------------------------------- |
| Colorize Toast Icons | Whether to colorize the icons of toasts.           |
| Prefer Images        | Whether to post images by default instead of text. |
| Show Providers       | Whether to show the "Provided by" text in embeds.  |

### Colors

The following settings are available to Premium-activated guilds.

| Setting     | Description                                                |
| :---------- | :--------------------------------------------------------- |
| Embed Color | Change the color of embeds for the bot.                    |
| Toast Color | Change the color of toast titles and/or icons for the bot. |

### Events

:::note
To learn more about using and configuring Free Roam Event pings, visit the [events guide](./events).
:::

### Languages

:::note
To learn more about using and configuring languages, visit the [languages guide](./languages).
:::

### Pings

The following settings are available for free to any guild.

| Setting           | Description                                                  |
| :---------------- | :----------------------------------------------------------- |
| Bot Notifications | Ping when the developers of the bot post a new notification. |

The following settings are available to Premium-activated guilds.

| Setting                     | Description                                         |
| :-------------------------- | :-------------------------------------------------- |
| Benefits                    | Ping when the in-game Benefits screen updates.      |
| Collector Cycles            | Ping when the Collector item cycles change.         |
| Daily Challenges            | Ping when the Daily Challenges update.              |
| Live Events                 | Ping when the Live Events have changed.             |
| Madam Nazar                 | Ping when Madam Nazar moves to a new location.      |
| Newswire Articles           | Ping when a new Newswire article is posted.         |
| Patch Notes                 | Ping when new patch notes are available.            |
| Rockstar Service Status     | Ping when the Rockstar Service status changes.      |
| Tunables                    | Ping when sales and other tunable modifiers change. |
| Weekly Collectible Requests | Ping when the Weekly Collectible Request changes.   |

### Roles

The following settings are available for free to any guild.

| Setting            | Description                                      |
| :----------------- | :----------------------------------------------- |
| Train Mention Role | The role to mention when a new train is started. |
