import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

type ButtonProps = {
    isRedirect: boolean,
    btnText: string,
    btnLink: string
    className? : string
}

const Button = (props: ButtonProps) => {
  return (
    <Link className={clsx('rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl', props.className)} href={props.btnLink} target={props.isRedirect ? '_blank' : '_self'}>{props.btnText}</Link>
  )
}

export default Button