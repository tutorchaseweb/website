import { useState, useEffect } from 'react'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { PortableText } from '@portabletext/react'

import styles from './style.module.scss'

const FaqItem = ({ item }) => {
  const [active, setActive] = useState(false)

  return (
    <div className="item" key={item._key}>
      <h3
        className={`question pointer ${active ? 'active' : ''}`}
        onClick={() => setActive(!active)}
      >
        {item.question}
      </h3>
      <div className={`answer ${active ? 'open' : ''}`}>
        <PortableText value={item.answer} />
      </div>
    </div>
  )
}

export const FAQ = ({ faqSection: { sectionHead, questions } = {}, className = '' }) => {
  const [faq, setFaq] = useState(null)
  useEffect(async () => {
    const query = groq`
      *[_type == 'faq'][0] {
        ...,
      }
    `
    setFaq(await client.fetch(query))
  }, [])

  return (
    <section
      className={`faq-block pt-10x pt-18x_lg pb-2x pb-10x_lg ${styles.faqBlock} ${className}`}
    >
      {Boolean(faq) && (
        <div className="container narrow">
          <div className="cover flex items-center">
            <div className="text mb-4x mb-0x_lg mr-8x_lg">
              {Boolean(sectionHead?.preTitle) && (
                <p className="before-title fw-600 l-height-1 uppercase color-lightGray mb-3x">
                  {sectionHead.preTitle}
                </p>
              )}
              {Boolean(sectionHead?.title) && (
                <h2 className="section-title fw-600 mb-4x">{sectionHead.title}</h2>
              )}
              {Boolean(sectionHead?.description) && (
                <div className="description fz-18p l-height-1/5">
                  <PortableText value={sectionHead.description} />
                </div>
              )}
            </div>
            <div className="wrapper flex-1">
              <div className="accordion">
                {Boolean(questions?.length) &&
                  questions.map((item) => {
                    return <FaqItem key={item._key} item={item} />
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default FAQ
