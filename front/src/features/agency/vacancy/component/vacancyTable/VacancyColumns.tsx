import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, ExternalLink, MoreHorizontal, Pencil } from 'lucide-react'
import Link from 'next/link'

import { Button, Checkbox } from '@/shared/components'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger
} from '@/shared/components'

import { AGENCY_URL } from '@/shared/config'
import { generatePostUrl } from '@/shared/utils'

export interface IVacancyColumn {
	id: string | undefined
	title: string | undefined
	slug: string | undefined
	createdAt: string | undefined
	reallyUpTo: string | undefined
	views: number | undefined
	isValidate: string
	categories: {
		id: string,
		description: string,
		name: string
		slug: string
	} | undefined
}

export const vacancyColumns: ColumnDef<IVacancyColumn>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
				value={row.original.id}
			/>
		),
	},
	{
		accessorKey: 'title',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
				>
					Название
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		}
	},
	{
		accessorKey: 'createdAt',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'desc')
					}
				>
					Created
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		}
	},
	{
		accessorKey: 'reallyUpTo',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
				>
					Really up to
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		}
	},
	{
		accessorKey: 'views',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
				>
					Views
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		}
	},
	{
		accessorKey: 'isValidate',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
				>
					Is verified
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		}
	},
	{
		accessorKey: 'actions',
		header: 'Действия',
		cell: ({ row }) => (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='ghost' className='size-8 p-0'>
						<MoreHorizontal className='size-4' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuLabel>Действия</DropdownMenuLabel>
					<Link
						href={generatePostUrl(row.original.categories!, row.original.slug!)}
						target='_blank'
					>
						<DropdownMenuItem>
							<ExternalLink className='size-4 mr-2' />
							Страница с продуктом
						</DropdownMenuItem>
					</Link>
					<Link
						href={AGENCY_URL.editOffers(row.original.id)}
					>
						<DropdownMenuItem>
							<Pencil className='size-4 mr-2' />
							Изменить
						</DropdownMenuItem>
					</Link>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	}
]
