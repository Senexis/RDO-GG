import Image from '@theme/IdealImage';
import React from 'react';
import { Steps, StepsProvider, useSteps } from "react-step-builder";

import getStarted1 from '/img/wiki/get-started-1.png';
import getStarted2 from '/img/wiki/get-started-2.png';
import getStarted3 from '/img/wiki/get-started-3.png';
import getStarted4 from '/img/wiki/get-started-4.png';
import getStarted5 from '/img/wiki/get-started-5.png';
import getStarted6 from '/img/wiki/get-started-6.png';
import getStarted7 from '/img/wiki/get-started-7.png';

const GetStartedStep = (props) => {
  const { isFirst, isLast, hasNext, next, hasPrev, prev, current, total } = useSteps();

  return (
    <div className="w-full h-[70vh] overflow-hidden flex flex-col rounded-lg text-black dark:text-white bg-white dark:bg-[#18191c] shadow-lg mb-8">
      <div className="flex-none px-8 h-16 flex items-center bg-[#e3e5e8] dark:bg-[#2f3136]">
        <h2 className="m-0">{props.title ?? `Step ${current}`}</h2>
      </div>
      <div className="grow shrink p-8 pb-4 overflow-y-auto">
        {props.children}
      </div>
      <div className="flex-none px-8 h-16 flex justify-center sm:justify-between items-center bg-[#e3e5e8] dark:bg-[#2f3136]">
        <div className="select-none hidden sm:block text-neutral-600 dark:text-neutral-400">
          {!isLast ? (
            <small>You are on step {current} of {total}</small>
          ) : (
            <small>You made it to the end 🎉</small>
          )}
        </div>
        <div className="select-none whitespace-nowrap">
          {!isFirst && (
            <button disabled={!hasPrev} onClick={prev} className="text-sm mr-2 px-4 py-2 rounded transition-colors text-black dark:text-white cursor-pointer bg-transparent hover:text-white hover:bg-[#4f545c] disabled:opacity-75 disabled:hover:bg-transparent disabled:cursor-not-allowed">Back</button>
          )}
          {!isLast ? (
            <button disabled={!hasNext} onClick={next} className="text-sm px-4 py-2 rounded transition-colors text-white cursor-pointer bg-[#5865f2] hover:bg-[#4752c4] disabled:opacity-75 disabled:hover:bg-[#5865f2] disabled:cursor-not-allowed">Continue</button>
          ) : (
            <div className="inline-block text-sm px-4 py-2 rounded transition-colors cursor-default text-white bg-[#3ba55c]">All done!</div>
          )}
        </div>
      </div>
    </div >
  )
}

const GetStartedSteps = () => {
  return (
    <Steps>
      <GetStartedStep title="Welcome!">
        <p>In this guide you will learn how to add the RDO Compendium bot to your server. To make sure you don't get overwhelmed by information right away, this guide is step based.</p>
        <p>These steps will take you through the process of adding RDO Compendium to your server. It will guide you through each of the steps of adding it and explain some things about the steps you'll take. At the end of the guide, you'll have the bot added to your bot, and you can start using it.</p>
        <p>If by the end of the steps you feel like you've missed something or if you just can't quite figure something out, we're here to help! Just <a href="https://rdo.gg/discord/" target="_blank">join the support server</a> and ask us to help you with getting the bot set up.</p>
        <p>Why don't you click the Continue button to get started?</p>
      </GetStartedStep>
      <GetStartedStep title="First things first">
        <p>To get started, you'll need to add the bot to your server. To do this, <a href="https://rdo.gg/invite/" target="_blank">visit the bot invite page</a>. Once you're on the page you should see something like this:</p>
        <div className="mb-4 text-center">
          <Image img={getStarted1} className="inline-block" alt="A screenshot showing Discord's external application invitation screen." />
        </div>
        <p>Pfew, that's a bit of information. What it's actually telling you is that you're about to add the RDO Compendium bot to one of your servers. It mentions that it will be able to create commands, and that's exactly what we want! What Discord means with being able to create commands is that the bot will be able to show commands like <code className="text-black dark:text-white">/find</code> to the users in your server.</p>
        <p>Let's go ahead and add the bot! Click Continue.</p>
      </GetStartedStep>
      <GetStartedStep title="Select your server">
        <p>Now that we're a little familiar with the page, you'll notice that there's a box on it:</p>
        <div className="mb-4 text-center">
          <Image img={getStarted2} className="inline-block" alt="A screenshot showing Discord's external application invitation screen. The 'Add to server' dropdown is highlighted." />
        </div>
        <p>If you click this box, you'll select the server you'll add the bot to. Maybe you have more than one server to add the bot to. If that's the case, pick one now! If you want to add the bot to multiple servers, you can always repeat these steps later.</p>
        <p>Click Continue when you've picked a server.</p>
      </GetStartedStep>
      <GetStartedStep title="Moving on">
        <p>This step is extremely simple. Once you've picked your server, you'll notice that the "Continue" button will become bright blue!</p>
        <div className="mb-4 text-center">
          <Image img={getStarted3} className="inline-block" alt="A screenshot showing Discord's external application invitation screen. The 'Continue' button is highlighted." />
        </div>
        <p>Simply click it to move on, and then click Continue here as well!</p>
      </GetStartedStep>
      <GetStartedStep title="Permissions o' plenty">
        <p>Now that we've moved on, we'll find a scary-looking page like this staring us down:</p>
        <div className="mb-4 text-center">
          <Image img={getStarted4} className="inline-block" alt="A screenshot showing Discord's external application permissions confirmation screen." />
        </div>
        <p>We've got this. There's a little bit of explaining to do about this page, so let's hit Continue and get to it.</p>
      </GetStartedStep>
      <GetStartedStep title="What are permissions?">
        <p>Let's closely look at the page. There's a whole bunch of check boxes and a list of permissions it's asking you to grant to RDO Compendium:</p>
        <div className="mb-4 text-center">
          <Image img={getStarted5} className="inline-block" alt="A screenshot showing Discord's external application permissions confirmation screen. The section listing the permissions is highlighted." />
        </div>
        <p>To make the bot work like it's supposed to, there's several things the bot needs to be able to do. The bot asks for those things right here. While you can find a more detailed explanation on the next page, the gist of these permissions is that the bot needs to be able to respond to your commands. To accomplish responding, it'll need to be able to. That's what you're granting here; the ability for the bot to effectively respond.</p>
        <p>Let's dive in on these permissions one by one, click Continue.</p>
      </GetStartedStep>
      <GetStartedStep title="All about permissions">
        <p>Like mentioned in the previous step, RDO Compendium asks for several permissions. Here's a list of them, what they do, and why RDO Compendium needs them.</p>
        <ul>
          <li>Manage Webhooks: Used to create, update and delete webhooks. Webhooks are a way for bots to send messages to your channels. RDO Compendium uses these for automated pings, like for Madam Nazar's new location.</li>
          <li>Send Messages: Used to send messages in channels the bot has access to. RDO Compendium uses this to occasionally send a message to respond to you, or to notify you of any changes in the bot.</li>
          <li>Send Messages in Threads: Used to send messages in threads specifically. RDO Compendium uses this in the <code className="text-black dark:text-white">/train</code> commands to update the group about the status of the train.</li>
          <li>Create Public Threads: Used to be able to create public threads. RDO Compendium uses this to create threads for <code className="text-black dark:text-white">/train</code> groups.</li>
          <li>Create Private Threads: Used to be able to create private threads. RDO Compendium uses this to create threads for <code className="text-black dark:text-white">/train</code> groups.</li>
          <li>Embed Links: Used to show previews of links, and to be able to post fancy-looking messages. RDO Compendium uses embeds for responses to any of your commands.</li>
          <li>Attach Files: Used to be able to upload media in channels the bot has access to. RDO Compendium uses this to be able to post images of for the location of Bears.</li>
          <li>Read Message History: Used to be able to read posted messages. RDO Compendium uses this to respond to your commands.</li>
          <li>Use External Emojis: Used to be able to use emojis from other servers. RDO Compendium uses this to display custom graphics made specifically for RDO content.</li>
        </ul>
        <p>That was a lot of reading. I don't blame you if you skipped some or all of it. In general, all you need to know is that with these permissions the bot can't kick or ban users, delete your channels, or do anything scary.</p>
        <p>Click Continue when you're ready.</p>
      </GetStartedStep>
      <GetStartedStep title="Almost there...">
        <p>Are you ready to get started with the bot? All you need to do is click the "Authorize" button:</p>
        <div className="mb-4 text-center">
          <Image img={getStarted6} className="inline-block" alt="A screenshot showing Discord's external application permissions confirmation screen. The 'Authorize' button is highlighted." />
        </div>
        <p>If you need to make changes to the permissions, feel free to do so now, though do note that if you disable too much, the bot may not be able to respond to you properly. If that's the case, you can always re-do these steps later by kicking the bot and following these steps again!</p>
        <p>Now, for the grand finale, click Continue.</p>
      </GetStartedStep>
      <GetStartedStep title="All done!">
        <p>That's it! You're done! The bot will now have joined your server, and you're ready to get started with RDO Compendium. Try out some commands and enjoy!</p>
        <div className="mb-4 text-center">
          <Image img={getStarted7} className="inline-block" alt="A screenshot showing Discord's external application authorized confirmation screen. It reads 'Authorized, you may now close this page'." />
        </div>
        <h3>Next steps</h3>
        <p>Now that you've added the bot, there's several things you can. Of course, you can start using commands right away, but if you need some pointers, try the following:</p>
        <ul>
          <li>Check out the <a href="/wiki/guides/commands">commands guide</a> for a list of commands and how to use them.</li>
          <li>Check out the <a href="/wiki/guides/settings">settings guide</a> for ways to configure the bot to your liking.</li>
          <li>Check out the <a href="/wiki/faq">FAQ page</a> for a list of frequently asked questions.</li>
          <li>Loving the bot? Check out the <a href="/wiki/guides/premium">premium guide</a> to see what you get if you decide you want a little more.</li>
          <li><a href="https://rdo.gg/discord/">Join the support Discord</a> to get help with anything at all or simply to chat with us.</li>
        </ul>
        <p>Thank you so much for using the guide, and we hope it showed you the way to adding RDO Compendium to your server!</p>
      </GetStartedStep>
    </Steps>
  );
};

const GetStarted = () => {
  return (
    <StepsProvider>
      <GetStartedSteps />
    </StepsProvider>
  );
};

export default GetStarted;