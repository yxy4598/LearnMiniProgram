import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetBtnClick = () => {
    pageContentRef.value?.getPageData()
  }

  const handleQueryBtnClick = (queryInfo: any) => {
    console.log(pageContentRef)
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, handleResetBtnClick, handleQueryBtnClick]
}
