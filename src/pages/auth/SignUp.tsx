import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignUpForm } from "@/components/auth/SignUpForm";
import { useAuth } from "@/hooks/useAuth";

export default function SignUp() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return null;
  }

  return (
    <AuthLayout 
      title="Create an account" 
      subtitle="Get started with your expense management system"
    >
      <SignUpForm />
    </AuthLayout>
  );
}
