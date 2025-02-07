import DOMPurify from 'isomorphic-dompurify'
import { FC, PropsWithChildren } from 'react'

export const Description: FC<PropsWithChildren> = ({ children }) => {
    const sanitizedContent = DOMPurify.sanitize(children as string)
    return (
        <div dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div>
    )
}