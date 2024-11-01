import { Skeleton } from "@/shared/components";
import styles from './listvacancy.module.scss'
 
export function SkeletonCard() {
  return (
    <div className='w-96'>
      <div>
          <div className='text-wrap'>
            <Skeleton className="h-4 w-full" />
          </div>
          <div className={styles.headerDateInfo}>
          <Skeleton className="h-4 w-1/4" /> <Skeleton className="h-4 w-1/4" />
          </div>
      </div>
      <Skeleton className="h-[250px] w-full rounded-xl" />
      <div>
        <div className={styles.footerAutorInfo}>
            <div className={styles.footerAutorInfo_top}>
                <div>
                    <div>
                      <Skeleton className="h-8 w-8 rounded-full" />
                    </div>
                </div>
                <div>
                  <Skeleton className="h-8 w-1/2 rounded-full" />
                </div>
            </div>
            <div className={styles.footerAutorInfo_bottom}>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
        </div>
      </div>
    </div>
  )
}