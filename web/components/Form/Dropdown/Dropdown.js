import { useState, useEffect, useRef } from 'react'

import styles from './style.module.scss'

export const Dropdown = ({ items, selected, handler, className }) => {
  const ref = useRef([])
  const containerRef = useRef()
  const [isOpen, setIsOpen] = useState(false)
  const [isOpacity, setIsOpacity] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    setIsOpacity(true)
  }, [])

  function charIsLetter(char) {
    if (typeof char !== 'string') {
      return false
    }

    return /^[a-z]+$/i.test(char)
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // alert('You clicked outside of me!')
          setIsOpen(false)
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  useOutsideAlerter(wrapperRef)

  const scrollToRef = (firstLetter) => {
    const top = ref?.current?.find(isFirstElement)?.offsetTop
    function isFirstElement(element) {
      return element?.innerText?.toLowerCase().startsWith(firstLetter)
    }
    containerRef?.current.scrollTo({
      top: top,
      left: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    function findSelectedLetter(event) {
      isOpen && charIsLetter(event.key) && scrollToRef(event.key)
    }
    document.addEventListener('keydown', findSelectedLetter)

    return () => {
      document.removeEventListener('keydown', findSelectedLetter)
    }
  }, [isOpen])

  return (
    <div ref={wrapperRef} className={`${styles.dropdown} dropdown relative`}>
      <div
        className={`${isOpen ? 'visible' : ''} ${
          isOpacity ? 'opacity-80' : ''
        } pointer current transition p-1x border-light l-height-2 w-full rounded-xSmall ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected.title}
      </div>
      <ul
        ref={containerRef}
        className={`${
          isOpen ? 'visible' : ''
        } select-list transition absolute w-full bg-white index-1`}
      >
        {items.map((item, index) => {
          return (
            <li
              key={item.value}
              ref={(element) => {
                if (!element?.classList.value.includes('hidden')) ref.current[index] = element
              }}
              data-value={item.value}
              onClick={() => {
                handler(item)
                setIsOpen(!isOpen)
                setIsOpacity(false)
              }}
              className={`pointer item transition flex align-center ${
                index ? '' : 'disable hidden'
              }`}
            >
              {item.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
