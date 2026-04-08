"use client";

import { useEffect, useState } from "react";
import { Reveal } from "../../molecules/Reveal/Reveal";

const INITIAL_FIELDS = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validateFields(fields) {
  const errors = {};

  if (!fields.name.trim()) errors.name = "Vui lòng nhập tên của bạn.";
  if (!fields.email.trim()) errors.email = "Vui lòng nhập email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Email không đúng định dạng.";
  }
  if (!fields.subject.trim()) errors.subject = "Vui lòng nhập tiêu đề.";
  if (!fields.message.trim()) errors.message = "Vui lòng nhập nội dung tin nhắn.";
  else if (fields.message.trim().length < 10) {
    errors.message = "Nội dung cần tối thiểu 10 ký tự.";
  }

  return errors;
}

export function ContactForm() {
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ open: false, type: "success", title: "", message: "" });

  const closeToast = () => {
    setToast((prev) => ({ ...prev, open: false }));
  };

  const showToast = (type, title, message) => {
    setToast({ open: true, type, title, message });
  };

  useEffect(() => {
    if (!toast.open) return undefined;
    const timer = setTimeout(() => {
      setToast((prev) => ({ ...prev, open: false }));
    }, 4500);
    return () => clearTimeout(timer);
  }, [toast.open]);

  const setField = (key, value) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;

    const errors = validateFields(fields);
    setFieldErrors(errors);
    if (Object.keys(errors).length) {
      showToast("error", "Không thể gửi tin nhắn", "Vui lòng kiểm tra lại các trường dữ liệu.");
      return;
    }

    setIsSubmitting(true);
    const payload = {
      access_key: "dc24d6c6-a8e8-469f-9719-b4f196885d42",
      name: fields.name.trim(),
      email: fields.email.trim(),
      subject: fields.subject.trim(),
      message: fields.message.trim(),
      from_name: fields.name.trim(),
      replyto: fields.email.trim(),
      botcheck: "",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      const isSuccess = Boolean(data?.success) || data?.code === 200;

      if (res.ok && isSuccess) {
        setFields(INITIAL_FIELDS);
        setFieldErrors({});
        showToast(
          "success",
          "Gửi thành công",
          "Tin nhắn của bạn đã được gửi. Mình sẽ phản hồi sớm nhất có thể."
        );
        return;
      }

      showToast(
        "error",
        "Gửi thất bại",
        data?.message || "Hệ thống email đang gặp vấn đề. Vui lòng thử lại sau."
      );
    } catch (_) {
      showToast(
        "error",
        "Mất kết nối",
        "Không thể kết nối đến dịch vụ email. Vui lòng kiểm tra mạng và thử lại."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Reveal className="mx-auto w-full max-w-lg">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="glass-panel flex flex-col gap-5 p-8 transition-all duration-500 hover:border-cyan-400/20 hover:shadow-[0_0_48px_-16px_rgba(34,211,238,0.22)] sm:gap-6 sm:p-10 lg:p-12"
        >
          <div className="space-y-2">
            <input
              placeholder="Your name"
              type="text"
              name="name"
              id="name"
              value={fields.name}
              onChange={(e) => setField("name", e.target.value)}
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
            />
            {fieldErrors.name && (
              <p id="name-error" className="text-sm text-red-300/95">
                {fieldErrors.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <input
              placeholder="Email"
              name="email"
              id="email"
              type="email"
              value={fields.email}
              onChange={(e) => setField("email", e.target.value)}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
            />
            {fieldErrors.email && (
              <p id="email-error" className="text-sm text-red-300/95">
                {fieldErrors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <input
              placeholder="Subject"
              type="text"
              name="subject"
              id="subject"
              value={fields.subject}
              onChange={(e) => setField("subject", e.target.value)}
              aria-invalid={Boolean(fieldErrors.subject)}
              aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
            />
            {fieldErrors.subject && (
              <p id="subject-error" className="text-sm text-red-300/95">
                {fieldErrors.subject}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <textarea
              placeholder="How can I help?"
              name="message"
              id="message"
              rows={6}
              value={fields.message}
              onChange={(e) => setField("message", e.target.value)}
              className="min-h-[160px] resize-y"
              aria-invalid={Boolean(fieldErrors.message)}
              aria-describedby={fieldErrors.message ? "message-error" : undefined}
            />
            {fieldErrors.message && (
              <p id="message-error" className="text-sm text-red-300/95">
                {fieldErrors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-tech-primary mt-2 w-full sm:mt-3 sm:w-auto"
          >
            {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
          </button>
        </form>
      </Reveal>

      {toast.open && (
        <div className="fixed bottom-5 right-5 z-[120] w-[min(90vw,22rem)]">
          <div
            role="alert"
            className={`relative overflow-hidden rounded-xl border px-4 py-3 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
              toast.type === "success"
                ? "border-cyan-400/35 bg-zinc-950/95 text-cyan-100"
                : "border-red-400/40 bg-zinc-950/95 text-red-100"
            }`}
          >
            <div
              aria-hidden
              className={`absolute inset-x-0 top-0 h-[2px] ${
                toast.type === "success"
                  ? "bg-gradient-to-r from-cyan-400/0 via-cyan-300 to-cyan-400/0"
                  : "bg-gradient-to-r from-red-400/0 via-red-300 to-red-400/0"
              }`}
            />
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <span
                  className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold ${
                    toast.type === "success"
                      ? "bg-cyan-400/20 text-cyan-100"
                      : "bg-red-400/20 text-red-100"
                  }`}
                  aria-hidden
                >
                  {toast.type === "success" ? "✓" : "!"}
                </span>
                <div>
                  <p className="text-[15px] font-semibold tracking-[0.01em]">{toast.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-zinc-200/90">{toast.message}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeToast}
                className="rounded-md border border-white/15 px-2 py-1 text-[11px] text-zinc-100/85 transition hover:border-white/30 hover:bg-white/10"
                aria-label="Close notification"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
