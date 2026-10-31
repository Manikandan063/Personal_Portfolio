import React from 'react';
import { motion } from 'framer-motion';
import { useForm as useRHForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, MapPin, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Please enter a short subject'),
  message: z.string().min(5, 'Please write your message')
});

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useRHForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data) => {
    try {
      // Build WhatsApp message text
      const messageText = 
        `*New Message from Portfolio* 💬\n\n` +
        `👤 *Name:* ${data.name.trim()}\n` +
        `📧 *Email:* ${data.email.trim()}\n` +
        `📌 *Subject:* ${data.subject.trim()}\n\n` +
        `📝 *Message:*\n${data.message.trim()}\n\n` +
        `_Sent from Manikandan's Portfolio Website_`;

      const whatsappUrl = `https://wa.me/919345577285?text=${encodeURIComponent(messageText)}`;

      // Open WhatsApp in a new window or directly in the app
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      toast.success('Opening WhatsApp with your message!');
      reset();
    } catch (error) {
      console.error('WhatsApp redirect error', error);
      toast.error('Could not open WhatsApp. Please click the WhatsApp phone link directly.');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-[var(--bg-surface)]/50 relative border-t border-[var(--border-color)] transition-colors duration-400 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-xs font-semibold text-[var(--badge-text)] mb-3">
            <Sparkles size={13} />
            <span>CONTACT ME</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-main)] mb-4 tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] mb-4">
              Have a project in mind or looking to hire?
            </h3>
            <p className="text-[var(--text-muted)] mb-8 leading-relaxed text-base sm:text-lg">
              I am always happy to discuss new projects, full-time developer jobs, or freelance work. Send me a message below, and I will reply as quickly as possible.
            </p>

            <div className="space-y-4">
              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--primary)] hover:shadow-[0_0_20px_var(--glow)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0 group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">My Location</p>
                  <p className="text-[var(--text-main)] font-bold text-base sm:text-lg">Tirupur, Tamil Nadu, India</p>
                </div>
              </div>

              {/* Direct WhatsApp Channel */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-all">
                  <FaWhatsapp size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">WhatsApp</p>
                  <a 
                    href="https://wa.me/919345577285?text=Hello%20Manikandan,%20I'm%20reaching%20out%20from%20your%20portfolio!" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-[var(--text-main)] font-bold text-base sm:text-lg hover:text-[#25D366] transition-colors"
                  >
                    +91 9345577285
                  </a>
                </div>
              </div>

              {/* Direct Email Channel */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--primary)] hover:shadow-[0_0_20px_var(--glow)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0 group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Email</p>
                  <a 
                    href="mailto:manikandanthangaraj06@gmail.com" 
                    className="text-[var(--text-main)] font-bold text-base sm:text-lg hover:text-[var(--primary-light)] transition-colors break-all"
                  >
                    manikandanthangaraj06@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form 
              onSubmit={handleSubmit(onSubmit)} 
              className="bg-[var(--bg-card)] backdrop-blur-xl p-8 rounded-2xl border border-[var(--border-color)] shadow-xl space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-main)] placeholder-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
                  placeholder="e.g. John Doe"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-main)] placeholder-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject')}
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-main)] placeholder-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
                  placeholder="e.g. New Website Project or Job Offer"
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1.5">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  {...register('message')}
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-main)] placeholder-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all resize-none"
                  placeholder="Hello Manikandan, I would like to talk to you about..."
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-70 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer text-base"
              >
                <FaWhatsapp size={22} />
                <span>Send Message via WhatsApp</span>
              </button>

              <p className="text-center text-xs text-[var(--text-muted)] flex items-center justify-center gap-1.5 pt-1">
                <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse"></span>
                <span>Sends directly to my WhatsApp so we can chat immediately</span>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
