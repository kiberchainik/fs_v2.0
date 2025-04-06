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

import { MAIN_URL, AGENCY_URL } from '@/shared/config'
import { useTranslations } from 'next-intl'

export interface IBranchColumn {
	name: string,
	id: string,
	location: string
	email: string
	phone: string
}
export const useBranchColumns = (): ColumnDef<IBranchColumn>[] => {
	const t = useTranslations('branch.branchColumns')
	return [
		{
			id: "select",
			header: ({ table }) => (
				<Checkbox
					checked={
						table.getIsAllPageRowsSelected() ||
						(table.getIsSomePageRowsSelected() && "indeterminate")
					}
					onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
					aria-label={t('selectAll')}
				/>
			),
			cell: ({ row }) => (
				<Checkbox
					checked={row.getIsSelected()}
					onCheckedChange={(value) => row.toggleSelected(!!value)}
					aria-label={t('selectRow')}
					value={row.original.id}
				/>
			),
		},
		{
			accessorKey: 'name',
			header: ({ column }) => {
				return (
					<Button
						variant='ghost'
						onClick={() =>
							column.toggleSorting(column.getIsSorted() === 'asc')
						}
					>
						{t('name')}
						<ArrowUpDown className='ml-2 size-4' />
					</Button>
				)
			}
		},
		{
			accessorKey: 'location',
			header: ({ column }) => {
				return (
					<Button
						variant='ghost'
						onClick={() =>
							column.toggleSorting(column.getIsSorted() === 'asc')
						}
					>
						{t('location')}
						<ArrowUpDown className='ml-2 size-4' />
					</Button>
				)
			}
		},
		{
			accessorKey: 'email',
			header: ({ column }) => {
				return (
					<Button
						variant='ghost'
						onClick={() =>
							column.toggleSorting(column.getIsSorted() === 'asc')
						}
					>
						{t('email')}
						<ArrowUpDown className='ml-2 size-4' />
					</Button>
				)
			}
		},
		{
			accessorKey: 'phone',
			header: ({ column }) => {
				return (
					<Button
						variant='ghost'
						onClick={() =>
							column.toggleSorting(column.getIsSorted() === 'asc')
						}
					>
						{t('phone')}
						<ArrowUpDown className='ml-2 size-4' />
					</Button>
				)
			}
		},
		{
			accessorKey: 'actions',
			header: t('azioni'),
			cell: ({ row }) => (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='ghost' className='size-8 p-0'>
							<MoreHorizontal className='size-4' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>{t('azioni')}</DropdownMenuLabel>
						<Link
							href={MAIN_URL.branchPageInfo(row.original.id)}
							target='_blank'
						>
							<DropdownMenuItem>
								<ExternalLink className='size-4 mr-2' />
								{t('link')}
							</DropdownMenuItem>
						</Link>
						<Link
							href={AGENCY_URL.editBranch(row.original.id)}
						>
							<DropdownMenuItem>
								<Pencil className='size-4 mr-2' />
								{t('edit')}
							</DropdownMenuItem>
						</Link>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		}
	]
}