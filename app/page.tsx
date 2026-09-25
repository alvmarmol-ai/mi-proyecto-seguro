import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900">Aplicación Segura con Next.js & Supabase</h1>
      <p className="mt-4 max-w-lg text-lg text-gray-600">
        Sistema de autenticación utilizando Cookies httpOnly, Middleware y Server Actions.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/login"
          className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Iniciar Sesión
        </Link>
        <Link
          href="/signup"
          className="rounded-md bg-gray-200 px-6 py-3 font-semibold text-gray-800 hover:bg-gray-300"
        >
          Registrarse
        </Link>
      </div>
    </main>
  )
}