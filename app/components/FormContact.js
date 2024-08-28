import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", "dc24d6c6-a8e8-469f-9719-b4f196885d42");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.message);
        }
      })
      .catch((error) => setError(error));
  }

  if (error) {
    return <p>{error}</p>;
  }
  if (submitted) {
    return <p>I received your message, thank you for contacting me!</p>;
  }

  return (
    <div className="px-5 pb-5 lg:pb-10 text-center flex flex-col items-center justify-center">
      <div className="max-w-[700px] w-full mx-auto pt-4 ">
        <form
          onSubmit={handleSubmit}
          className="flex
      flex-col gap-5 "
        >
          <input
            placeholder="Your Name"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            placeholder="Email"
            name="email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="Subject"
            type="text"
            name="subject"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            placeholder="How can I help?"
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit" className="py-4 px-6 bg-[#854ce6] hover:bg-[#432479] transition duration-200 ease-in-out">
            GET IN TOUCH
          </button>
        </form>
      </div>
    </div>
  );
}
