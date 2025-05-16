import Navbar from "../components/Navbar";

const Error = () => {
  return (
    <section>
      <Navbar />
      <div className="flex flex-col justify-center items-center pt-40">
        <h1 className="text-3xl font-bold text-white">Error 404</h1>
        <h1 className="text-3xl font-bold text-white">Page Not Found!</h1>
      </div>
    </section>
  );
};

export default Error;
