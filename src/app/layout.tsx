import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Alejandro Rodriguez',
    default:
      'Alejandro Rodriguez - Ingeniero de Software de día, Triatleta de fin de semana',
  },
  description:
    'Soy Alejandro Rodríguez, ingeniero de software y emprendedor con base en Navalmoral de la Mata, España. Trabajo como freelance, aprovechando mis habilidades para crear soluciones digitales que ayudan a las empresas a obtener mejores resultados y fomentar su crecimiento.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
