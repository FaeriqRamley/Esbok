// import { supabase } from '@/lib/supabaseClient'
// import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log(request,params)
  return {}
  // const { data, error } = await supabase
  //   .from('items')
  //   .select('*')
  //   .eq('id', params.id)
  //   .single()

  // if (error) {
  //   return NextResponse.json({ error: error.message }, { status: 500 })
  // }

  // return NextResponse.json({ data })
}
