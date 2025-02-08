const Notification = ({ status, title, message }) => {
  let statusClasses = "";

  if (status === "error") {
    statusClasses = "bg-red-700";
  }
  if (status === "success") {
    statusClasses = "bg-teal-500";
  }

  return (
    <section
      className={`w-full h-12 flex justify-between items-center px-10 bg-[#1a8ed1] text-white ${statusClasses}`}
    >
      <h2 className="text-base font-semibold">{title}</h2>
      <p className="text-sm">{message}</p>
    </section>
  );
};

export default Notification;
