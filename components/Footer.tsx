import * as React from 'react'
import { FaZhihu } from '@react-icons/all-files/fa/FaZhihu'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'

import { useDarkMode } from 'lib/use-dark-mode'
import * as config from 'lib/config'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2022 MMA Combat Sports Club</div>

      <div className={styles.settings}>
        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        )}
      </div>

      <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            
<svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" viewBox="-44.7006 -60.54775 387.4052 363.2865"><path fill="#1da1f2" d="M93.719 242.19c112.46 0 173.96-93.168 173.96-173.96 0-2.646-.054-5.28-.173-7.903a124.338 124.338 0 0030.498-31.66c-10.955 4.87-22.744 8.148-35.11 9.626 12.622-7.57 22.313-19.543 26.885-33.817a122.62 122.62 0 01-38.824 14.841C239.798 7.433 223.915 0 206.326 0c-33.764 0-61.144 27.381-61.144 61.132 0 4.798.537 9.465 1.586 13.941-50.815-2.557-95.874-26.886-126.03-63.88a60.977 60.977 0 00-8.279 30.73c0 21.212 10.794 39.938 27.208 50.893a60.685 60.685 0 01-27.69-7.647c-.009.257-.009.507-.009.781 0 29.61 21.075 54.332 49.051 59.934a61.218 61.218 0 01-16.122 2.152 60.84 60.84 0 01-11.491-1.103c7.784 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.798-.28-14.584-.846 27.059 17.344 59.189 27.464 93.722 27.464"/></svg>
          </a>
        )}

        {config.zhihu && (
          <a
            className={styles.zhihu}
            href={`https://zhihu.com/people/${config.zhihu}`}
            title={`Zhihu @${config.zhihu}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaZhihu />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://instagram.com/${config.github}`}
            title={`Instagram @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            
            

            <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" viewBox="-100.7682 -167.947 873.3244 1007.682"><g fill="#fff"><path d="M335.895 0c-91.224 0-102.663.387-138.49 2.021-35.752 1.631-60.169 7.31-81.535 15.612-22.088 8.584-40.82 20.07-59.493 38.743-18.674 18.673-30.16 37.407-38.743 59.495C9.33 137.236 3.653 161.653 2.02 197.405.386 233.232 0 244.671 0 335.895c0 91.222.386 102.661 2.02 138.488 1.633 35.752 7.31 60.169 15.614 81.534 8.584 22.088 20.07 40.82 38.743 59.495 18.674 18.673 37.405 30.159 59.493 38.743 21.366 8.302 45.783 13.98 81.535 15.612 35.827 1.634 47.266 2.021 138.49 2.021 91.222 0 102.661-.387 138.488-2.021 35.752-1.631 60.169-7.31 81.534-15.612 22.088-8.584 40.82-20.07 59.495-38.743 18.673-18.675 30.159-37.407 38.743-59.495 8.302-21.365 13.981-45.782 15.612-81.534 1.634-35.827 2.021-47.266 2.021-138.488 0-91.224-.387-102.663-2.021-138.49-1.631-35.752-7.31-60.169-15.612-81.534-8.584-22.088-20.07-40.822-38.743-59.495-18.675-18.673-37.407-30.159-59.495-38.743-21.365-8.302-45.782-13.981-81.534-15.612C438.556.387 427.117 0 335.895 0zm0 60.521c89.686 0 100.31.343 135.729 1.959 32.75 1.493 50.535 6.965 62.37 11.565 15.68 6.094 26.869 13.372 38.622 25.126 11.755 11.754 19.033 22.944 25.127 38.622 4.6 11.836 10.072 29.622 11.565 62.371 1.616 35.419 1.959 46.043 1.959 135.73 0 89.687-.343 100.311-1.959 135.73-1.493 32.75-6.965 50.535-11.565 62.37-6.094 15.68-13.372 26.869-25.127 38.622-11.753 11.755-22.943 19.033-38.621 25.127-11.836 4.6-29.622 10.072-62.371 11.565-35.413 1.616-46.036 1.959-135.73 1.959-89.694 0-100.315-.343-135.73-1.96-32.75-1.492-50.535-6.964-62.37-11.564-15.68-6.094-26.869-13.372-38.622-25.127-11.754-11.753-19.033-22.943-25.127-38.621-4.6-11.836-10.071-29.622-11.565-62.371-1.616-35.419-1.959-46.043-1.959-135.73 0-89.687.343-100.311 1.959-135.73 1.494-32.75 6.965-50.535 11.565-62.37 6.094-15.68 13.373-26.869 25.126-38.622 11.754-11.755 22.944-19.033 38.622-25.127 11.836-4.6 29.622-10.072 62.371-11.565 35.419-1.616 46.043-1.959 135.73-1.959"/><path d="M335.895 447.859c-61.838 0-111.966-50.128-111.966-111.964 0-61.838 50.128-111.966 111.966-111.966 61.836 0 111.964 50.128 111.964 111.966 0 61.836-50.128 111.964-111.964 111.964zm0-284.451c-95.263 0-172.487 77.224-172.487 172.487 0 95.261 77.224 172.485 172.487 172.485 95.261 0 172.485-77.224 172.485-172.485 0-95.263-77.224-172.487-172.485-172.487m219.608-6.815c0 22.262-18.047 40.307-40.308 40.307-22.26 0-40.307-18.045-40.307-40.307 0-22.261 18.047-40.308 40.307-40.308 22.261 0 40.308 18.047 40.308 40.308"/></g></svg>        </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.tiktok.com/@${config.linkedin}`}
            title={`Tik Tok ${config.linkedin}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            

            <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" fill="none" viewBox="-4.004985 -7.600025 34.70987 45.60015"><path fill="#25F4EE" d="M10.4 11.9999v-1.2c-.4-.1-.8-.0999-1.2-.0999-5.1 0-9.2 4.0999-9.2 9.1999 0 3.1 1.6 5.9 3.9 7.5l-.1-.1C2.3 25.6999 1.5 23.5 1.5 21.2c0-5.1 4-9.1001 8.9-9.2001z"/><path fill="#25F4EE" d="M10.6002 25.4c2.3 0 4.1-1.8 4.2-4.1v-20h3.6c-.1-.4-.1-.8-.1-1.3h-5v20c-.1 2.2-1.9 4-4.2 4-.7 0-1.4-.2-1.9-.5.8 1.1 2 1.9 3.4 1.9zM25.3 8.1V6.9c-1.4 0-2.7-.4-3.8-1.1 1 1.1 2.3 2 3.8 2.3z"/><path fill="#FE2C55" d="M21.4999 5.8c-1.1-1.2-1.7-2.8-1.7-4.6h-1.4c.4 2 1.6 3.6 3.1 4.6zM9.2 15.5999c-2.3 0-4.2 1.9-4.2 4.2 0 1.6 1 3 2.3 3.7-.5-.7-.8-1.5-.8-2.4 0-2.3 1.9-4.2 4.2-4.2.4 0 .8.1 1.2.2v-5.1c-.4-.1-.8-.1-1.2-.1h-.2v3.8c-.5 0-.9-.1-1.3-.1z"/><path fill="#FE2C55" d="M25.2999 8.1001v3.8c-2.6 0-5-.8-6.9-2.2v10.2c0 5.1-4.1 9.2-9.2 9.2-2 0-3.8-.6-5.3-1.6 1.7 1.8 4.1 2.9 6.7 2.9 5.1 0 9.2-4.1 9.2-9.2v-10.2c2 1.4 4.4 2.2 6.9 2.2v-5c-.4 0-.9 0-1.4-.1z"/><path fill="#fff" d="M18.3999 19.8999v-10.2c2 1.4001 4.4 2.2 6.9 2.2v-3.9c-1.5-.3-2.8-1.1-3.8-2.2-1.6-1-2.7-2.7-3-4.6h-3.7V21.2c-.1 2.2-1.9 4-4.2 4-1.4 0-2.6-.7001-3.4-1.7001-1.3-.6-2.2-2-2.2-3.6 0-2.3 1.9-4.1999 4.2-4.1999.4 0 .8.0999 1.2.1999v-3.9c-5 .1-9 4.2001-9 9.2001 0 2.4.9 4.5999 2.5 6.2999 1.5 1 3.3 1.7001 5.3 1.7001 5.1-.1 9.2-4.3001 9.2-9.3001z"/></svg>          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
