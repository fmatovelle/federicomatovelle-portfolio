import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de privacidad — WhatsApp AI Assistant',
  description: 'Cómo el asistente de WhatsApp gestionado por Federico Matovelle trata los datos personales.',
  robots: { index: true, follow: true },
};

const UPDATED = '14 de octubre de 2026';
const CONTACT = 'fmatovelle1@gmail.com';

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mt-10 mb-3 text-lg font-semibold text-white">{title}</h2>
      <div className="space-y-3 text-sm leading-7 text-white/75">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl py-16">
      <p className="font-mono text-xs text-violet-300/90">
        <span className="text-white/40">//</span> legal
      </p>
      <h1 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight">Política de privacidad</h1>
      <p className="mt-2 text-sm text-white/50">WhatsApp AI Assistant · Última actualización: {UPDATED}</p>

      <Section title="1. Quién somos">
        <p>
          El <strong>WhatsApp AI Assistant</strong> es un servicio desarrollado y gestionado por Federico Matovelle
          (Prisma Branding), con domicilio en Barcelona, España. Ofrece a negocios (consultas, restaurantes, comercios)
          un asistente que responde automáticamente a los mensajes que sus clientes les envían por WhatsApp.
        </p>
        <p>
          Cada negocio que usa el asistente es el <strong>responsable del tratamiento</strong> de los datos de sus
          clientes. Federico Matovelle actúa como <strong>encargado del tratamiento</strong>, tratando los datos solo para
          prestar el servicio y según las instrucciones del negocio.
        </p>
        <p>Contacto: <a className="underline underline-offset-4" href={`mailto:${CONTACT}`}>{CONTACT}</a></p>
      </Section>

      <Section title="2. Qué datos tratamos">
        <ul className="list-disc space-y-1 pl-5">
          <li>Número de teléfono de WhatsApp y nombre de perfil de quien escribe.</li>
          <li>El contenido de los mensajes de texto enviados al número del negocio y las respuestas del asistente.</li>
          <li>
            Si la persona lo comparte voluntariamente para pedir una cita: nombre, motivo de la consulta, horario
            preferido y forma de contacto.
          </li>
          <li>Datos técnicos mínimos (identificador y fecha de cada mensaje) para evitar duplicados y errores.</li>
        </ul>
        <p>No pedimos ni necesitamos datos especialmente sensibles. Recomendamos no enviarlos por este canal.</p>
      </Section>

      <Section title="3. Para qué los usamos">
        <ul className="list-disc space-y-1 pl-5">
          <li>Responder a las preguntas de la persona sobre el negocio (horarios, precios, servicios, ubicación).</li>
          <li>Ayudar a reservar una cita y avisar al negocio cuando alguien quiere ser contactado.</li>
          <li>Generar estadísticas agregadas de uso para el negocio (número de mensajes, consultas sin respuesta).</li>
        </ul>
        <p>
          No usamos los datos para publicidad, no los vendemos y no se usan para entrenar modelos de inteligencia
          artificial.
        </p>
      </Section>

      <Section title="4. Base legal">
        <p>
          El tratamiento se basa en el interés de la persona en recibir respuesta a la consulta que inicia ella misma, y
          en la ejecución de medidas precontractuales cuando solicita una cita (art. 6.1.b y 6.1.f del RGPD).
        </p>
      </Section>

      <Section title="5. Con quién se comparten">
        <p>Para prestar el servicio usamos estos proveedores, que actúan como subencargados:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>Meta Platforms</strong> (WhatsApp Business Platform): envío y recepción de mensajes.</li>
          <li><strong>Google Cloud / Firebase</strong> (región europe-west1, Bélgica): servidores y base de datos.</li>
          <li>
            <strong>OpenAI</strong>: generación de respuestas cuando la pregunta no tiene una respuesta predefinida.
            Se envía solo el texto necesario de la conversación reciente.
          </li>
        </ul>
        <p>
          Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo, con las garantías
          previstas en el RGPD (cláusulas contractuales tipo).
        </p>
      </Section>

      <Section title="6. Cuánto tiempo se guardan">
        <p>
          Las conversaciones y solicitudes de cita se <strong>borran automáticamente</strong> tras el plazo que fija cada
          negocio, como máximo 30 días por defecto. Los registros técnicos para evitar duplicados se borran a los 2 días.
        </p>
      </Section>

      <Section id="eliminar-datos" title="7. Cómo pedir que se borren tus datos">
        <p>Puedes pedir en cualquier momento que se eliminen tus datos:</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>
            Escribe a <a className="underline underline-offset-4" href={`mailto:${CONTACT}?subject=Eliminar%20mis%20datos`}>{CONTACT}</a>{' '}
            con el asunto <em>“Eliminar mis datos”</em>.
          </li>
          <li>Indica el número de WhatsApp desde el que escribiste y el nombre del negocio.</li>
          <li>Eliminaremos tu conversación y cualquier solicitud asociada en un plazo máximo de 30 días y te lo confirmaremos.</li>
        </ol>
        <p>
          También puedes pedírselo directamente al negocio, o dejar de escribir: los datos se borrarán solos al terminar
          el plazo de conservación.
        </p>
      </Section>

      <Section title="8. Tus derechos">
        <p>
          Tienes derecho a acceder, rectificar, suprimir y oponerte al tratamiento de tus datos, así como a la limitación
          y portabilidad. Escríbenos a {CONTACT}. Si consideras que no hemos atendido tu solicitud, puedes reclamar ante la
          Agencia Española de Protección de Datos (aepd.es) o la autoridad de tu país.
        </p>
      </Section>

      <Section title="9. Seguridad">
        <p>
          Las conexiones están cifradas, el acceso a la base de datos está restringido a los servidores del servicio, las
          credenciales se guardan cifradas y los mensajes que no proceden de WhatsApp se rechazan.
        </p>
      </Section>

      <p className="mt-12 text-xs text-white/40">
        <Link href="/" className="underline underline-offset-4">← Volver a federicomatovelle.com</Link>
      </p>
    </article>
  );
}
