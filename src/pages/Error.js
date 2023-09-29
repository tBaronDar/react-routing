import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An Error has occured!</h1>
        <p>The page was not found.</p>
      </main>
    </>
  );
}

export default ErrorPage;
