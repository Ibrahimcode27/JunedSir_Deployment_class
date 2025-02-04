import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center animate-pulse drop-shadow-lg">
        🚀{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
          Ibrahim ne kardiya Deployment!
        </span>{" "}
        🎉🔥
      </h1>
    </div>
  );
}
