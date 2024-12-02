import Link from "next/link"




function notFound() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-start">
        Nous n&aposavons pas trouvé la page que vous cherchez.
        Revenir à la page <Link href="/" className="text-red-500 underline hover:text-red-700">d&aposacceuil</Link>
    </main>
  )
}

export default notFound