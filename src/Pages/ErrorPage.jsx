import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div className="flex">
      <div className="mx-auto mt-40">
        <div className="text-2xl text-center">Not Found </div>
        <div className="text-2xl text-center">This Page Doesn't Exist</div>
        <span className="text-xl">
          If this is a mistake, click <Link to="/" className="text-blue-600 hover:underline">here</Link> to go back to
          Home
        </span>
      </div>
    </div>
  );
}
