import React, { FunctionComponent } from 'react'

import classnames from 'classnames'
import { useRouter } from 'next/router'

interface LinkProps {
  href: string
}

export const ActiveLink: FunctionComponent<LinkProps> = ({
  children,
  href,
}) => {
  const router = useRouter()
  const liClassName = classnames('tab-item', router.pathname === href && 'active')

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <li className={liClassName}>
      <a href={href} onClick={handleClick}>
        {children}
      </a>
    </li>
  )
}
