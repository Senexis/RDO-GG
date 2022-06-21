import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';
import useFetch from '../useFetch';

const Instatus = ({
  Text,
  UpColor,
  HasIssuesColor,
  UnderMaintenanceColor
}) => {
  const { data, loading, error } = useFetch('https://rdo.instatus.com/summary.json');
  const opacity = (loading || error || !data) ? 'opacity-0' : 'opacity-100';
  const animatePing = (loading || error || !data) ? '' : 'animate-ping';
  const color = data?.page?.status === 'UP' ? UpColor : data?.page?.status === 'HASISSUES' ? HasIssuesColor : UnderMaintenanceColor;
  return (
    <>
      <Link className="relative button button--secondary button--lg m-2 block lg:inline-block" to="https://rdo.instatus.com">
        {Text}
        <span className={clsx(opacity, 'flex absolute h-4 w-4 top-0 right-0 -mt-2 -mr-2 transition-opacity')}>
          <span className={clsx(animatePing, 'absolute inline-flex h-full w-full rounded-full opacity-75')} style={{ backgroundColor: color }}></span>
          <span className="relative inline-flex rounded-full h-4 w-4" style={{ backgroundColor: color }}></span>
        </span>
      </Link>
    </>
  )
}

export default Instatus;