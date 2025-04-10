import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from "../ui"
import { PropsWithChildren } from "react"
import { AlertDialogHeader, AlertDialogFooter } from "../ui"


interface ConfirmModalProps {
    handleClick: () => void
    title?: string
    description?: string
}

export function ConfirmModal({ children, title, description, handleClick }: PropsWithChildren<ConfirmModalProps>) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title ? title : 'Are you absolutely sure'}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description ? description :
                            'This action cannot be undone. This will permanently delete your accountand remove your data from our servers.'}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleClick()}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}