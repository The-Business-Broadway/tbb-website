import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LightGraySectionLayout } from "~/layouts/LightGraySectionLayout";

// Define the Zod schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  phone: z.string().regex(/^\d+$/, { message: "Phone number must contain only digits" }).min(10, { message: "Phone number must be at least 10 digits long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
});

// Infer TypeScript types from the schema
type FormData = z.infer<typeof formSchema>;

export const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data Submitted:", data);
    alert("Form submitted successfully!");
  };

  return (
    <LightGraySectionLayout>
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row">
          {/* Form Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Tell Us How We Can <span className="text-red-500">Help?</span>
            </h2>
            <p className="text-gray-500 mt-2">Describe your request — we typically respond within a couple of business hours.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input type="text" placeholder="Your Name" {...register("name")} className="p-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <input type="text" placeholder="Phone number" {...register("phone")} className="p-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>
              <div className="col-span-2">
                <input type="email" placeholder="Email address" {...register("email")} className="p-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div className="col-span-2">
                <textarea placeholder="Please describe a little" rows={4} {...register("message")} className="p-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <button type="submit" className="col-span-2 bg-red-500 text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-red-600 transition">
                Submit Now <span className="ml-2">→</span>
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
            <img src="https://the-business-broadway.github.io/tbb-website-assets/contact-us/contact-us.webp" alt="Contact Us" className="max-h-96" />
          </div>
        </div>
      </div>
    </LightGraySectionLayout>
  );
};
