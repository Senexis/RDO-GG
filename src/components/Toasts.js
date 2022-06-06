import Image from '@theme/IdealImage';
import clsx from 'clsx';
import React from 'react';
import useFetch from '../useFetch';

const ToastsPlaceholder = () => {
  return (
    <>
      <div className="animate-pulse mb-4">
        {[...Array(3)].map((_, i) => {
          const items = ['w-8', 'w-10', 'w-12', 'w-14', 'w-16', 'w-20', 'w-24', 'w-28', 'w-32'];
          const width = items[Math.floor(Math.random() * items.length)];
          return (
            <div key={i} className={clsx(width, 'inline-block h-6 bg-[#ebedf0] rounded mr-2')}></div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4 mb-8">
        {[...Array(9)].map((_, i) => {
          const items = ['w-8', 'w-10', 'w-12', 'w-14', 'w-16', 'w-20', 'w-24'];
          const width = items[Math.floor(Math.random() * items.length)];
          return (
            <div key={i} className="animate-pulse flex flex-row items-center bg-gray-700 shadow-sm p-2 rounded">
              <div className="inline-block w-10 h-10 bg-gray-400 rounded mr-2"></div>
              <div className={clsx(width, 'inline-block h-2 bg-[#ebedf0] rounded mr-2')}></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const Toasts = () => {
  const { data, loading, error } = useFetch('/json/toasts.json');

  if (loading || error || !data) return <ToastsPlaceholder />;

  const categories = {
    awards: 'Awards',
    blip: 'Blips',
    challenges: 'Challenges',
    events: 'Free Roam Events',
    hud: 'UI/HUD',
    mp_daily_objective: 'Daily Challenges',
    mp_generic: 'Generic',
    mp_roles: 'Roles',
  };

  const subcategories = {
    set_a: 'Sharpshooter',
    set_b: 'Combat',
    set_c: 'Hunting',
    set_d: 'Survivalist',
    set_e: 'Crimes',
    set_f: 'Travel',
    set_g: 'Trade',
    set_h: 'General',
    set_i: 'Horse',
    set_k: 'Posse',
    set_l: 'Freemode',
    set_m: 'Competitive',
    set_n: 'Moonshiner',
    set_o: 'Unknown',
    set_p: 'Bounty Hunter',
    set_q: 'Collector',
    set_r: 'Trader',
    set_s: 'Naturalist',
    bandit: 'Bandit',
    explorer: 'Explorer',
    gambler: 'Gambler',
    herbalist: 'Herbalist',
    horsemanship: 'Horsemanship',
    master_hunter: 'Master Hunter',
    sharpshooter: 'Sharpshooter',
    survivalist: 'Survivalist',
    weapons_expert: 'Weapons Expert',
  }

  const results = [];

  Object.keys(data).map(category => {
    if (Array.isArray(data[category])) {
      const name = categories[category] ?? category;
      results.push({
        id: category,
        name: name,
        element: (
          <>
            <h2 className="anchor anchorWithStickyNavbar_node_modules-@docusaurus-theme-classic-lib-theme-Heading-styles-module" id={category}>
              {name}
              <a className="hash-link" href={`#${category}`} title="Direct link to heading">​</a>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4 mb-8">
              {data[category].map(item => (
                <div key={item.id} className="overflow-hidden flex flex-row items-center bg-gray-700 shadow-sm p-2 rounded">
                  <Image img={require(`../../static${item.url}`)} className="inline-block w-10 h-10 mr-2 object-cover" alt={item.name} />
                  <div className="leading-snug text-white">{item.name}</div>
                </div>
              ))}
            </div>
          </>
        )
      });
    } else {
      Object.keys(data[category]).map(subcategory => {
        const name = `${categories[category] ?? category} - ${subcategories[subcategory] ?? subcategory}`;
        results.push({
          id: subcategory,
          name: name,
          element: (
            <>
              <h2 className="anchor anchorWithStickyNavbar_node_modules-@docusaurus-theme-classic-lib-theme-Heading-styles-module" id={subcategory}>
                {name}
                <a className="hash-link" href={`#${subcategory}`} title="Direct link to heading">​</a>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4 mb-8">
                {data[category][subcategory].map(item => (
                  <div key={item.id} className="overflow-hidden flex flex-row items-center bg-gray-700 shadow-sm p-2 rounded">
                    <Image img={require(`../../static${item.url}`)} className="inline-block w-10 h-10 mr-2 object-cover" alt={item.name} />
                    <div className="leading-snug text-white">{item.name}</div>
                  </div>
                ))}
              </div>
            </>
          )
        });
      });
    }
  })

  return (<>{results.sort((a, b) => a.name.localeCompare(b.name)).map(item => (<section key={item.id}>{item.element}</section>))}</>);
};

export default Toasts;