'use client'

import { useParams } from "next/navigation";

export default function JobFullPage() {
    const {jobSlug} =useParams<{jobSlug: string}>()
    
    return (
      <div className='flex gap-3'>
        job : {jobSlug}
      </div>
    );
  }