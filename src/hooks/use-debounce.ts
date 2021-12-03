import { useEffect, useState } from 'react'

/**
 *
 * @param `value` - The value to debounce
 * @param `delay` - The delay in milliseconds - defaults to `500`
 */
const useDebounce = <T>(value: T, delay = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
