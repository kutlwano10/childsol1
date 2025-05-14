"use client";

import { useState, FormEvent, useEffect } from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";
import Button from "@/components/ui/ButtonUi";
import Checkbox from "@/components/ui/Checkbox";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import ButtonUi from "@/components/ui/ButtonUi";
import Link from "next/link";
import { SearchCheck } from "lucide-react";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [error, setError] = useState("");
  const { login, user, isLoading } = useAuth();
  const [isLogging, setIsLogging] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (user && !isLoading) {
      switch (user.role) {
        case "admin":
          router.push("/admin");

          break;
        case "staff":
          router.push("/staff");

          break;
        case "parent":
          router.push("/parent");

          break;
        case "super-admin":
          router.push("/super-admin");

          break;
        default:
          router.push("/");
      }
    }
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLogging(true);

    try {
      // Await the login and get the returned user data
      await login(email, password);

      // Redirect based on role
    } catch (err) {
      setError("Invalid email or password");
      setIsLogging(false);
      console.error(err);
    }
  };
  return (
    <div className="flex min-h-screen p-6 ">
      {/* Left side - Green background with illustration */}
      <div className="hidden rounded-l-2xl md:flex md:w-1/2 bg-[var(--color-primary)] flex-col items-center justify-center p-10 relative">
        <div className="absolute top-8 left-8">
          <Image
            src="/childsol.png"
            alt="ChildSol Logo"
            width={90}
            height={90}
            className="rounded-md object-cover"
          />
        </div>
        <div className="max-w-lg tracking-wide ">
          <Title level={1} className="text-white mb-6 text-center">
            Quality Education, Safety and Joyful Education
          </Title>

          <div className="mt-8">
            <Image
              src="/class room.svg"
              alt="Education Illustration"
              width={500}
              height={400}
              className="mx-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right side - Sign in form */}
      <div className="w-full bg-white  md:w-1/2 flex items-center rounded-r-2xl justify-center p-6">
        <div className="w-full max-w-md ">
          <div className="flex flex-col items-center text-center">
            <Title
              level={2}
              className="mb-3 text-2xl font-semibold text-gray-800"
            >
              Sign In
            </Title>

            <div className="relative my-4 w-full max-w-xs">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative z-10 bg-white px-3 text-sm text-gray-500">
                OR
              </div>
            </div>

            <ButtonUi
              fullWidth
              onClick={() => router.push("/registration")}
              variant="text"
              className="text-[var(--color-secondary)] hover:underline"
            >
              Enroll Your Child
            </ButtonUi>
          </div>

          <form onSubmit={handleSubmit} className="py-2">
            <Input
              label="Email "
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="text-[--color-text-light] rounded-2xl"
            />

            <PasswordInput
              label="Password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="py-6"
            />

            <div className="flex justify-between items-center  mb-4">
              <Checkbox
                id="remember-me"
                name="remember-me"
                label="Remember me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <Link
                href="#"
                className="text-[var(--color-secondary)] hover:text-[var(--color-secondary-dark)] "
              >
                Forgot Password?
              </Link>
            </div>

            <div className="w-full flex justify-center">
              <Button
                type="submit"
                variant="primary"
                fullWidth
                size="lg"
                className="mb-6 shadow-md flex items-center justify-center"
                disabled={isLogging}
              >
                {isLogging ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Sign In"
                )}
              </Button>
            </div>
          </form>

          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          <div className="text-center pb-8">
            <a
              href="/registration/track"
              className="text-[var(--color-secondary)] flex gap-3 justify-center items-center text-lg hover:underline"
            >
              <SearchCheck className="w-5 h-5" />
              Track Application
            </a>
          </div>
          <div className="w-full gap-4 items-center  flex justify-center">
            <p>Powered By </p>
            <Image
              width={250}
              height={1}
              className="object-cover"
              src="/hisgroup1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
