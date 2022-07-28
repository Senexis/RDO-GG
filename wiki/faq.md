---
sidebar_position: 2
---

# FAQ

If you're reading this page, you're probably looking for an answer for some question. To help get you going and back to Discord, here's a list of questions that are frequently asked.
Please note that a [commands guide](./guides/commands) and a [settings guide](./guides/settings) are available, so if you're looking for a list of commands, those are available over there.

:::note
Is something missing from this FAQ? Let us know in the support server or use `/feedback` in a guild with RDO Compendium.
:::

## Bot

### When did the bot get started?

The bot got started in June of 2020. At that time the bot started to get a few basic functionalities.

### Who made the bot?

The bot was developed by Senexis. He is currently the only developer for the bot. A full list of all contributors can be found by using the `/credits` command.

### How often does the bot get an update?

Content that is added in a game update gets added to the bot as soon as possible, usually with some information that isn't widely known yet.
Other than content updates, bug fixes and new features get added on a regular basis.

### How accurate is the bot's information?

Most information from the bot is obtained from the game itself by way of creative data gathering. This way, the accuracy of the information can be guaranteed.

### How can I support the bot?

You can support the bot monetarily by becoming a Patron, or you can spread the word about the bot. Both are greatly appreciated.

## Premium

### What is Premium?

Supporting the bot with €3.99 or more on Patreon will enable you to automate certain notifications and create fun assets to play around with.

### What exactly do I get with Premium?

Premium members get access to a selection of Premium-only commands and access to a host of automatic notification options.

### How do I activate Premium?

:::note
To learn more about the Premium activation process, visit the [premium guide](./guides/premium).
:::

### Do I need to keep paying for Premium?

In general, the answer to this is yes to be able to keep the bot up and running. However, exceptions can be made in certain circumstances.

### If I do stop, how long do I get to keep Premium?

If you decide you want to stop supporting the bot for any reason, you'll lose access to Premium at the start of the next month.
So say you stop supporting at the 14th, you'll keep Premium until the 1st of the next month.

### Can I get Premium for free?

If you are a Red Dead Online community content creator, you can reach out to us in the support server to request free Premium.
Eligible content creators include: tool creators, information gatherers, map creators and other people that help the community found out more information about the game.

## Issues

### Why doesn't the bot respond?

This can have multiple causes. Perhaps the bot doesn't have proper permission to talk in that channel. It could also be that the bot is down briefly for some updates.

### Why can't I see the bot's commands?

Make sure that you have the **Use Application Commands** permission. In addition, check whether you have set up the bot's application permissions in such a way that they command you're trying to use
is allowed to be used in the channel itself. If you need help getting that set up, please visit the
[Discord support article](https://support.discord.com/hc/en-us/articles/4644915651095-Command-Permissions) for more information about Slash command permissions.

### Why don't emoji work when using commands?

The common reason emoji don't work is because the bot doesn't have the **Use External Emoji** permission. Please make sure to add the permission to the bot's role, and make sure the channel you're
using commands in doesn't override (deny) the permission for the bot.

If you've made sure the bot has the permission, but still don't see the emoji, please check whether the `@everyone` role has the permission in the channel. A Discord quirk is that in order for
commands to respond with emoji, both the `@everyone` role and the bot needs to have the **Use External Emoji** permission. Please note that you don't need to add the permission to the role itself,
just adding it the the channel will do the trick.

:::info
Regarding the Discord quirk, here's what Discord has to say:

> We are working right now to make this more logical. There are important edge cases to be mindful of, like how moderators can control this permission when there is not a bot user in the server. But we
> know this is a pain point, and are currently addressing it.

You can read more about this [here (question no. 18)](https://time-mambo-c70.notion.site/DDevs-May-27-Q-A-17431321344b4ce7915fe7b5f83b1f41).
:::

### Why can't the bot find something I look for?

If the bot can't find something, try using slightly different keywords. Sometimes something is known differently in the game than what you're looking for.
A common example of this is looking for `buffalo` while the actual name is `bison`. Of course, the thing you're looking for might just not be in the bot.
If you believe this is the case, please leave feedback using the appropriate button.

### How come the bot doesn't detect me as Administrator?

The bot determines whether you are an administrator or not by checking whether you have the Administrator permission. Please make sure you have the permission or ask your server owner for help.

### Why is the bot talking in a different language?

:::note
To learn more about languages, visit the [languages guide](./guides/languages).
:::

### I'm having a different issue. How can I get help?

If you experience an issue that you can't seem to solve, you can reach out in the support server at any time and you'll get help as soon as possible. You can also use the `/feedback` command
to leave feedback directly from Discord.
