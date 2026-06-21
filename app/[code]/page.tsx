import { redirect, notFound } from 'next/navigation'
import { find } from '../lib/store'

export default async function RedirectPage({
  params,
}: {
  params: Promise<{ code: string }>
}) {
  const { code } = await params
  const url = find(code)

  if (!url) notFound()

  redirect(url)
}