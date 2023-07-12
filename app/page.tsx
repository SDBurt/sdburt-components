import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="container p-10 flex-col space-y-2">
      <div className="flex justify-between">
        <h1 className="text-primary font-bold text-lg">SDBurt Components</h1>
        <ModeToggle />
      </div>
      <section>
        The content of this site is the storybook cli. If you see this,
        something went wrong
      </section>
    </main>
  );
}
