import { motion } from "framer-motion";
import { EventCard } from "./EventCard";

export function Events() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-script text-4xl md:text-5xl leading-[1.35] py-2 overflow-visible text-gradient-sky">
            Celebrations
          </p>

          <p className="mt-3 text-sm tracking-[0.4em] uppercase text-muted-foreground">
            Two days · One love
          </p>
        </motion.div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Engagement */}
          <EventCard
            title="Engagement Ceremony"
            date="October 21st, 2026"
            time="6:00 PM"
            venue="St. Mary's Metropolitan Cathedral, Changanassery"
            reception="Reception to follow in Parish Hall"
            mapUrl="https://www.google.com/maps/search/?api=1&query=St.+Mary's+Metropolitan+Cathedral+Changanassery"
          />

          {/* Wedding */}
          <EventCard
            title="Wedding Ceremony"
            date="October 24th, 2026"
            time="11:00 AM"
            venue="St. George Forane Church, Aruvithura"
            reception="Reception to follow in St. George College Auditorium"
            mapUrl="https://www.google.com/maps/search/?api=1&query=St.+George+Forane+Church+Aruvithura"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}