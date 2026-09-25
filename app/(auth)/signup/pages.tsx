import { signup } from '@/lib/actions/auth'
import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">Crear Cuenta</h1>
        <form action={signup} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border p-2 text-black focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              name="password"
              type="password"
              minLength={6}
              required
              className="mt-1 w-full rounded-md border p-2 text-black focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-green-600 py-2 font-semibold text-white transition-colors hover:bg-green-700"
          >
            Registrarse
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿Ya tienes cuenta?{' '}
          <Link href="/login" className="text-blue-600 underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  )
}