import { title1 } from "../Components/StyleLibrary/ClassName";
import Form from "./Form";

export default function Contact() {
  return (
    <>
      <h1 className={`${title1} + text-center`}>
        Get in touch for opportunities or just to say hi!{" "}
      </h1>
      <p className="mt-4">
        Thank you for visiting my page! I'm always excited to connect with new
        people and explore potential collaborations. Whether you're looking for
        a creative partner to bring your project to life, need innovative
        marketing strategies, or want to improve user experiences through design
        and coding, I'm here to help. Feel free to reach out for professional
        inquiries, collaboration opportunities, or any other business-related
        matters. Let's create something amazing together!
      </p>
      <Form />
    </>
  );
}
