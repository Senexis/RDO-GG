---
title: "Message Command Deprecation"
description: "Details regarding the deprecation of message commands and the introduction of Slash Commands."
slug: "message-command-deprecation"
image: "/img/pic088.jpg"
image_on_details: false
keywords: ""
categories: 
    - "General"
    - "Important"
date: 2022-01-01T00:00:00+00:00
draft: false
---

Message commands are deprecated and have been replaced with [Slash Commands](https://support.discord.com/hc/en-us/articles/1500000368501). This means that the bot will not reply to commands using the prefix set by the guild ("!"), but will instead only use commands that start with a "/". This means that commands like "!help" have turned into "/help".

This change has been made since Discord will be limiting access to messages to verified bots after April 30th 2022 for privacy reasons. As RDO.GG bots do not need access to your messages, RDO.GG bots will not be applying to get explicit access to your messages after that date and instead migrated to Slash Commands. For a more detailed explanation, feel free to [read this support article](https://support-dev.discord.com/hc/en-us/articles/4404772028055).

Attempting to use a message command in any RDO.GG bot will result in a deprecation notice being displayed. This deprecation notice can be disabled using the "/settings" command. If you choose not to disable to deprecation notice, it will automatically be removed after April 30th 2022.

## Benefits
Moving over to Slash Commands has several benefits for you:

- Integrated auto-completion for various commands such as "/find";
- Automatic error messages when using commands incorrectly;
- An easy overview of all commands using "/" and then optionally clicking the bot's icon;
- Private replies in certain sensitive contexts like changing settings;
- New ways to manage command permissions through Discord itself ([coming soon](https://msciotti.notion.site/msciotti/Command-Permissions-V2-4d113cb49090409f998f3bd80a06c3bd)).

While it wasn't the primary reason to move over to Slash Commands, it was a very good set of reasons to move over. We appreciate that this might cause some inconvenience for you and/or your users, but we hope that after the transition period you will appreciate this new system.