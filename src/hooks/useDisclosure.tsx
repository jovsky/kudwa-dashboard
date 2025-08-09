import { useEffect, useMemo, useState } from "react"

const useDisclosure = (key?: string) => {
  const [isOpen, setIsOpen] = useState(key && typeof window !== "undefined" ? localStorage.getItem(key) === "true" : false)

  useEffect(() => {
    if (key && typeof window !== "undefined") {
      localStorage.setItem(key, String(isOpen))
    }
  }, [isOpen, key])

  const returnValue = useMemo(
    () => ({
      isOpen,
      toggle: () => setIsOpen((prev) => !prev),
      onOpen: () => setIsOpen(true),
      onClose: () => setIsOpen(false),
    }),
    [isOpen],
  )

  return returnValue
}

export default useDisclosure
