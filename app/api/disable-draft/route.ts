import { cookies, draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)
  const draftModeInstance = await draftMode()
  draftModeInstance.disable()
  const cookieStore = await cookies()
  cookieStore.delete('hiveDebug')

  redirect(searchParams.get('redirect') || '/')
}
