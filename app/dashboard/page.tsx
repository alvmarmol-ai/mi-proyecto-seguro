import { createClient } from '@/lib/supabase/server'
import { logout } from '@/lib/supabase/actions'
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
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Bienvenido al Dashboard</h1>
      <p className="mb-4">Usuario: {user.email}</p>
      
      <form action={logout}>
        <button
          type="submit"
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Cerrar Sesión
        </button>
      </form>
    </div>
  )
}