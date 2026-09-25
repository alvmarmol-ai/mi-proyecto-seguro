'use client'

import { login } from '@/lib/supabase/actions'

export default function LoginPage() {
  async function handleSubmit(formData: FormData) {
    const res = await login(formData)
    if (res?.error) {
      console.error(res.error)
    }
  }

  return (
    <form action={handleSubmit}>
      <input type="email" name="email" placeholder="Correo electrónico" required />
      <input type="password" name="password" placeholder="Contraseña" required />
      <button type="submit">Iniciar Sesión</button>
    </form>
  )
}