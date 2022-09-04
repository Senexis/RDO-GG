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

Boolean settings are Yes/No settings, otherwise known as toggles. They can be set to either `True` (Yes) or `False` (No).

| Setting                       | Description                                                                                                               | Premium |
| :---------------------------- | :------------------------------------------------------------------------------------------------------------------------ | :-----: |
| Colorize Toast Icons          | Whether to colorize the icons of toasts.                                                                                  |   ✅    |
| Delete Old Messages           | Whether to delete old messages when a new one is sent.                                                                    |   ✅    |
| Delivery Private Threads      | Whether to create Private Threads instead of Public Threads for Trader deliveries.                                        |   ✅    |
| Posse Private Threads         | Whether to create Private Threads instead of Public Threads for lobbies.                                                  |   ✅    |
| Prefer Images                 | Whether to post images by default instead of text.                                                                        |   ✅    |
| Show Communities              | Whether to show links to communities in `/links`.                                                                         |         |
| Show Feedback Buttons         | Whether to show feedback buttons in certain situations.                                                                   |         |
| Show News Bot Notifications   | Whether to show news notifications. Requires the `Bot Notifications` [ping setting](./settings#pings) to be configured.   |         |
| Show Providers                | Whether to show the "Provided by" text in embeds.                                                                         |   ✅    |
| Show Reboot Bot Notifications | Whether to show reboot notifications. Requires the `Bot Notifications` [ping setting](./settings#pings) to be configured. |         |
| Show Update Bot Notifications | Whether to show update notifications. Requires the `Bot Notifications` [ping setting](./settings#pings) to be configured. |         |

### Colors

Color settings control some visual aspects of the bot, such as the color of embeds. They can be set to various formats of colors. The following color formats are supported:

- [CSS color keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color#value), for example `red`.
- HEX format, for example `#CC0000`.
- HSL format, for example `hsl(0, 100%, 40%)`.
- HWB format, for example `hwb(0, 0%, 20%)`.
- RGB format, for example `rgb(204, 0, 0)`.

:::tip Did you know?
You can find a full list of Red Dead Online colors on the [colors page](/wiki/lists/colors)!
:::

You can search the web for "Color Picker" to find tools that allow you to pick colors. In addition, most common imaging programs also allows you to pick and choose colors.

| Setting     | Description                                                                                                                                | Premium |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :-----: |
| Embed Color | Change the color of embeds for the bot, which are displayed to the left of sent embeds.                                                    |   ✅    |
| Toast Color | Change the color of toast titles and/or icons for the bot, depending on the `Colorize Toast Icons` [boolean setting](./settings#booleans). |   ✅    |

### Events

:::note
To learn more about using and configuring Free Roam Event pings, visit the [events guide](./events).
:::

### Languages

:::note
To learn more about using and configuring languages, visit the [languages guide](./languages).
:::

### Pings

Ping settings allow you to configure the bot to automatically post messages to various channels in your Discord servers.

| Setting                     | Description                                                  | Premium |
| :-------------------------- | :----------------------------------------------------------- | :-----: |
| Benefits                    | Ping when the in-game Benefits screen updates.               |   ✅    |
| Bot Notifications           | Ping when the developers of the bot post a new notification. |         |
| Collector Cycles            | Ping when the Collector item cycles change.                  |   ✅    |
| Daily Challenges            | Ping when the Daily Challenges update.                       |   ✅    |
| Free Roam Events Schedule   | Ping when the Free Roam Event schedule is updated.           |   ✅    |
| Live Events                 | Ping when the Live Events have changed.                      |   ✅    |
| Madam Nazar                 | Ping when Madam Nazar moves to a new location.               |   ✅    |
| Newswire Articles           | Ping when a new Newswire article is posted.                  |   ✅    |
| Patch Notes                 | Ping when new patch notes are available.                     |   ✅    |
| Rockstar Service Status     | Ping when the Rockstar Service status changes.               |   ✅    |
| Tunables                    | Ping when sales and other tunable modifiers change.          |   ✅    |
| Weekly Collectible Requests | Ping when the Weekly Collectible Request changes.            |   ✅    |

### Roles

Role settings are used in specific features of the bot, and allow you to select a User Role to use in those features.

| Setting               | Description                                                | Premium |
| :-------------------- | :--------------------------------------------------------- | :-----: |
| Delivery Mention Role | The role to mention when a new Trader delivery is started. |         |
| Posse Mention Role    | The role to mention when a new lobby is started.           |         |
