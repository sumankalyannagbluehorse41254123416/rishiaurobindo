// components/Newsletter.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { fetchFormFields } from '../service/fetchFormFields';
import { handleSubmitForm } from '../service/handleSubmitsubs';

interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
}

interface Form {
  id: number;
  title: string;
  status: string;
  description: string;
  title_slug: string;
}

interface FormResponse {
  success: boolean;
  form: Form;
  fields: FormField[];
}

interface NewsletterProps {
  placeholder?: string;
  formUid?: string;
}

export default function Newsletter({ 
  placeholder = "Enter your email",
  formUid = "68e15efd-701f-43d8-9a24-ec770e269a01"
}: NewsletterProps) {
  const [fields, setFields] = useState<FormField[]>([]);
  const [formTitle, setFormTitle] = useState<string>("Subscribe");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // 📥 ফর্ম ফিল্ড ফেচ করা
  useEffect(() => {
    const loadForm = async () => {
      try {
        const host = typeof window !== 'undefined' ? window.location.host : 'localhost:3000';
        const res = await fetchFormFields({ host }, formUid);
        const data = res as FormResponse;
        
        if (data?.success) {
          setFields(data.fields);
          setFormTitle(data.form?.title || "Subscribe");
        }
      } catch (err) {
        console.error("Error fetching form fields:", err);
      }
    };
    loadForm();
  }, [formUid]);

  // ✅ ইমেইল ভ্যালিডেশন (Gmail)
  const validateEmail = (email: string) => {
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.[a-zA-Z]{2,}$/;
    return gmailPattern.test(email);
  };

  // ✅ ফর্ম ভ্যালিডেশন
  const validateForm = (data: Record<string, string>) => {
    for (const key in data) {
      if (data[key].trim() === "") {
        setMessage(`Please fill in ${key}`);
        return false;
      }
    }

    const emailKey = Object.keys(data).find(
      (k) => k.toLowerCase().includes("email")
    );
    if (emailKey && !validateEmail(data[emailKey])) {
      setMessage("Please enter a valid Gmail address (e.g. example@gmail.com)");
      return false;
    }

    return true;
  };

  // 📤 ফর্ম সাবমিট
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const dataObj: Record<string, string> = {};
    formData.forEach((value, key) => {
      dataObj[key] = String(value);
    });

    if (!validateForm(dataObj)) return;

    try {
      setLoading(true);
      const host = typeof window !== 'undefined' ? window.location.host : 'localhost:3000';
      const res = await handleSubmitForm(host, dataObj);
      
      setMessage("✅ Successfully submitted your subscription!");
      setEmail('');
      formElement.reset();
      console.log("Response:", res);
      
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      setMessage("Failed to submit form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="news_letter">
      <form onSubmit={handleSubmit}>
        {/* ✅ ডাইনামিক ফিল্ড */}
        {fields.map((field, idx) => (
          <div key={idx}>
            {field.type === 'email' ? (
              <input
                type="email"
                name={field.name}
                required={field.required}
                placeholder={field.placeholder || field.label || placeholder}
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            ) : field.type === 'textarea' ? (
              <textarea
                name={field.name}
                required={field.required}
                placeholder={field.placeholder || field.label}
                className="form-control"
                rows={3}
                disabled={loading}
              />
            ) : (
              <input
                type={field.type || 'text'}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder || field.label}
                className="form-control"
                disabled={loading}
              />
            )}
          </div>
        ))}

        {/* 🔥 যদি কোনো ডাইনামিক ফিল্ড না থাকে, তাহলে ডিফল্ট ইমেইল ইনপুট */}
        {fields.length === 0 && (
          <input
            type="email"
            placeholder={placeholder}
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        )}

        {/* ✅ সাবমিট বাটন - পুরোনো ডিজাইন ঠিক রাখা */}
        <button type="submit" disabled={loading}>
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </button>

        {/* ✅ মেসেজ */}
        {message && (
          <p style={{ 
            clear: 'both', 
            paddingTop: '10px',
            color: message.includes('✅') ? 'green' : 'red',
            fontSize: '14px',
            margin: '10px 0 0 0'
          }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}