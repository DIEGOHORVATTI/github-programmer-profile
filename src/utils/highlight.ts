import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark-reasonable.css'

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    hljs: any
  }
}

hljs.configure({
  languages: ['javascript', 'jsx', 'sh', 'bash', 'html', 'scss', 'css', 'json']
})

if (typeof window !== 'undefined') {
  window.hljs = hljs
}
