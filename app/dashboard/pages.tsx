import { createClient } from '@/lib/supabase/server'
import { logout } from '@/lib/actions/auth'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">Panel Protegido 🛡️</h1>
        <p className="mt-2 text-gray-600">
          ¡Bienvenido de vuelta! Has accedido a una ruta privada autenticada con cookies httpOnly.
        </p>

        <div className="mt-6 rounded-md bg-blue-50 p-4 border border-blue-200">
          <p className="text-sm text-blue-800 font-medium">Información de la sesión:</p>
          <p className="mt-1 text-sm text-gray-700">
            <strong>ID de usuario:</strong> {user.id}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Email:</strong> {user.email}
          </p>
        </div>

        <form action={logout} className="mt-6">
          <button
            type="submit"
            className="rounded-md bg-red-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-red-700"
          >
            Cerrar Sesión
          </button>
        </form>
      </div>
    </div>
  )
}