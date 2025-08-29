import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LoginButton } from "@/components/auth/login-button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center px-6 py-24 text-center bg-[#000000] text-white">
      <div className="space-y-6">
        <h1 className="font-bold text-white drop-shadow-md">🔒 Full Auth</h1>
        <LoginButton mode="modal">
          <Button variant="secondary" className="cursor-pointer">
            SignUp
          </Button>
        </LoginButton>
      </div>
    </main>
  )
}
