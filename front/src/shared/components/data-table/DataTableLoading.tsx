import { FC } from 'react'
import { Loader } from '../ui'

import styles from './DataTable.module.scss'

const DataTableLoading: FC = () => {
	return (
		<div className={styles.loader_wrapper}>
			<Loader />
		</div>
	)
}

export default DataTableLoading
