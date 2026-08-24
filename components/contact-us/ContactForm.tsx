// components/contact-us/ContactForm.tsx
"use client";

import { useState, useEffect } from "react";
import { handleSubmitForm } from "@/service/handleSubmit";
import { fetchFormFields } from "@/service/fetchFormFields";

interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
}

interface ContactFormValues {
  [key: string]: string | undefined;
}

interface ContactFormProps {
  formUid?: string;
}

export default function ContactForm({ formUid = "f51b0607-3803-4cc6-9ae9-1c104e1cbedc" }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState<FormField[]>([]);
  const [formTitle, setFormTitle] = useState<string>("Contact Us");


  useEffect(() => {
    const loadForm = async () => {
      try {
        const host = typeof window !== 'undefined' ? window.location.host : 'localhost:3000';
        const res = await fetchFormFields({ host }, formUid);
        
        if (res?.success) {
          setFields(res.fields);
          setFormTitle(res.form?.title || "Contact Us");
        }
      } catch (err) {
        console.error("Error fetching form fields:", err);
      }
    };
    loadForm();
  }, [formUid]);

  // ✅ Gmail validation
  const validateEmail = (email: string) => {
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.[A-Za-z]{2,}$/;
    return gmailPattern.test(email);
  };

  // ✅ Phone validation (10 digits)
  const validatePhone = (phone: string) => {
    return /^\d{10}$/.test(phone);
  };

  // ✅ Form validation
  const validateForm = (data: ContactFormValues): boolean => {
    for (const key in data) {
      if (data[key] && data[key]!.trim().length === 0) {
        alert(`❌ Please enter your ${key}.`);
        return false;
      }
    }

    // Email validation
    const emailKey = Object.keys(data).find(k => k.toLowerCase().includes("email"));
    if (emailKey && data[emailKey]) {
      if (!validateEmail(data[emailKey]!.trim())) {
        alert("❌ Please enter a valid Gmail address (e.g. example@gmail.com).");
        return false;
      }
    }

    // Phone validation
    const phoneKey = Object.keys(data).find(k => 
      k.toLowerCase().includes("mobile") || 
      k.toLowerCase().includes("phone") ||
      k.toLowerCase().includes("tel")
    );
    if (phoneKey && data[phoneKey]) {
      if (!validatePhone(data[phoneKey]!.trim())) {
        alert("❌ Please enter a valid 10-digit mobile number.");
        return false;
      }
    }

    return true;
  };

  // ✅ Handle submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const dataObj: ContactFormValues = {};
    formData.forEach((value, key) => {
      dataObj[key] = String(value);
    });

    if (!validateForm(dataObj)) return;

    try {
      setLoading(true);
      const host = window.location.host;
      const res = await handleSubmitForm(host, dataObj);
      alert("✅ Form submitted successfully!");
      formElement.reset();
      console.log("Response:", res);
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      alert("Failed to submit form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Restrict phone input
  const handlePhoneKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };


  const renderField = (field: FormField, index: number) => {
    const isPhone = field.name.toLowerCase().includes("mobile") || 
                    field.name.toLowerCase().includes("phone") ||
                    field.name.toLowerCase().includes("tel");
    
    const isEmail = field.name.toLowerCase().includes("email");

    return (
      <div className="form-group" key={index}>
        <label htmlFor={field.name}>{field.label || field.name}</label>
        
        {field.type === "textarea" ? (
          <textarea
            className="form-control"
            name={field.name}
            id={field.name}
            rows={5}
            placeholder={field.placeholder || ""}
            required={field.required}
            disabled={loading}
          />
        ) : (
          <input
            className="form-control"
            type={isEmail ? "email" : isPhone ? "text" : field.type || "text"}
            name={field.name}
            id={field.name}
            placeholder={field.placeholder || ""}
            required={field.required}
            maxLength={isPhone ? 10 : undefined}
            minLength={isPhone ? 10 : undefined}
            onKeyPress={isPhone ? handlePhoneKeyPress : undefined}
            disabled={loading}
          />
        )}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="contact_form">
    
        {fields.map((field, index) => renderField(field, index))}

      
        {fields.length === 0 && (
          <>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                disabled={loading}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile No</label>
              <input
                className="form-control"
                type="text"
                name="mobile"
                id="mobile"
                maxLength={10}
                minLength={10}
                onKeyPress={handlePhoneKeyPress}
                disabled={loading}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                disabled={loading}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                rows={5}
                name="message"
                id="message"
                disabled={loading}
                required
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="btn_theme"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Send Request"}
        </button>
      </div>
    </form>
  );
}