import { useRef, useState } from "react";
import { useForm} from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import Error from "../components/Error";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const onSubmit = () => {
   
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm("service_hatdu7z", "template_vwm1dda", form.current, {
          publicKey: "LfdNX5lA67h4L3K9H",
        })
        .then(() => {
          setLoading(false);
          toast.success("¡Mensaje enviado con éxito!", {
            className: "bg-slate-900 text-white border border-[#ae31fc]",
            progressClassName: "Toastify__progress-bar",
          });
          form.current?.reset();
        })
        .catch(() => {
          toast.error("Hubo un error. Inténtalo de nuevo.");
        })
        .finally(() => setLoading(false));
    }
  };
  return (
    <div className="relative w-full flex flex-col gap-2 sm:w-4/5  bg-[rgb(26,26,26)] mx-auto my-2 pb-4 lg:mx-16 rounded-lg overflow-y-scroll">
      <div className="mx-3 flex flex-col my-auto mt-4 justify-between gap-2 sm:px-6 md:px-10 lg:px-20 lg:w-2/3 sm:mx-auto animate-fade-down">
        <h1 className="text-2xl sm:text-4xl mx-auto font-bold text-white ">
          <span className="text-transparent tracking-widest bg-clip-text bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9]">
            Contacto
          </span>
        </h1>

        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="relative w-full mt-8 mx-auto flex flex-col gap-4  bg-[rgb(18,18,18)] p-4 sm:p-8 rounded-xl shadow-[0_0px_5px_rgba(10,135,245,0.8)]"
        >
          {/* <div className='bg-[rgb(18,18,18)] p-2 absolute -top-11 left-1/2 -translate-x-1/2 rounded-t-lg shadow-[0_0px_5px_rgba(10,135,245,0.8)] -z-10'>
                  <h2 className=' w-fit font-bold text-lg sm:text-xl text-[#fc31f9]'>Enviame un Mensaje</h2>
              </div>  */}
          <input
            type="text"
            placeholder="Nombre"
            // name="user_name"
            className="bg-[rgb(30,30,30)] rounded-md p-1 sm:p-2 border-2 border-slate-700"
            {...register("user_name", {
              required: "El nombre es obligatorio",
            })}
          />
          {errors.user_name && <Error>{errors.user_name.message}</Error>}
          <input
            type="text"
            placeholder="Email"
            // name="user_email"
            className="bg-[rgb(30,30,30)] rounded-md p-1 sm:p-2 border-2 border-slate-700"
            {...register("user_email", {
              required: "El Email es Obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email No Válido",
              },
            })}
          />
          {errors.user_email && <Error>{errors.user_email?.message}</Error>}
          <textarea
            // name="message"
            className="bg-[rgb(30,30,30)] rounded-md p-2 border-2 border-slate-700"
            {...register("message", {
              required: "El campo es obligatorio",
            })}
          ></textarea>
          {errors.message && <Error>{errors.message?.message}</Error>}
          <div
            className={`w-full mx-auto cursor-pointer mt-4 rounded-md 
  ${
    loading
      ? "opacity-50 cursor-not-allowed"
      : "hover:shadow-[0_0_20px_rgba(174,49,252,0.6)]"
  } 
  bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9]`}
          >
            <div className="m-0.5 bg-slate-800 rounded-md p-1 lg:p-2 text-center">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Enviar"
                )}
              </button>
            </div>
          </div>
        </form>

        <h2 className="text-xl font-bold text-[#fc31f9] mt-4">
          Links de Interés
        </h2>
        <div className="w-full max-w-full bg-[rgb(18,18,18)] rounded-lg flex flex-col justify-between py-2 px-4">
          <div className="flex  items-center gap-4">
            <SiLinkedin className="w-6 h-6  inline-block text-[#ae31fc] hover:scale-110 hover:text-[#fc31f9]" />
            <a
              className="truncate"
              href="https://www.linkedin.com/in/vlopez2828/"
              target="_blanck"
            >
              https://www.linkedin.com/in/vlopez2828/
            </a>
          </div>
        </div>
        <div className="w-full max-w-full bg-[rgb(18,18,18)] rounded-lg flex flex-col justify-between py-2 px-4">
          <div className="flex  items-center gap-4">
            <SiGithub className="w-6 h-6  inline-block text-[#ae31fc] hover:scale-110 hover:text-[#fc31f9]" />
            <a
              className="truncate"
              href="https://github.com/vickylopez2828"
              target="_blanck"
            >
              https://github.com/vickylopez2828
            </a>
          </div>
        </div>
        <div className="w-full max-w-full bg-[rgb(18,18,18)] rounded-lg flex flex-col justify-between py-2 px-4">
          <div className="flex  items-center gap-4">
            <SiGmail className="w-6 h-6  inline-block text-[#ae31fc] hover:scale-110 hover:text-[#fc31f9]" />
            <a className="truncate" href="#" target="_blanck">
              vickylopez2828@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
