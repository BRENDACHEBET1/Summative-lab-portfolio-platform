export default function Contact() {
  return (
    <div id="contact" className="flex justify-center gap-6 mt-6">

      {/* GitHub (dark gray) */}
      <svg
        className="w-8 h-8 text-gray-800 hover:text-black transition cursor-pointer"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 .5C5.7.5.7 5.6.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6-.8 1.9-1.2.1-.7.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.7-2.7 5.7-5.3 6 .4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A10.8 10.8 0 0 0 23.3 12C23.3 5.6 18.3.5 12 .5z"/>
      </svg>

      {/* LinkedIn (blue) */}
      <svg
        className="w-8 h-8 text-blue-600 hover:text-blue-800 transition cursor-pointer"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zM7 7h4.8v2.3h.1c.7-1.3 2.4-2.6 5-2.6 5.3 0 6.3 3.5 6.3 8V24h-5v-8.5c0-2-.1-4.5-2.8-4.5s-3.2 2.2-3.2 4.3V24H7V7z"/>
      </svg>

      {/* Twitter */}
      <svg
        className="w-8 h-8 text-sky-500 hover:text-sky-700 transition cursor-pointer"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M24 4.6c-.9.4-1.8.7-2.8.8 1-.6 1.7-1.5 2.1-2.6-.9.5-1.9.9-3 1.1a4.5 4.5 0 0 0-7.8 3.1c0 .3 0 .6.1.9A12.8 12.8 0 0 1 1.6 3.2a4.5 4.5 0 0 0 1.4 6c-.8 0-1.5-.2-2.1-.6v.1c0 2.2 1.6 4.1 3.7 4.5-.4.1-.9.2-1.4.2-.3 0-.7 0-1-.1a4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 0 19.5a12.7 12.7 0 0 0 6.9 2"/>
      </svg>

      {/* Email  */}
      <svg
        className="w-8 h-8 text-red-500 hover:text-red-700 transition cursor-pointer"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>

    </div>
  );
}