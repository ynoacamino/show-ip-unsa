
import {prisma} from "@/lib/prisma"
import { format } from '@formkit/tempo';

export const revalidate = 0;

const getData = async () => {
  const ports = await prisma.port.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return ports
} 

export default async function Home() {
  const data = await getData()
  return (
    <main className="flex min-h-screen flex-col gap-1 w-full items-center justify-center">
      {
        data.map(({createdAt, port}) => (
          <h1 key={crypto.randomUUID()} className="p-6 w-full max-w-4xl text-lg md:text-3xl flex flex-col gap-1 border-b border-white/50">
            <span>Fecha: {format({
              format: "dddd, MMMM D, YYYY h:mm A",
              date: createdAt,
              locale: 'es',
              tz: 'America/Lima',
            })}</span>
            <span>IP: {port}</span>
          </h1>
        ))
      }
    </main>
  );
}
