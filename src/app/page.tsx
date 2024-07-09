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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        data.map(({createdAt, id,port}) => (
          <h1 key={crypto.randomUUID()}>
            <span>Id: {id}</span>
            <span>Fecha: {createdAt.getTime()}</span>
            <span>Puerto: {port}</span>
          </h1>
        ))
      }
    </main>
  );
}
