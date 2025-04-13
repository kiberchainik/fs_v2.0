import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import type { WindowLike } from 'dompurify'

const window = new JSDOM('').window as unknown as WindowLike
const DOMPurify = createDOMPurify(window)

export const sanitizeHtml = (dirty: string) => {
    if (!dirty) return ''
    return DOMPurify.sanitize(dirty)
}