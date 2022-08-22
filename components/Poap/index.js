import Link from 'next/link'
import { useGetPoapsQuery } from '../../app/poapApi'
import { CommonCheck } from './CommonCheck'

export const PoapAvatar = ({ poapData, isCommon }) => {
  // TODO: comapre to own POAPS and mark as common
  return (
    <>
      <button
        className={`w-full h-full hover:scale-105 transition ease-in-out duration-300 transform-gpu`}
      >
        <div className="w-full h-full rounded-full shadow-xl outline-neonPurple outline outline-2">
          <Link href={poapData.event.event_url}>
            <img
              className="rounded-full bg-indigo-400 dark:bg-neonPurple"
              src={poapData.event.image_url}
              // src={require(poapData.event.image_url)}
              alt="avatar"
              title={poapData.event.name}
            />
          </Link>
        </div>
        {isCommon && (
          <span className="absolute top-0 right-0 block h-1/4 w-1/4 rounded-full ring-2 ring-snow dark:ring-zinc-800 bg-neonPurple">
            <CommonCheck />
          </span>
        )}
      </button>
    </>
  )
}
