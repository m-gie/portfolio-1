import React from 'react'

const MagicButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
}: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
  return (
    <button className='inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-600 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] gap-2 font-medium text-slate-300 transition-colors focus:outline-none md:w-57 md:mt-10' onClick={handleClick}>
      <span className={`inline-flex h-full cursor-pointer items-center justify-center rounded-full px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 hover:bg-transparent ${otherClasses}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  )
}

export default MagicButton