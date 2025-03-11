import DOMPurify from 'isomorphic-dompurify'
import { FC, PropsWithChildren } from 'react'

type DescriptionProps = {
    className?: string
}

export const Description: FC<PropsWithChildren<DescriptionProps>> = ({ children, className }) => {
    const sanitizedContent = DOMPurify.sanitize(children as string)
    return (
        <div className={className} dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div>
    )
}