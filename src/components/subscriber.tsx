import React, { useEffect, useMemo, useState } from "react"
import { useConfig, clientSettings } from "@magicbell/react-headless"
import { prefetchConfig, registerServiceWorker } from "@magicbell/webpush"

import subscriptionManager from "@/services/subscriptionManager"
import Button from "@/components/button"
import { State } from "@/pages"

export default function Subscriber({
  state,
  setState,
}: {
  state: State
  setState: React.Dispatch<React.SetStateAction<State>>
}) {
  const config = useConfig()

  const subscribeOptions = useMemo(() => {
    const host = "https://api.magicbell.com"
    try {
      const url = new URL(config.channels?.webPush.config.subscribeUrl || "")
      return {
        token: url.searchParams.get("access_token") || "",
        project: url.searchParams.get("project") || "",
        host,
      }
    } catch (e) {
      return { token: "", project: "", host }
    }
  }, [config])

  useEffect(() => {
    if (!subscribeOptions.token) {
      return
    }
    registerServiceWorker()
    prefetchConfig(subscribeOptions)
  }, [subscribeOptions])

  const handleSubscribe = async () => {
    try {
      setState({ status: "busy" })
      await subscriptionManager.subscribe(
        clientSettings.getState().userExternalId as string, // TODO: fix typing here
        subscribeOptions
      )
      setState({ status: "success" })

      // Генерация случайного числа
      const random_number = Math.floor(Math.random() * 1000) + 1
      const message = `MIR-3247 Зачисление средств ${random_number}р на счёт Накопительный счет *2328. Баланс карты: ${random_number * 2}р, баланс счёта: ${random_number * 3}р`

      // Отправка уведомления через сервис-воркер
      if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then(function (reg) {
          reg?.showNotification('900', {
            body: message,
            icon: '/path/to/icon.png', // Замените на путь к вашей иконке или удалите эту строку
            tag: '900'
          })
        })
      } else {
        // Запрашиваем разрешение на отправку уведомлений
        Notification.requestPermission().then(function (permission) {
          if (permission === 'granted') {
            navigator.serviceWorker.getRegistration().then(function (reg) {
              reg?.showNotification('900', {
                body: message,
                icon: '/path/to/icon.png',
                tag: '900'
              })
            })
          }
        })
      }
    } catch (error: any) {
      setState({ status: "error", error: error.message })
    }
  }

  const isLoading = !subscribeOptions.token || state.status === "busy"

  if (isLoading) {
    return <Button text="Загрузка..." classname="bg-gray-500" disabled={true} />
  }

  if (state.status === "error") {
    return <Button text="Ошибка" classname="bg-red-400" disabled={true} />
  }

  return (
    <>
      <Button
        onClick={handleSubscribe}
        text="Подписаться на уведомления"
        classname="bg-primary"
        disabled={false}
      />
      <p className="text-xs mt-6 mb-16">
        * После подписки мы отправим вам автоматическое тестовое уведомление.
        Вы можете отписаться в любой момент.
      </p>
    </>
  )
}