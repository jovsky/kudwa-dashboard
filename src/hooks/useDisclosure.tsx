import { useState } from "react"

const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return {
    isOpen,
    onOpen: () => setIsOpen(true),
    onClose: () => setIsOpen(false),
    onToggle: () => setIsOpen(!isOpen),
  }
}

export default useDisclosure
