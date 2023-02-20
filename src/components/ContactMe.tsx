import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function ContactMe({}: Props) {
  // react hook form >> formData
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:maxmonthonkachana2@gmail.com?subject=${formData.subject}&body= Hi My name is 
    ${formData.name}.${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I Have Got Just What You Need. {""}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Take.</span>
        </h4>
        <div className=" flex items-center space-x-5 justify-center">
          <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl ">090-915-3638+</p>
        </div>
        <div className=" flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl ">maxmonthonkachana2@gmail.com</p>
        </div>
        <div className=" flex items-center space-x-5 justify-center">
          <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2xl ">Bang Krang, Nonthaburi 11000 , Thailand</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className="contactInput"
            />
            <input
              {...register("email")}
              type="text"
              placeholder="Emali"
              className="contactInput"
            />
          </div>
          <input
            {...register("subject")}
            type="text"
            placeholder="Subject"
            className="contactInput"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          ></textarea>

          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
