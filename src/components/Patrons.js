import clsx from 'clsx';
import React from 'react';
import useFetch from '../useFetch';

const PatronsPlaceholder = () => {
  return (
    <>
      <div>
      {[...Array(3)].map((_, i) => {
          const items = ['w-32', 'w-36', 'w-40', 'w-44', 'w-48'];
          const width = items[Math.floor(Math.random() * items.length)];
          return (
            <div key={i} className={clsx(width, 'animate-pulse button button--secondary cursor-default m-2 block lg:inline-block')}>&nbsp;</div>
          );
        })}
      </div>
      <h2>Patrons</h2>
      <div className="animate-pulse mb-4">
        {[...Array(6)].map((_, i) => {
          const items = ['w-8', 'w-10', 'w-12', 'w-14', 'w-16', 'w-20', 'w-24', 'w-28', 'w-32', 'w-36', 'w-40', 'w-44', 'w-48'];
          const width = items[Math.floor(Math.random() * items.length)];
          return (
            <div key={i} className={clsx(width, 'inline-block h-2 bg-gray-600 dark:bg-gray-400 rounded mr-2')}></div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4 mb-8">
        {[...Array(9)].map((_, i) => {
          const items = ['w-8', 'w-10', 'w-12', 'w-14', 'w-16', 'w-20', 'w-24', 'w-28', 'w-32', 'w-36', 'w-40', 'w-44', 'w-48'];
          const width = items[Math.floor(Math.random() * items.length)];
          return (
            <div key={i} className="animate-pulse flex flex-row items-center justify-between h-10 bg-gray-300 dark:bg-gray-700 shadow-sm p-2 rounded">
              <div className={clsx(width, 'inline-block h-2 bg-gray-600 dark:bg-gray-400 rounded mr-2')}></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const Patrons = () => {
  const { data, loading, error } = useFetch('https://api.rdo.gg/patrons/');

  if (loading || error) return <PatronsPlaceholder />;

  return (
    <>
      <div>
        {data?.tiers.map(tier => (
          <a key={tier.title} href={tier.url} target="_blank" className="button button--secondary m-2 block lg:inline-block">{tier.title} for €{tier.amount_cents / 100}/mo</a>
        ))}
      </div>
      <h2>Patrons</h2>
      <p>Thank you so much to the {data?.patrons?.length} patrons that help support the bot:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4 mb-8">
        {data?.patrons?.map(patron => (
          <div key={patron} className="flex flex-row items-center justify-between bg-gray-300 dark:bg-gray-700 shadow-sm p-2 rounded">
            <div className="text-black dark:text-white truncate">{patron}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Patrons;