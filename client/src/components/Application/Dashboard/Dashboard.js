import React from 'react'
import { useKeywordsQuery} from '../../../rtk/app/keyword/mq_keyword'
export default function Dashboard() {
  const { data: posts, error, isLoading }  =useKeywordsQuery('');
  console.log("Data:",posts?.data?.cookies?._sessionId);
  return (
    <div>This is Dashboard </div>
  )
}
