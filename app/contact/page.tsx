"use client";
import { useForm } from "react-hook-form";
import HomeVideo from "@/components/ui/home-video";
import {
  FacebookIcon,
  InstagramIcon,
  Mail,
  Map,
  Phone,
  TwitterIcon,
} from "lucide-react";
import { useState, useEffect, ChangeEvent, FocusEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FocusedFields {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phone: boolean;
  message: boolean;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [focused, setFocused] = useState<FocusedFields>({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    message: false,
  });

  const [theme, setTheme] = useState<string>(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light"
  );

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFocus = (field: keyof FocusedFields) => {
    setFocused((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleBlur = (field: keyof FocusedFields) => {
    if (!formData[field]) {
      setFocused((prev) => ({
        ...prev,
        [field]: false,
      }));
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  const onSubmit = (data: any) => {
    console.log("Form Data: ", data);
    toast.success("Message has been sent successfully");
    reset(); // Reset form values
    // Handle form submission here
  };

  return (
    <div className="min-h-screen ">
      <HomeVideo title="Contact Us" />

      <div className="border-4 w-full sm:w-5/6 mx-auto border-[#00a2ff]/20 rounded-[250px_0px] md:rounded-[250px_0px] shadow-[0_0_15px_rgba(0,162,255,0.1)] m-4 flex flex-col md:flex-row">
        <div
          className={`relative bg-[linear-gradient(211deg,#17C4FE_25.29%,#0FD2E4_47.01%,#1048D4_81.35%)] 
            flex w-full md:w-[40%] lg:w-[35%] shrink-0  rounded-tl-[250px] items-end p-8 overflow-hidden 
          ${
            errors
              ? "h-[20rem] md:min-h-[44rem]"
              : "  h-[20rem] md:min-h-[40rem]"
          } h-full`}
        >
          {/* Bubbles */}
          <div className="absolute top-[-50px] left-[-30px] w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-[30px] right-[50px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-[100px] left-[100px] w-[130px] h-[130px] md:w-[180px] md:h-[180px] bg-white opacity-10 rounded-full"></div>

          <div className="w-full">
            <div className="flex flex-col items-start gap-y-4 md:gap-y-6">
              <p className="flex items-center text-white text-sm md:text-lg">
                <Phone className="mr-3" />
                <span>+1012 3456 789</span>
              </p>
              <p className="flex items-center text-white text-sm md:text-lg">
                <Mail className="mr-3" />
                <span>demo@gmail.com</span>
              </p>
              <p className="flex items-center text-white text-sm md:text-lg">
                <Map className="mr-3" />
                <span>
                  132 Dartmouth Street Boston,
                  <br />
                  Massachusetts 02156 United States
                </span>
              </p>
            </div>

            <div className="flex items-center mt-6 md:mt-8 gap-4 text-white">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>

        <div className="w-full p-4 md:p-8">
          <h2 className="text-2xl font-bold mb-4">Write Us</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-gray-600 mb-6">
              We would love to hear from you! Please fill out the form below,
              and we will get back to you as soon as possible.
            </p>

            {/* Name Row */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1 relative">
                <label
                  className={`absolute transition-all duration-200 ${
                    errors.firstName ? "text-red-500" : "text-gray-400"
                  } uppercase tracking-wider`}
                >
                  First Name
                </label>
                <input
                  type="text"
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  className="w-full bg-transparent border-b border-gray-800 dark:border-gray-200 pb-2 pt-6 focus:outline-none focus:border-gray-400"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {(errors as any).firstName.message}
                  </p>
                )}
              </div>

              <div className="flex-1 relative">
                <label
                  className={`absolute transition-all duration-200 ${
                    errors.lastName ? "text-red-500" : "text-gray-400"
                  } uppercase tracking-wider`}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  className="w-full bg-transparent border-b border-gray-800 dark:border-gray-200 pb-2 pt-6 focus:outline-none focus:border-gray-400"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">
                    {(errors as any).lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Contact Row */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-1 relative">
                <label
                  className={`absolute transition-all duration-200 ${
                    errors.email ? "text-red-500" : "text-gray-400"
                  } uppercase tracking-wider`}
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full bg-transparent border-b border-gray-800 dark:border-gray-200 pb-2 pt-6 focus:outline-none focus:border-gray-400"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {(errors as any).email.message}
                  </p>
                )}
              </div>

              <div className="flex-1 relative">
                <label
                  className={`absolute transition-all duration-200 ${
                    errors.phone ? "text-red-500" : "text-gray-400"
                  } uppercase tracking-wider`}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone Number is required",
                  })}
                  className="w-full bg-transparent border-b border-gray-800 dark:border-gray-200 pb-2 pt-6 focus:outline-none focus:border-gray-400"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {(errors as any).phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Subject Selection */}
            <div className="mb-8">
              <label className="uppercase text-sm tracking-wider mb-3 block">
                Select Subject
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["General Inquiry", "Support", "Feedback", "Other"].map(
                  (option, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="radio"
                        {...register("subject", {
                          required: "Subject is required",
                        })}
                        value={option}
                        className="h-5 w-5"
                      />
                      <label
                        htmlFor={`subject-${index}`}
                        className="cursor-pointer"
                      >
                        {option}
                      </label>
                    </div>
                  )
                )}
              </div>
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">
                  {(errors as any).subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="mb-8 relative">
              <label
                className={`absolute transition-all duration-200 ${
                  errors.message ? "text-red-500" : "text-gray-400"
                } uppercase tracking-wider`}
              >
                Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full bg-transparent border-b border-gray-800 dark:border-gray-200 pb-2 pt-8 min-h-24 focus:outline-none focus:border-gray-400"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {(errors as any).message.message}
                </p>
              )}
            </div>

            <div className="text-center">
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
