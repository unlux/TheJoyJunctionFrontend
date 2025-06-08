"use client"

import { Send } from "lucide-react"
import { useForm } from "@tanstack/react-form"
import { zodValidator } from "@tanstack/zod-form-adapter"
import { z } from "zod"

export default function ContactForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      console.log("Form submitted:", value)
      // Replace with your actual form submission logic (e.g., API call)
      alert("Thank you for your message! We'll get back to you soon. ✨")
      form.reset()
    },
    validatorAdapter: zodValidator,
  })

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 sm:p-10">
      <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">
        Send us a message
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
        className="space-y-6"
      >
        <form.Field
          name="name"
          validators={{
            onChange: z.string().min(2, "Name must be at least 2 characters"),
          }}
          children={(field) => (
            <div>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Your Name
              </label>
              <input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                type="text"
                autoComplete="name"
                className="block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                // Replace 'focus:ring-indigo-500' and 'focus:border-indigo-500' with your theme's primary color
              />
              {field.state.meta.touchedErrors ? (
                <p className="mt-1 text-xs text-red-500">
                  {field.state.meta.touchedErrors}
                </p>
              ) : null}
            </div>
          )}
        />

        <form.Field
          name="email"
          validators={{
            onChange: z.string().email("Please enter a valid email address"),
          }}
          children={(field) => (
            <div>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Your Email
              </label>
              <input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                type="email"
                autoComplete="email"
                className="block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {field.state.meta.touchedErrors ? (
                <p className="mt-1 text-xs text-red-500">
                  {field.state.meta.touchedErrors}
                </p>
              ) : null}
            </div>
          )}
        />

        <form.Field
          name="subject"
          validators={{
            onChange: z.string().min(3, "Subject must be at least 3 characters"),
          }}
          children={(field) => (
            <div>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Subject
              </label>
              <input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                type="text"
                className="block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {field.state.meta.touchedErrors ? (
                <p className="mt-1 text-xs text-red-500">
                  {field.state.meta.touchedErrors}
                </p>
              ) : null}
            </div>
          )}
        />

        <form.Field
          name="message"
          validators={{
            onChange: z.string().min(10, "Message must be at least 10 characters"),
          }}
          children={(field) => (
            <div>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Your Message
              </label>
              <textarea
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                rows={4}
                className="block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {field.state.meta.touchedErrors ? (
                <p className="mt-1 text-xs text-red-500">
                  {field.state.meta.touchedErrors}
                </p>
              ) : null}
            </div>
          )}
        />

        <div className="pt-2">
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <button
                type="submit"
                disabled={!canSubmit || isSubmitting}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                // Replace 'bg-indigo-600', 'hover:bg-indigo-700', 'focus:ring-indigo-500' with your theme's primary color
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            )}
          />
        </div>
      </form>
    </div>
  )
}