import React from 'react'

const SectionTitle = ({titlePosition, title, subtitle}) => {
  return (
    <div className={`section-title ${titlePosition}`}>
        <h6 className='title uppercase'>{title}</h6>
        <h2 className='subtitle uppercase'>{subtitle}</h2>
    </div>
  )
}

export default SectionTitle