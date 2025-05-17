import { Button } from "antd";

export default function Home() {
  return (
    <div className="relative">
      <div className="w-full h-14 fixed z-50 top-0 left-0 bg-orange-300 flex justify-between items-center p-2">
        <img src="/Jira_Logo.svg.png" className="h-8" alt="Jira Logo" />
        <div className="flex items-center gap-4">
          <Button type="primary" href="/signin">
            Sign in
          </Button>
          <Button
            type="primary"
            className="bg-green-500 text-white"
            href="/signup"
          >
            Sign up
          </Button>
        </div>
      </div>
      <video autoPlay loop muted className="w-full h-auto">
        <source src="/introduce.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
