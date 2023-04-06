import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ title }) {
  // const title = dashboard;
  return (
    <>
     <Layout>
        <div className='w-full'>
        <h1>{title}</h1>
        </div>
     </Layout>
    </>
  )
}
