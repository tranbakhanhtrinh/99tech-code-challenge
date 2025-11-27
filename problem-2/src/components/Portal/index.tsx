import clsx from 'clsx'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  children: ReactNode
  show: boolean
}

const Portal = ({ children, show }: PortalProps) => {
  const portalElement =
    typeof document !== 'undefined'
      ? document.querySelector<HTMLElement>('#portal')
      : null

  if (!portalElement || !show) {
    return null
  }

  const jsxContent = (
    <div
      className={clsx(
        'overlay',
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      {children}
    </div>
  )

  return createPortal(jsxContent, portalElement)
}

export default Portal

