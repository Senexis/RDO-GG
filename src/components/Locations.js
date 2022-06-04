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
            <div key={i} className="animate-pulse text-center bg-gray-700 shadow-sm p-2 rounded">
              <div className="w-full h-12 bg-gray-400 rounded mb-1"></div>
              <div className={clsx(width, 'inline-block h-2 bg-[#ebedf0] rounded')}></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const Toasts = () => {
  const { data, loading, error } = useFetch('/json/locations.json');

  if (loading || error || !data) return <ToastsPlaceholder />;

  const categories = {
    district: 'Districts',
    hideout: 'Hideouts',
    homestead: 'Homesteads',
    landmark: 'Landmarks',
    settlement: 'Settlements',
    state: 'States',
    town: 'Towns',
    water: 'Bodies of Water',
  }

  return (
    <>
      {Object.keys(data).map(category => (
        <section>
          <h2>{categories[category] ?? category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4 mb-8">
            {data[category].map(item => (
              <div key={item.id} className="overflow-hidden text-center bg-gray-700 shadow-sm p-2 rounded">
                <img loading="lazy" className="block w-full h-auto object-cover mb-1" src={item.url} alt={item.name} />
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