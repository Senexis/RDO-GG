import { type PatronsResponse } from '@site/types'
import clsx from 'clsx'
import React from 'react'
import { useFetch } from 'usehooks-ts'

function PatreonButtonsPlaceholder (): React.JSX.Element {
  return (
    <>
      <div>
        {[...Array(3)].map((_, i) => {
          const items = ['w-32', 'w-36', 'w-40', 'w-44', 'w-48']
          const width = items[Math.floor(Math.random() * items.length)]
          return (
            <div key={i} className={clsx(width, 'animate-pulse button button--secondary cursor-default m-2 block lg:inline-block')}>&nbsp;</div>
          )
        })}
      </div>
    </>
  )
}

function PatreonButtons (): React.JSX.Element {
  const { data } = useFetch<PatronsResponse>('https://api.rdo.gg/patrons/')

  if (data === undefined) return <PatreonButtonsPlaceholder />

  return (
    <>
      <div className="my-6">
        {data.tiers.map(tier => {
          if (tier.limit === null || tier.limit.count !== tier.limit.max) {
            return (
              <a key={tier.title} href={tier.url} target="_blank" rel="noopener noreferrer" className="button button--secondary m-2 block lg:inline-block">{tier.title} for €{tier.amount_cents / 100}/mo</a>
            )
          } else {
            return (
              <button disabled key={tier.title} className="button button--secondary m-2 block lg:inline-block bg-transparent" style={{ color: 'var(--ifm-font-color-base)' }}>{tier.title} (Sold out)</button>
            )
          }
        })}
      </div>
    </>
  )
}

export default PatreonButtons
