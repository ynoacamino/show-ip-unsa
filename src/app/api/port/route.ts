import {prisma} from "@/lib/prisma"

export async function POST(req: Request) { 
    const body = await req.json()

    if (body?.ip) {
        return Response.json({ message: "Envia la ip en un un obejto en el body"}, {status: 400})
    }

    let port;
    try {
        port = prisma.port.create({
            data: {
                port: body.ip
            }
        })
    } catch (err) {
        return Response.json({ message: "Error al subir a la base de datos"}, {status: 500})
    }

    return Response.json(port)
}