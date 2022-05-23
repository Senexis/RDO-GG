import clsx from 'clsx';
import React from 'react';
import useFetch from '../useFetch';

const TranslatorsPlaceholder = () => {
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
      <div className="animate-pulse mb-4">
        {[...Array(6)].map((_, i) => {
          const items = ['w-8', 'w-10', 'w-12', 'w-14', 'w-16', 'w-20', 'w-24', 'w-28', 'w-32'];
          const width = items[Math.floor(Math.random() * items.length)];
          return (
            <div key={i} className={clsx(width, 'inline-block h-2 bg-[#ebedf0] rounded mr-2')}></div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4 mb-8">
        {[...Array(9)].map((_, i) => {
          const items = ['w-8', 'w-10', 'w-12', 'w-14', 'w-16', 'w-20', 'w-24'];
          const width = items[Math.floor(Math.random() * items.length)];
          return (
            <div key={i} className="animate-pulse flex flex-row items-center justify-between h-10 bg-gray-700 shadow-sm p-2 rounded">
              <div className={clsx(width, 'inline-block h-2 bg-[#ebedf0] rounded mr-2')}></div>
              <div className="inline-block w-8 h-2 bg-gray-400 rounded mr-2"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const Translators = () => {
  const { data, loading, error } = useFetch('https://api.rdo.gg/translations/');

  if (loading || error) return <TranslatorsPlaceholder />;

  return (
    <>
      {data?.languages?.map(language => {
        return (
          <div key={language?.id} className={clsx(Object.keys(language?.translators).length ? '' : 'hidden')}>
            <h2>{language?.name} ({language?.native})</h2>
            <p>This language is {language?.progress}% translated thanks to:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4 mb-8">
              {Object.entries(language?.translators).map(([translator, count]) => (
                <div key={translator} className="flex flex-row items-center justify-between bg-gray-700 shadow-sm p-2 rounded">
                  <div className="text-white truncate">{translator}</div>
                  <div className="text-sm text-gray-400 ml-2">{new Intl.NumberFormat().format(count)}</div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </>
  );
};

export default Translators;