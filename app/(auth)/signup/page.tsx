'use client'

import { signup } from '@/lib/supabase/actions'

export default function SignupPage() {
  async function handleSubmit(formData: FormData) {
    const res = await signup(formData)
    if (res?.error) {
      console.error(res.error)
    }
  }

  return (
    <form action={handleSubmit}>
      <input type="email" name="email" placeholder="Correo electrónico" required />
      <input type="password" name="password" placeholder="Contraseña" required />
      <button type="submit">Registrarse</button>
    </form>
  )
}