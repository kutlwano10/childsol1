"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [error, setError] = useState("");
  const { login, user } = useAuth();
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Await the login and get the returned user data
      await login(email, password)
      
      // Redirect based on role
      if (user) {
        switch (user.role) {
          case "admin":
            router.push("/admin");
            router.refresh(); // Ensure the page updates
            break;
          case "staff":
            router.push("/staff");
            router.refresh();
            break;
          case "parent":
            router.push("/parent");
            router.refresh();
            break;
            case "super-admin":
            router.push("/super-admin");
            router.refresh();
            break;
          default:
            router.push("/");
            router.refresh();
        }
      }
    } catch (err) {
      setError("Invalid email or password");
      setIsLoading(false);
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
          <div className="mb-8">
            <Title level={2} className="mb-1 text-center">
              Sign In
            </Title>
          </div>

          <form onSubmit={handleSubmit} className="py-6">
            <Input
              label="Email Address"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youremail@gmail.com"
              className="text-[--color-text-light] rounded-2xl"
            />

            <PasswordInput
              label="Password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="py-6"
            />

            <div className="flex justify-between items-center  mb-6">
              <Checkbox
                id="remember-me"
                name="remember-me"
                label="Remember me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <a
                href="#"
                className="text-[var(--color-secondary)] hover:text-[var(--color-secondary-dark)] "
              >
                Forgot Password?
              </a>
            </div>

            <div className="w-full flex justify-center">
              <Button
                type="submit"
                variant="primary"
                fullWidth
                size="lg"
                className="mb-6 shadow-md"
                
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </div>
          </form>

          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          <div className="text-center ">
            <a
              href="#"
              className="text-[var(--color-secondary)] text-lg hover:underline"
            >
              Don't have an account?
            </a>
          </div>
          <div className="w-full flex justify-center">
            <Image width={200} height={10} className="object-cover " src='/hisgroup1.png' alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}
