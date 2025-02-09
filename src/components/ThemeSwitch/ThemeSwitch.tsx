import React, { useEffect, useState } from 'react'
import './index.css'

interface Props {
  label?: string
  className?: string
}

const ThemeSwitch: React.FC<Props> = ({ label, className }) => {
  const [isLight, setIsLight] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'light'
    }
    return true
  })

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isLight ? 'light' : 'dark',
    )
    localStorage.setItem('theme', isLight ? 'light' : 'dark')
  }, [isLight])

  const handleChange = () => {
    setIsLight(!isLight)
  }

  return (
    <label className={`ac-theme-switch-wrapper ${className}`}>
      <input
        data-theme-switch
        className="ac-theme-switch"
        aria-checked={isLight}
        type="checkbox"
        checked={isLight}
        onChange={handleChange}
      />
      <svg
        className="ac-theme-switch-icon ac-theme-switch-icon--dark"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm-4.184-.599l-3.593-3.594-1.415 1.414 3.595 3.595c.401-.537.876-1.013 1.413-1.415zm4.184-1.401c.34 0 .672.033 1 .08v-5.08h-2v5.08c.328-.047.66-.08 1-.08zm5.598 2.815l3.595-3.595-1.414-1.414-3.595 3.595c.537.402 1.012.878 1.414 1.414zm-12.598 4.185c0-.34.033-.672.08-1h-5.08v2h5.08c-.047-.328-.08-.66-.08-1zm11.185 5.598l3.594 3.593 1.415-1.414-3.594-3.593c-.403.536-.879 1.012-1.415 1.414zm-9.784-1.414l-3.593 3.593 1.414 1.414 3.593-3.593c-.536-.402-1.011-.877-1.414-1.414zm12.519-5.184c.047.328.08.66.08 1s-.033.672-.08 1h5.08v-2h-5.08zm-6.92 8c-.34 0-.672-.033-1-.08v5.08h2v-5.08c-.328.047-.66.08-1 .08z"
          fill="currentColor"
        ></path>
      </svg>
      <svg
        className="ac-theme-switch-icon ac-theme-switch-icon--light"
        viewBox="0 0 24 24"
      >
        <path
          d="M10.719 2.082c-2.572 2.028-4.719 5.212-4.719 9.918 0 4.569 1.938 7.798 4.548 9.895-4.829-.705-8.548-4.874-8.548-9.895 0-5.08 3.808-9.288 8.719-9.918zm1.281-2.082c-6.617 0-12 5.383-12 12s5.383 12 12 12c1.894 0 3.87-.333 5.37-1.179-3.453-.613-9.37-3.367-9.37-10.821 0-7.555 6.422-10.317 9.37-10.821-1.74-.682-3.476-1.179-5.37-1.179zm0 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001z"
          fill="currentColor"
        ></path>
      </svg>
      {label ? (
        <span className="ac-theme-switch-label">{label}</span>
      ) : (
        <span className="ac-theme-switch-label ac-theme-switch-label--hidden">
          Toggle theme
        </span>
      )}
    </label>
  )
}

export default ThemeSwitch
