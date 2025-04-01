'use client'

import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	getPaginationRowModel,
	useReactTable,
	RowSelectionState
} from '@tanstack/react-table'
import { useEffect, useState } from 'react'

import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '../ui/'
import { Input } from '../ui/'

import styles from './DataTable.module.scss'
import { DataTablePagination } from './DataTablePagination'


interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
	filterKey?: string
	onSelectionChange?: (selectedIds: string[]) => void
}

export function DataTable<TData, TValue>({
	columns,
	data,
	filterKey,
	onSelectionChange
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [rowSelection, setRowSelection] = useState<RowSelectionState>({})

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			rowSelection
		}
	})

	useEffect(() => {
		if (onSelectionChange) {
			const selectedIds = Object.keys(rowSelection)
				.filter(rowId => rowSelection[rowId])
				.map(rowId => {
					const row = table.getRowModel().rows.find(r => r.id === rowId);
					return (row?.original as { id: string }).id
				})
				.filter(Boolean)
			onSelectionChange(selectedIds as string[])
		}
	}, [rowSelection, onSelectionChange])

	return (
		<div>
			{filterKey && (
				<div className={styles.search}>
					<Input
						placeholder='Поиск'
						value={
							(table
								.getColumn(filterKey)
								?.getFilterValue() as string) ?? ''
						}
						onChange={event =>
							table
								.getColumn(filterKey)
								?.setFilterValue(event.target.value)
						}
						className='max-w-sm'
					/>
				</div>
			)}
			<div>
				<div className={styles.table}>
					<Table>
						<TableHeader>
							{table.getHeaderGroups().map(headerGroup => (
								<TableRow key={headerGroup.id}>
									{headerGroup.headers.map(header => {
										return (
											<TableHead key={header.id}>
												{header.isPlaceholder
													? null
													: flexRender(
														header.column.columnDef
															.header,
														header.getContext()
													)}
											</TableHead>
										)
									})}
								</TableRow>
							))}
						</TableHeader>
						<TableBody>
							{table.getRowModel().rows?.length ? (
								table.getRowModel().rows.map(row => (
									<TableRow
										key={row.id}
										data-state={
											row.getIsSelected() && 'selected'
										}
									>
										{row.getVisibleCells().map(cell => (
											<TableCell key={cell.id}>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</TableCell>
										))}
									</TableRow>
								))
							) : (
								<TableRow>
									<TableCell
										colSpan={columns.length}
										className='h-24 text-center'
									>
										Нечего не найдено.
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</div>
				<div className="flex items-center justify-end space-x-2 py-4">
					<DataTablePagination table={table} />
				</div>
			</div>
		</div>
	)
}
