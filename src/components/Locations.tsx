// @ts-expect-error ts(2307)
import Image from '@theme/IdealImage';

import { type LocationResponse } from '@site/types';
import clsx from 'clsx';
import React from 'react';
import { useFetch } from 'usehooks-ts';

function ToastsPlaceholder(): React.JSX.Element {
  return (
    <>
      <div className="animate-pulse mb-4">
        {[...Array(2)].map((_, i) => {
          const items = ['w-8', 'w-10', 'w-12', 'w-14', 'w-16', 'w-20', 'w-24', 'w-28', 'w-32'];
          const width = items[Math.floor(Math.random() * items.length)];
          return (
            <div key={i} className={clsx(width, 'inline-block h-6 bg-neutral-600 dark:bg-neutral-400 rounded mr-2')}></div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4 mb-8">
        {[...Array(15)].map((_, i) => {
          const items = ['w-8', 'w-10', 'w-12', 'w-14', 'w-16', 'w-20', 'w-24'];
          const width = items[Math.floor(Math.random() * items.length)];
          return (
            <div key={i} className="animate-pulse text-center bg-neutral-300 dark:bg-neutral-700 shadow-sm p-2 rounded">
              <div className="w-full h-12 bg-neutral-600 dark:bg-neutral-400 rounded mb-1"></div>
              <div className={clsx(width, 'inline-block h-2 bg-neutral-600 dark:bg-neutral-400 rounded')}></div>
            </div>
          );
        })}
      </div>
      <div className="animate-pulse mb-4">
        {[...Array(2)].map((_, i) => {
          const items = ['w-8', 'w-10', 'w-12', 'w-14', 'w-16', 'w-20', 'w-24', 'w-28', 'w-32'];
          const width = items[Math.floor(Math.random() * items.length)];
          return (
            <div key={i} className={clsx(width, 'inline-block h-6 bg-neutral-600 dark:bg-neutral-400 rounded mr-2')}></div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4 mb-8">
        {[...Array(11)].map((_, i) => {
          const items = ['w-8', 'w-10', 'w-12', 'w-14', 'w-16', 'w-20', 'w-24'];
          const width = items[Math.floor(Math.random() * items.length)];
          return (
            <div key={i} className="animate-pulse text-center bg-neutral-300 dark:bg-neutral-700 shadow-sm p-2 rounded">
              <div className="w-full h-12 bg-neutral-600 dark:bg-neutral-400 rounded mb-1"></div>
              <div className={clsx(width, 'inline-block h-2 bg-neutral-600 dark:bg-neutral-400 rounded')}></div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function Toasts(): React.JSX.Element {
  const { data } = useFetch<LocationResponse>('/json/locations.json');

  if (data === undefined) return <ToastsPlaceholder />;

  const categories = {
    district: 'Districts',
    hideout: 'Hideouts',
    homestead: 'Homesteads',
    landmark: 'Landmarks',
    settlement: 'Settlements',
    state: 'States',
    town: 'Towns',
    water: 'Bodies of Water',
  };

  return (
    <>
      {Object.keys(data).map(category => (
        <section key={category}>
          <h2 className="anchor anchorWithStickyNavbar_node_modules-@docusaurus-theme-classic-lib-theme-Heading-styles-module" id={category}>
            {categories[category] ?? category}
            <a className="hash-link" href={`#${category}`} title="Direct link to heading">&nbsp;</a>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4 mb-8">
            {data[category].map(item => (
              <div key={item.id} className="overflow-hidden text-center bg-neutral-300 dark:bg-neutral-700 shadow-sm p-2 rounded">
                <Image img={require(`../../static${item.url}`)} className="overflow-hidden block w-full h-auto object-cover mb-1" alt={item.name} />
                <div className="text-black dark:text-white">{item.name}</div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

export default Toasts;
