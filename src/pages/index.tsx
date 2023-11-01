/* eslint-disable import/no-absolute-path */

// @ts-expect-error ts(2307)
import Image from '@theme/IdealImage'

import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import React from 'react'
import { Background, Parallax } from 'react-parallax'

// @ts-expect-error ts(2307)
import logo from '/img/logo.png'

// @ts-expect-error ts(2307)
import parallax from '/img/parallax.jpg'

// @ts-expect-error ts(2307)
import pic034 from '/img/stock/pic034.jpg'

// @ts-expect-error ts(2307)
import pic057 from '/img/stock/pic057.jpg'

// @ts-expect-error ts(2307)
import pic059 from '/img/stock/pic059.jpg'

// @ts-expect-error ts(2307)
import pic076 from '/img/stock/pic076.jpg'

// @ts-expect-error ts(2307)
import pic077 from '/img/stock/pic077.jpg'

// @ts-expect-error ts(2307)
import pic148 from '/img/stock/pic148.jpg'

// @ts-expect-error ts(2307)
import pic150 from '/img/stock/pic150.jpg'

// @ts-expect-error ts(2307)
import pic155 from '/img/stock/pic155.jpg'

export default function Home (): React.JSX.Element {
  return (
    <Layout title='Home'>
      <Parallax strength={500}>
        <div className="container mx-auto flex px-5 py-20 lg:py-32 items-center justify-center flex-col">
          <div className="w-full md:w-5/6 lg:w-3/4 2xl:w-2/3 text-center">
            <Image img={logo} shouldAutoDownload={() => true} className="inline-block w-2/3 lg:w-1/2 mb-8" />
            <p className="leading-relaxed mb-8">Welcome! Here you can find various links regarding everything that has to do with RDO.GG and RDO Compendium. You'll be able to find information and quick access to various resources on this page.</p>
            <div className="text-center">
              <Link className="button button--secondary button--lg m-2 block lg:inline-block" to="https://rdo.gg/invite/">
                Invite RDO Compendium
              </Link>
              <Link className="button button--secondary button--lg m-2 block lg:inline-block" to="/wiki/getting-started">
                Getting Started
              </Link>
              <Link className="button button--secondary button--lg m-2 block lg:inline-block" to="https://rdo.gg/status/">
                Status
              </Link>
            </div>
          </div>
        </div>
        <div className="px-5 py-12 mx-auto flex flex-wrap">
          <div className="w-full md:w-5/6 lg:w-3/4 2xl:w-2/3 mx-auto">
            <div className="flex flex-wrap -mx-2">
              <div className="p-2 w-full">
                <Link to="https://rdo.gg/invite" className="min-h-[30vh] lg:min-h-[40vh] flex flex-wrap w-full py-32 px-10 relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image img={pic155} shouldAutoDownload={() => true} className="home-link-block" />
                  </div>
                  <div className="absolute inset-0 p-8 lg:p-16 bg-[#9725] hover:bg-transparent flex justify-center items-center transition-colors">
                    <div className="w-full text-white">
                      <h2 className="mb-2"><span className="mr-2 fa-solid fa-robot"></span> Invite RDO Compendium</h2>
                      <hr className="my-4" />
                      <p className="leading-relaxed line-clamp-3 md:line-clamp-2 mb-0">RDO Compendium is a Discord bot that allows you to locate different types of collectibles, missions, herbs, animals, shops, treasures, and more within Red Dead Redemption 2 and Red Dead Online.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="p-2 w-full lg:w-1/2">
                <Link to="/wiki/getting-started" className="min-h-[30vh] flex flex-wrap w-full sm:py-24 py-16 sm:px-10 px-6 relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image img={pic077} shouldAutoDownload={() => true} className="home-link-block" />
                  </div>
                  <div className="absolute inset-0 p-8 lg:p-16 bg-[#9725] hover:bg-transparent flex justify-center items-center transition-colors">
                    <div className="w-full text-white">
                      <h2 className="mb-2"><span className="mr-2 fa-solid fa-graduation-cap"></span> Getting Started</h2>
                      <hr className="my-4" />
                      <p className="leading-relaxed line-clamp-3 md:line-clamp-2 mb-0">Follow a step-by-step guide on how to add RDO Compendium to your server with some explanation about the key steps along the way.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="p-2 w-full lg:w-1/2">
                <Link to="/news" className="min-h-[30vh] flex flex-wrap w-full sm:py-24 py-16 sm:px-10 px-6 relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image img={pic057} shouldAutoDownload={() => true} className="home-link-block" />
                  </div>
                  <div className="absolute inset-0 p-8 lg:p-16 bg-[#9725] hover:bg-transparent flex justify-center items-center transition-colors">
                    <div className="w-full text-white">
                      <h2 className="mb-2"><span className="mr-2 fa-solid fa-newspaper"></span> News &amp; Updates</h2>
                      <hr className="my-4" />
                      <p className="leading-relaxed line-clamp-3 md:line-clamp-2 mb-0">Read all about the latest news regarding RDO.GG and RDO Compendium, as well as general updates.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="p-2 w-full">
                <Link to="https://tunables.rdo.gg/" className="min-h-[30vh] lg:min-h-[40vh] flex flex-wrap w-full py-32 px-10 relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image img={pic148} shouldAutoDownload={() => true} className="home-link-block" />
                  </div>
                  <div className="absolute inset-0 p-8 lg:p-16 bg-[#9725] hover:bg-transparent flex justify-center items-center transition-colors">
                    <div className="w-full text-white">
                      <h2 className="mb-2"><span className="mr-2 fa-solid fa-wrench"></span> RDO.GG Tunables</h2>
                      <hr className="my-4" />
                      <p className="leading-relaxed line-clamp-3 md:line-clamp-2 mb-0">RDO.GG Tunables is a useful tool that allows you to follow and compare the latest changes to the in-game tunables for both Red Dead Online and GTA Online. It allows you to see at a glance what's changed and what the latest sales are.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="p-2 w-full lg:w-1/2">
                <Link to="https://rdo.gg/discord" className="min-h-[30vh] flex flex-wrap w-full sm:py-24 py-16 sm:px-10 px-6 relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image img={pic150} shouldAutoDownload={() => true} className="home-link-block" />
                  </div>
                  <div className="absolute inset-0 p-8 lg:p-16 bg-[#9725] hover:bg-transparent flex justify-center items-center transition-colors">
                    <div className="w-full text-white">
                      <h2 className="mb-2"><span className="mr-2 fa-brands fa-discord"></span> Join the Discord</h2>
                      <hr className="my-4" />
                      <p className="leading-relaxed line-clamp-3 md:line-clamp-2 mb-0">Join the Discord Server now to get help if you experience issues, read about updates, ask questions, or just chat.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="p-2 w-full lg:w-1/2">
                <Link to="https://rdo.gg/patreon" className="min-h-[30vh] flex flex-wrap w-full sm:py-24 py-16 sm:px-10 px-6 relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image img={pic059} shouldAutoDownload={() => true} className="home-link-block" />
                  </div>
                  <div className="absolute inset-0 p-8 lg:p-16 bg-[#9725] hover:bg-transparent flex justify-center items-center transition-colors">
                    <div className="w-full text-white">
                      <h2 className="mb-2"><span className="mr-2 fa-brands fa-patreon"></span> Visit Patreon</h2>
                      <hr className="my-4" />
                      <p className="leading-relaxed line-clamp-3 md:line-clamp-2 mb-0">If you one day find yourself impressed by RDO.GG, please consider pledging to our Patreon. It helps a lot, and you get some cool benefits.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="p-2 w-full lg:w-1/2">
                <Link to="https://rdo.gg/x" className="min-h-[30vh] flex flex-wrap w-full sm:py-24 py-16 sm:px-10 px-6 relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image img={pic076} shouldAutoDownload={() => true} className="home-link-block" />
                  </div>
                  <div className="absolute inset-0 p-8 lg:p-16 bg-[#9725] hover:bg-transparent flex justify-center items-center transition-colors">
                    <div className="w-full text-white">
                      <h2 className="mb-2"><span className="mr-2 fa-brands fa-x-twitter"></span> Posts on X</h2>
                      <hr className="my-4" />
                      <p className="leading-relaxed line-clamp-3 md:line-clamp-2 mb-0">Read all about the latest news, tips, and updates on X. Also, feel free to connect with us through direct messaging!</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="p-2 w-full lg:w-1/2">
                <Link to="/api" className="min-h-[30vh] flex flex-wrap w-full sm:py-24 py-16 sm:px-10 px-6 relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image img={pic034} shouldAutoDownload={() => true} className="home-link-block" />
                  </div>
                  <div className="absolute inset-0 p-8 lg:p-16 bg-[#9725] hover:bg-transparent flex justify-center items-center transition-colors">
                    <div className="w-full text-white">
                      <h2 className="mb-2"><span className="mr-2 fa-solid fa-code"></span> RDO.GG API</h2>
                      <hr className="my-4" />
                      <p className="leading-relaxed line-clamp-3 md:line-clamp-2 mb-0">The RDO.GG API is a developer resource that aims to centralize most data for use in various applications.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Background className="parallax-wrapper">
          <Image img={parallax} shouldAutoDownload={() => true} className="parallax-img"></Image>
        </Background>
      </Parallax>
    </Layout>
  )
}
