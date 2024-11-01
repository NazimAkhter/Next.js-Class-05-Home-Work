import Link from "next/link";

export default function Contact() {
  return (
    <section className="h-[68vh]">
      <div className="pt-44">
        <h1 className=" text-blue-950 text-5xl font-bold text-center">
          Contact us:
        </h1>
        <div className="bg-slate-50 p-6 mx-80 mt-2 text-center rounded-xl hover:cursor-pointer">
          <p>
            <Link href="mailto:zhp.gfx@gmail.com">zhp.gfx@gmail.com</Link>
          </p>
          <p>
            Address: Plot No. 712/2, Jamshed Road, Fatima Jinnah Colony,
            Karachi.
          </p>
          <p>Phone: +92 321 920 56 88</p>
        </div>
      </div>
    </section>
  );
}
