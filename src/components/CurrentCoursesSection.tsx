import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ImageIcon, Loader2 } from "lucide-react";

interface Course {
  title: string;
  description: string;
  image?: string;
}

const courses: Course[] = [
  {
    title: "Grade 10 English",
    description:
      "Build a strong foundation in grammar, vocabulary, and writing skills aligned with the school syllabus.",
  },
  {
    title: "Grade 11 O/L English",
    description:
      "Focused O/L preparation with past paper practice, exam strategies, and structured revision.",
  },
  {
    title: "Spoken English",
    description:
      "Speak confidently in real-life situations through interactive sessions and live pronunciation feedback.",
  },
];

const CurrentCoursesSection = () => {
  const [openCourse, setOpenCourse] = useState<Course | null>(null);
  const [form, setForm] = useState({ fullName: "", phone: "", age: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!openCourse) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("https://sheetdb.io/api/v1/bw2rywt0lxcfw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            Course: openCourse.title,
            Name: form.fullName,
            Phone: form.phone,
            Age: form.age,
            Date: new Date().toLocaleDateString(),
          },
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Success! We will contact you soon.");
      setForm({ fullName: "", phone: "", age: "" });
      setOpenCourse(null);
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 md:py-28 bg-background" id="current-courses">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
            Current Courses
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-4">
            Enroll in Our Latest Courses
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="aspect-video bg-primary/5 flex items-center justify-center overflow-hidden">
                {course.image ? (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <ImageIcon className="w-12 h-12 text-primary/40" />
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {course.description}
                </p>
                <Button
                  onClick={() => setOpenCourse(course)}
                  className="w-full"
                >
                  Enroll Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!openCourse}
        onOpenChange={(open) => !open && setOpenCourse(null)}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              Enroll in {openCourse?.title}
            </DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get in touch with you.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                required
                value={form.fullName}
                onChange={(e) =>
                  setForm({ ...form, fullName: e.target.value })
                }
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="07X XXX XXXX"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                required
                min={1}
                max={120}
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                placeholder="16"
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CurrentCoursesSection;
