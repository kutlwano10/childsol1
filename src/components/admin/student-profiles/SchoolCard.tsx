import React from 'react'
import Image from 'next/image'
import Title from '@/components/ui/Title'



interface SchoolCardProps {
  imageSrc: string
  title: string
  subtitle?: string
  selected?: boolean
  onClick?: () => void
}

const SchoolCard: React.FC<SchoolCardProps> = ({
  imageSrc,
  title,
  subtitle,
  selected = false,
  onClick,
}) => {
  return (
    <div
      className={`flex w-78 shadow-sm h-72 flex-col hover:text-white items-center p-5 rounded-3xl cursor-pointer transition-all ${
        selected ? 'bg-[#FFB800]/90 text-white' : 'bg-white hover:text-white hover:bg-[#FFB800]/90 text-black shadow-sm'
      }`}
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-2xl w-60 h-36 mb-4">
        <Image
          src={imageSrc}
          alt={title}
          width={240}
          height={144}
          className="object-cover w-full h-full"
        />
      </div>
      <Title level={3}
        className={`text-base font-semibold ${
          selected ? 'text-white' : 'text-[#0F172A] '
        }`}
      >
        {title}
      </Title >
      <p className={`text-sm ${selected ? 'text-white' : 'text-[#4B5563]'}`}>
        {subtitle}
      </p>
    </div>
  )
}

export default SchoolCard

