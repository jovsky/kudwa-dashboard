import React from "react"

interface PageTitleProps {
  title: string
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => (
  <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>{title}</h1>
)

export default PageTitle
