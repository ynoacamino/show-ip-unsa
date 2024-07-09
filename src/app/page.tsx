import Image from "next/image";
import {prisma} from "@/lib/prisma"

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
    <main className="flex min-h-screen flex-col p-24 gap-4 w-full items-center justify-center">
      {
        data.map(({createdAt, id,port}) => (
          <h1 key={crypto.randomUUID()} className="p-4 w-full max-w-4xl text-3xl flex flex-col gap-1 border-b border-white/50">
            <span>Id: {id}</span>
            <span>Fecha: {createdAt.getDate()} / {createdAt.getMonth()} / {createdAt.getFullYear()}, {createdAt.getHours()} : {createdAt.getMinutes()}</span>
            <span>Puerto: {port}</span>
          </h1>
        ))
      }
    </main>
  );
}
