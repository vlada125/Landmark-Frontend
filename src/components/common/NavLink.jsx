import Link from 'next/link'

export function NavLink({ href, children, color, className, dataMode }) {
    return (
        <Link
            href={href}
            data-mode={dataMode}
            className={`inline-block rounded-lg py-1 hover:bg-transparent  text-${color} hover:text-slate-900 ${className}`}
        >
            {children}
        </Link>
    )
}
