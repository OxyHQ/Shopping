import React, { ReactNode } from "react"

interface HeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  heading: string
  description?: string
  children?: ReactNode
}

function Header({ heading, description, children, ...props }: HeaderProps) {
  return (
    <div className="pt-[80px] pb-[150px]" {...props}>
      <h1 className="text-4xl font-semibold text-center mb-8">{heading}</h1>
      <p className="max-w-4xl text-sm md:text-md leading-[1.5] tracking-[-2%] mb-2">
        {description}
      </p>
      {children}
    </div>
  )
}

export default Header