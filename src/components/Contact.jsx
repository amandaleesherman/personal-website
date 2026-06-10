import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-black">
      <div className="max-w-xl w-full px-8">
        <h2 className="text-5xl font-bold mb-10 text-center">
          Contact
        </h2>

        <form
          action="https://formspree.io/f/xrevlwry"
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full p-4 rounded bg-zinc-900"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-4 rounded bg-zinc-900"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            required
            className="w-full p-4 rounded bg-zinc-900"
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 py-4 rounded hover:bg-cyan-400"
          >
            Send Message
          </button>
        </form>

        {/* <div className="text-center mt-10 text-gray-400">
          <p>asherman@umass.edu</p>
          <p>LinkedIn | GitHub</p>
        </div> */}

        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://github.com/amandaleesherman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub size={32} />
          </a>

          <a
            href="https://www.linkedin.com/in/asherman19/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin size={32} />
          </a>

          <a
            href="mailto:asherman@umass.edu"
            className="hover:text-cyan-400 transition"
          >
            <Mail size={32} />
          </a>
        </div>

      </div>
    </div>
  );
}

export default Contact;