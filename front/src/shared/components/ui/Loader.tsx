import { LuLoader } from 'react-icons/lu'

export function Loader() {
    return (
        <div className='flex items-center justify-center text-sm'>
            <LuLoader className='mr-2 size-5 animate-spin' />
        </div>
    )
}