import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const GoogleCalendarEvents = () => {
  const [events, setEvents] = useState([])
  const [pastEvents, setPastEvents] = useState([])
  const [futureEvents, setFutureEvents] = useState([])

  // 🔥 1. Función para obtener los eventos desde Google Calendar
  const fetchEvents = async () => {
    const calendarId =
      "f346167c078669cec4ca340bc42cc6e8010a4d5874c1876f6688339e3acc8c9a@group.calendar.google.com"
    const apiKey = "AIzaSyBTXIeb0U_d5dYV1OVAyoFukgBmmDwpbcU"

    const today = new Date()
    const oneMonthAgo = new Date()
    oneMonthAgo.setDate(today.getDate() - 30)

    const oneMonthLater = new Date()
    oneMonthLater.setDate(today.getDate() + 30)

    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
      calendarId
    )}/events?key=${apiKey}&timeMin=${oneMonthAgo.toISOString()}&timeMax=${oneMonthLater.toISOString()}&singleEvents=true&orderBy=startTime&timeZone=America/Lima`

    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data.items) {
        console.log("Eventos recibidos:", data.items) // ✅ Verifica los eventos recibidos
        setEvents(data.items) // 🔥 Guarda los eventos en el estado
      } else {
        console.warn("No hay eventos en la respuesta.")
      }
    } catch (error) {
      console.error("Error obteniendo eventos:", error)
    }
  }

  // ✅ 2. Llamar `fetchEvents` al montar el componente
  useEffect(() => {
    fetchEvents()
  }, [])

  // 🔥 3. Función para dividir los eventos en pasados y futuros
  useEffect(() => {
    if (!events || events.length === 0) return // ⚠️ Evita ejecutarlo si no hay eventos

    const today = new Date()

    const past = events.filter(event => new Date(event.start.dateTime) < today)
    const future = events.filter(
      event => new Date(event.start.dateTime) >= today
    )

    setPastEvents(past)
    setFutureEvents(future)

    console.log("Eventos pasados:", past)
    console.log("Eventos futuros:", future)
  }, [events]) // 🚀 Se ejecuta cada vez que `events` cambia

  const formatDate = dateTime => {
    return new Intl.DateTimeFormat("es-PE", {
      day: "2-digit",
      month: "short",
    }).format(new Date(dateTime))
  }
  return (
    <section className="section revolution-f fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="revolution-f__content">
              {pastEvents.map(event => (
                <div className="revolution-f__single fade-top" key={event.id}>
                  <div className="thumb">
                    <h3>
                      <Link href="service-single">
                        {formatDate(event.start.dateTime)}
                      </Link>
                    </h3>
                  </div>
                  <div className="content rev-f-content">
                    <p className="light-title-sm">{event.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xxl-6">
            <div className="section__header text-center">
              <h2 className="title title-animation">Próximos Eventos</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="revolution-f__content">
              {futureEvents.map(event => (
                <div className="revolution-f__single fade-top" key={event.id}>
                  <div className="thumb">
                    <h3>
                      <Link href="service-single">
                        {formatDate(event.start.dateTime)}
                      </Link>
                    </h3>
                  </div>
                  <div className="content rev-f-content">
                    <p className="light-title-sm">{event.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoogleCalendarEvents
