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
  }

  return (
    <>
      {Object.keys(data).map(category => (
        <section>
          <h2>{categories[category] ?? category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4 mb-8">
            {data[category].map(item => (
              <div key={item.id} className="overflow-hidden flex flex-row items-center bg-gray-700 shadow-sm p-2 rounded">
                <img loading="lazy" className="inline-block w-10 h-10 mr-2 object-cover" src={item.url} alt={item.name} />
                <div className="text-white">{item.name}</div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default Toasts;