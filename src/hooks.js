import { useEffect } from 'react'

export const Hooks = () => {
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'icon'
    link.href =
      'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%22100%22>🫶</text></svg>'
    document.head.appendChild(link)

    console.log('hello world')
    // more hooks here...
  }, [])

  return <></>
}
