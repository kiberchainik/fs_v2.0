'use client'

import DataTableLoading from "@/shared/components/data-table/DataTableLoading"
import { useGetVacancy } from "../../hooks/useGetVacancy"

import styles from './vacancy.module.scss'
import { IVacancyColumn, vacancyColumns } from "./VacancyColumns"
import { Button, DataTable, Heading } from "@/shared/components"
import Link from "next/link"
import { AGENCY_URL } from "@/shared/config"
import { Plus } from "lucide-react"
import { formatDate } from "@/shared/utils"
import { useState } from "react"
import { CiTrash } from "react-icons/ci"
import { useDeleteManyVacancy } from "../../hooks/useDeleteVacancy"

export function Vacancies() {
	const { vacancyList, isFetching } = useGetVacancy()
	const { deleteManyVacancy } = useDeleteManyVacancy()
	const [selectedIds, setSelectedIds] = useState<string[]>([])

	const formattedVacancies: IVacancyColumn[] = vacancyList
		? vacancyList.map(vacancy => ({
			id: vacancy.id,
			title: vacancy.title,
			slug: vacancy.slug,
			categories: vacancy.categories,
			createdAt: formatDate(vacancy.createdAt!),
			reallyUpTo: vacancy.reallyUpTo ? formatDate(vacancy.reallyUpTo) : ' - ',
			views: vacancy.views,
			isValidate: vacancy.isValidate ? 'Verified' : 'Not verified!'
		})) : []

	const handleDeleteMany = () => {
		deleteManyVacancy(selectedIds)
	}

	return (
		<div className={styles.wrapper}>
			{isFetching ? (
				<DataTableLoading />
			) : (
				<>
					<div className={styles.header}>
						<Heading>All vacancies</Heading>

						<div className={styles.buttons}>
							<Link href={AGENCY_URL.createOffers()}>
								<Button variant='outline'>
									<Plus />
									Создать
								</Button>
							</Link>
							{selectedIds.length > 0 && (
								<Button variant='default' onClick={() => handleDeleteMany()}>
									<CiTrash /> Удалить
								</Button>
							)}
						</div>
					</div>
					<div className={styles.table}>
						<DataTable
							columns={vacancyColumns}
							data={formattedVacancies}
							filterKey='title'
							onSelectionChange={setSelectedIds}
						/>
					</div>
				</>
			)}
		</div>
	)
}