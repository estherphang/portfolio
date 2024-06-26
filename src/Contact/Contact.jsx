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

      <div className="-mt-2 lg:grid lg:grid-cols-9 hidden md:block">
        <img
          src="https://raw.githubusercontent.com/estherphang/portfolio/4a1cd297c294a9a8138c0f793831ea880de2fe10/public/contact2by1.svg"
          alt="contact"
          className="col-start-2 col-span-7"
        />
      </div>

      <div className="md:hidden">
        <img
          src="https://raw.githubusercontent.com/estherphang/portfolio/4a1cd297c294a9a8138c0f793831ea880de2fe10/public/contact1by2.svg"
          alt="contact"
          className=""
        />
      </div>

      <Form />
    </>
  );
}
