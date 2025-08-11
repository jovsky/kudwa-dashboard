import React from "react"

interface PageTitleProps {
  title: string
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => (
  <h1 className="text-kudwa-dark text-3xl font-bold text-center whitespace-nowrap w-full md:w-fit">{title}</h1>
)

export default PageTitle
