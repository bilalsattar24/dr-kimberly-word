import { Hero } from "@/app/sections/Hero";
import { Message } from "@/app/sections/Message";
import { EmailForm } from "@/app/sections/EmailForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Message />
      <EmailForm />
    </main>
  );
}
