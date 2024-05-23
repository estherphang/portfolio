import { useState } from "react";
import { textField, yellowBtn } from "../Components/StyleLibrary/ClassName";

export default function Form() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_SOME_MESSAGE_KEY) ||
      window.config?.API_KEY;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label className={`${textField}`}>
          <input
            type="text"
            name="first_name"
            className="grow"
            placeholder="First Name"
            required
          />
        </label>

        <label className={`${textField}`}>
          <input
            type="text"
            name="last_name"
            className="grow"
            placeholder="Last Name"
            required
          />
        </label>

        <label className={`${textField}`}>
          <input
            type="email"
            name="email"
            className="grow"
            placeholder="Email"
          />
        </label>

        <label className={`${textField}`}>
          <input
            type="subject"
            name="subject"
            className="grow"
            placeholder="Subject"
            required
          />
        </label>

        <textarea
          className="textarea textarea-bordered flex items-center gap-2 w-full h-36 text-base mt-4"
          type="message"
          name="message"
          placeholder="Message"
          required
        ></textarea>

        <button className={`${yellowBtn} + mt-4`} type="submit">
          Submit Form
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
}
