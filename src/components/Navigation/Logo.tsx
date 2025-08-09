// Next modules
import Image from "next/image"
import Link from "next/link"

// Images
import logoGrupoHope from "@/assets/logo.avif"

export default function Logo() {
  return (
    <Link href="/">
      <Image src={logoGrupoHope.src} alt="Logo Kudwa" width={100} height={0} />
    </Link>
  )
}
