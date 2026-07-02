"use client";

import { useState, useId } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { companyInfo } from "@/lib/data";
import { MAPS_EMBED_URL } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/section-header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  validateContactForm,
  hasErrors,
  type ContactFormData,
  type ContactFormErrors,
} from "@/utils/validation";

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
};

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const formId = useId();
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const updateField = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(form);

    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      setStatus("error");
      return;
    }

    setStatus("loading");

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus("success");
    setForm(INITIAL_FORM);
    setErrors({});

    setTimeout(() => setStatus("idle"), 4000);
  };

  const fieldIds = {
    name: `${formId}-name`,
    email: `${formId}-email`,
    phone: `${formId}-phone`,
    company: `${formId}-company`,
    subject: `${formId}-subject`,
    message: `${formId}-message`,
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="engineering-grid absolute inset-0 opacity-20" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" aria-hidden />

      <div className="container-custom relative">
        <SectionHeader
          label="Contact"
          title="Get In Touch"
          description="Ready to start your next engineering project? Reach out to our team of experts."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 sm:space-y-6"
          >
            <div className="glass-card rounded-2xl p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin size={20} className="text-primary" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <address className="mt-2 not-italic text-sm leading-relaxed text-muted sm:text-base">
                    {companyInfo.address.street}
                    <br />
                    {companyInfo.address.city}, {companyInfo.address.state}
                    <br />
                    {companyInfo.address.country}
                  </address>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Mail size={20} className="text-primary" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <div className="mt-2 space-y-1">
                    {companyInfo.emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="block text-sm text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded sm:text-base"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Phone size={20} className="text-primary" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <div className="mt-2 space-y-1">
                    {companyInfo.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="block text-sm text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded sm:text-base"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border overflow-hidden rounded-2xl">
              <iframe
                title="ONS Engineers office location on Google Maps"
                src={MAPS_EMBED_URL}
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full rounded-2xl grayscale transition-all hover:grayscale-0 sm:h-[250px]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 sm:p-8"
              noValidate
              aria-label="Contact form"
            >
              <h3 className="mb-6 text-xl font-bold">Send us a Message</h3>

              {status === "success" && (
                <div
                  role="status"
                  className="mb-6 flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-3 text-sm text-primary"
                >
                  <CheckCircle size={18} aria-hidden />
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {status === "error" && hasErrors(errors) && (
                <div
                  role="alert"
                  className="mb-6 flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-400"
                >
                  <AlertCircle size={18} aria-hidden />
                  Please correct the errors below.
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor={fieldIds.name} className="mb-2 block text-sm text-muted">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    id={fieldIds.name}
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="John Doe"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? `${fieldIds.name}-error` : undefined}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p id={`${fieldIds.name}-error`} className="mt-1 text-xs text-red-400" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor={fieldIds.email} className="mb-2 block text-sm text-muted">
                    Email <span className="text-primary">*</span>
                  </label>
                  <Input
                    id={fieldIds.email}
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="john@company.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? `${fieldIds.email}-error` : undefined}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p id={`${fieldIds.email}-error`} className="mt-1 text-xs text-red-400" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor={fieldIds.phone} className="mb-2 block text-sm text-muted">
                    Phone
                  </label>
                  <Input
                    id={fieldIds.phone}
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? `${fieldIds.phone}-error` : undefined}
                    autoComplete="tel"
                  />
                  {errors.phone && (
                    <p id={`${fieldIds.phone}-error`} className="mt-1 text-xs text-red-400" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor={fieldIds.company} className="mb-2 block text-sm text-muted">
                    Company
                  </label>
                  <Input
                    id={fieldIds.company}
                    value={form.company}
                    onChange={(e) => updateField("company", e.target.value)}
                    placeholder="Your Company"
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor={fieldIds.subject} className="mb-2 block text-sm text-muted">
                  Subject <span className="text-primary">*</span>
                </label>
                <Input
                  id={fieldIds.subject}
                  value={form.subject}
                  onChange={(e) => updateField("subject", e.target.value)}
                  placeholder="Project Inquiry"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? `${fieldIds.subject}-error` : undefined}
                />
                {errors.subject && (
                  <p id={`${fieldIds.subject}-error`} className="mt-1 text-xs text-red-400" role="alert">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor={fieldIds.message} className="mb-2 block text-sm text-muted">
                  Message <span className="text-primary">*</span>
                </label>
                <Textarea
                  id={fieldIds.message}
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="Tell us about your project requirements..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? `${fieldIds.message}-error` : undefined}
                />
                {errors.message && (
                  <p id={`${fieldIds.message}-error`} className="mt-1 text-xs text-red-400" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="mt-6 w-full gap-2"
                disabled={status === "loading" || status === "success"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" aria-hidden />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={18} aria-hidden />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} aria-hidden />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
