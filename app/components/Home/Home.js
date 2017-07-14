import React from 'react'
import { container, title, slogan } from './styles.css'

export default function Home (props) {
  return (
    <div className={container}>
      <p className={title}>Duckr</p>
      <p className={slogan}>
        The real time, cloud base, modular, scalable, growth hack, social platform.
      </p>
    </div>
  )
}
