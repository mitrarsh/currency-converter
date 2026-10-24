import { useCallback } from 'react'

export function usePersianNumber() {
  const toPersianNumber = useCallback((value: string | number) => {
    return value.toString().replace(/\d/g, (digit) =>
      '۰۱۲۳۴۵۶۷۸۹'[Number(digit)]
    )
  }, [])

  return toPersianNumber
}