import { motion } from "framer-motion";
import teacherAbout from "@/assets/teacher-about.png";

const AboutTeacherSection = () => {
  return (
    <section
      id="about-teacher"
      className="relative py-20 md:py-28 overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text - vertically centered */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <span className="inline-block text-primary text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4">
              About the Teacher
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ගුරුවරයා පිළිබඳව
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-6 mx-auto lg:mx-0" />
            <p
              className="text-base md:text-lg text-muted-foreground leading-[2.1] max-w-xl mx-auto lg:mx-0"
              style={{ fontFamily: "var(--font-body)" }}
            >
              වසර ගණනාවක අත්දැකීම් සමඟින්, ලංකාවේ ඕනෑම දරුවෙකුට ඉතා සරලව සහ ආසාවෙන් ඉංග්‍රීසි භාෂාව ඉගෙන ගැනීමට අවශ්‍ය මඟ පෙන්වීම අප ලබා දෙන්නෙමු. දරුවන්ගේ අනාගතය සාර්ථක කිරීම අපගේ එකම අරමුණයි.
            </p>
          </motion.div>

          {/* Right: Image - anchored bottom */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-end justify-center lg:justify-end self-stretch -mb-20 md:-mb-28"
          >
            <img
              src={teacherAbout}
              alt="Thilina Dhananjaya - English Teacher"
              className="w-full max-w-md lg:max-w-lg h-auto object-contain object-bottom block"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeacherSection;
