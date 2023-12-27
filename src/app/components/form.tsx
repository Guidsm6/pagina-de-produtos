"use client"
import React from  "react";
import styled from "styled-components";
import { useRouter}  from "next/navigation";
import { useState } from "react";

const FormWrapper = styled.form`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 30px;
  margin-top: 6rem;
  background-color: #2d2331;
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff;
`;

const InputField = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  color: #fff;
  background-color: #2d2331;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  cursor: pointer;
`;

export default function Form() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    setSubmitting(true);
    router.push('../dashboard')
    try {
      // Simulate login logic (replace with actual logic)
      console.log("Login in progress...");
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login errors gracefully
    } finally {
      setSubmitting(false);
    }
  };

  return (
      <FormWrapper onSubmit={handleSubmit} className=" flex flex-col">
        <Heading>Sign In</Heading>
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />
        <Button type="submit" disabled={submitting}>
          {submitting ? "Logging in..." : "Login"}
        </Button>
      </FormWrapper>
  );
}
