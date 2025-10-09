const ErrorPage = () => {
  return (
    <>
      <div
        className="mb-16 flex justify-center items-center"
        style={{ height: "80vh" }}
      >
        <div className="hero-content text-center">
          {" "}
          <div className="font-bold text-2xl">
            <h2>Oops!</h2>
            <p>Sorry, an unexpected error has occured</p>
            <p>404 Not Found</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
