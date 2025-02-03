import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Herramientas',
  description:
    'Software que utilizo, gadgets que me encantan y otras cosas que recomiendo.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software que utilizo, gadgets que me encantan y otras cosas que recomiendo."
      intro="Cosas que uso para crear software, mantenerme productivo o que compro para engañarme y pensar que soy productivo cuando en realidad solo estoy postergando cosas. Aquí hay una gran lista de todas mis cosas favoritas."
    >
      <div className="space-y-20">
        <ToolsSection title="Puesto de trabajo">
          <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
            El MacBook Pro de 16” con M1 Max y 64GB de RAM ofrece un rendimiento
            excepcional, manejando tareas creativas y de programación intensivas
            sin esfuerzo. Su pantalla impresionante, batería duradera y
            construcción premium lo convierten en la máquina ideal para
            profesionales.
          </Tool>
          <Tool title="Apple Studio Display">
            El Apple Studio Display ofrece una calidad de imagen espectacular y
            una experiencia visual impresionante, perfecta para profesionales
            que buscan precisión y claridad.
          </Tool>
          <Tool title="Teclado Logitech MX">
            El teclado Logitech MX es ergonómico, preciso y cuenta con una
            excelente conectividad, ideal para productividad y comodidad durante
            largas jornadas.
          </Tool>
          <Tool title="Ratón logitech mx master 3">
            El ratón Logitech MX Master 3 ofrece una ergonomía superior,
            precisión excepcional y múltiples funciones personalizables,
            perfecto para profesionales que buscan eficiencia.
          </Tool>
          <Tool title="Silla escritorio Markus Ikea">
            La silla Markus de IKEA es cómoda, ajustable y tiene un diseño
            minimalista, ideal para largas horas de trabajo con buen soporte
            lumbar.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Herramientas de desarrollo">
          <Tool title="Visual Studio Code">
            Visual Studio Code es un editor ligero, rápido y altamente
            personalizable, perfecto para desarrolladores que buscan
            productividad y flexibilidad.
          </Tool>
          <Tool title="DBeaver">
            DBeaver es una herramienta poderosa y versátil para gestionar bases
            de datos, con una interfaz intuitiva y soporte para múltiples
            sistemas. Ideal para desarrolladores y administradores.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Herramientas de diseño">
          <Tool title="Figma">
            Figma es una herramienta de diseño colaborativa, intuitiva y basada
            en la web, perfecta para equipos que buscan crear interfaces con
            rapidez y facilidad.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Desarrollo web">
          <Tool title="Vercel">
            Vercel es una plataforma de despliegue optimizada para aplicaciones
            frontend, que permite un flujo de trabajo ágil y escalable con
            integración continua y alto rendimiento.
          </Tool>
          <Tool title="Stripe">
            Stripe es una plataforma de pagos sencilla y robusta, ideal para
            negocios que buscan procesar transacciones en línea de forma segura
            y eficiente.
          </Tool>
          <Tool title="Cloudinary">
            Cloudinary es una plataforma de gestión de medios en la nube, que
            facilita la carga, optimización y entrega de imágenes y videos de
            manera rápida y escalable.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
