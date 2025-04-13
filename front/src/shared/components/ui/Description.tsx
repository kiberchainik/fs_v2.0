import { FC, PropsWithChildren } from 'react'

type DescriptionProps = {
    className?: string
}

export const Description: FC<PropsWithChildren<DescriptionProps>> = ({ children, className }) => {
    return (
        <div
            className={className}
            dangerouslySetInnerHTML={{ __html: children as string }}
        />
    )
}