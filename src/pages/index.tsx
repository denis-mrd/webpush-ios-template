import Head from "next/head"
import { useEffect, useState } from "react"
import Subscriber from "@/components/subscriber"

export default function Home() {
  return (
    <>
      <Head>
        <title>Wealth Push</title>
        <meta name="description" content="Приложение для отправки уведомлений" />
        {/* Добавьте дополнительные метатеги при необходимости */}
      </Head>
      <main className="w-full text-text pb-10 px-8">
        <header className="text-center py-4">
          <h1>Wealth Push</h1>
        </header>
        <section className="max-w-screen-md mx-auto">
          <Subscriber />
        </section>
      </main>
    </>
  )
}