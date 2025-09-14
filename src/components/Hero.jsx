export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 pt-20">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
        Tagline : <span className="text-blue-800">“Empowering Maritime Innovation for a Sustainable Future”</span>
      </h1>
      <img
        src="/ship.png" // taruh gambar kapal di public/ship.png
        alt="Kapal"
        className="max-w-4xl w-full mt-6"
      />
      <div className="mt-6 flex gap-2">
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span className="w-3 h-3 bg-blue-900 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
      </div>
    </section>
  );
}
