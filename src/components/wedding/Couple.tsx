import { motion } from "framer-motion";

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export function Couple() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-script text-4xl md:text-5xl leading-[1.3] py-2 text-gradient-sky">
            The Beloved
          </p>

          <div
            className="mx-auto mt-4 h-px w-32"
            style={{
              background: "linear-gradient(90deg, transparent, var(--sky-mid), transparent)",
            }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative">
          <motion.div
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="glass rounded-3xl p-10 text-center"
          >
            <p className="font-script text-3xl text-gradient-sky mb-2">The Bride</p>
            <h3 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
              Amrutha Cyriac
            </h3>
            <div className="mx-auto h-px w-20 mb-4" style={{ background: "var(--sky-mid)" }} />
            <p className="text-muted-foreground italic">D/o Rani Cyriac & Cyriac Thomas</p>
            <p className="text-muted-foreground">Kiliroor, Changanassery</p>
          </motion.div>

          <motion.div
            className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full glass items-center justify-center z-10"
            initial={{ scale: 0, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
          >
            <span className="font-script text-4xl text-gradient-sky">&</span>
          </motion.div>

          <motion.div
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="glass rounded-3xl p-10 text-center"
          >
            <p className="font-script text-3xl text-gradient-sky mb-2">The Groom</p>
            <h3 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
              Davis Shaji George
            </h3>
            <div className="mx-auto h-px w-20 mb-4" style={{ background: "var(--sky-mid)" }} />
            <p className="text-muted-foreground italic">S/o Shaji George & Valsamma Shaji</p>
            <p className="text-muted-foreground">Vavalankal, Aruvithura</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
