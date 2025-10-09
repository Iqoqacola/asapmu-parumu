const Card = ({ title, context }) => {
  return (
    <div className="bg-[var(--Background-color)] rounded-lg shadow-lg p-4 w-72 sm:w-80 md:w-96 flex items-center flex-col">
      <h1 className="text-[var(--Warning-color)] text-3xl font-bold mb-2 uppercase">
        {title}
      </h1>
      <p className="text-[var(--Text-grey)] text-xl text-center font-semibold">
        {context}
      </p>
    </div>
  );
};

export default Card;
