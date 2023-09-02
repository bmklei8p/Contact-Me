import Link from "next/link";

const UrlBlock = () => {
  return (
    <div className="w-full mt-8">
      <h2 className="text-xl font-bold text-left mt-2">Request information</h2>
      <div className="w-full rounded-lg bg-gray-50 text-gray-900 mt-2 py-2 px-4 text-left flex flex-col gap-y-2">
        <p>
          <span className="font-bold">URL:</span>{" "}
          https://portfolio-email-service.azurewebsites.net/submit-form
        </p>
        <p>
          <span className="font-bold">Method:</span> POST
        </p>
        <p>
          <span className="font-bold">Body:</span>
        </p>
        <div className="px-6 flex-col">
          {`{`}
          <p className="mt-1">
            <strong>"recieverEmail":</strong> "Your Email Here",
          </p>
          <p className="mt-1">
            <strong>"API_KEY":</strong> "Your API Key Here",
          </p>
          <p className="mt-1">
            <strong>"subject":</strong> "From contact form",
          </p>
          <p className="mt-1">
            <strong>"comment":</strong> "From contact form",
          </p>
          <p className="mt-1">
            <strong>"senderName":</strong> "From contact form",
          </p>
          <p className="mt-1">
            <strong>"senderEmail":</strong> "From contact form"
          </p>
          {`}`}
        </div>
      </div>
      <div className="mt-2 border-blue-500 border-2 px-2 py-2 rounded-lg">
        <p>
          * Your recieverEmail must match the email that was used to sign up for
          Contact Me
        </p>
        <p>
          * Your API_KEY can be found under{" "}
          <Link className="text-blue-500" href={"/api_key"}>
            API Key
          </Link>
        </p>
        <p>* All other fields are inputted by your portfolio users</p>
      </div>
      <h2 className="text-xl font-bold text-left mt-8">Response information</h2>
      <div className="w-full rounded-lg bg-gray-50 text-gray-900 mt-2 py-2 px-4 text-left flex flex-col gap-y-2">
        <p>
          <strong>201:</strong> Successful request. Email created and will be
          recieved
        </p>
        <p>
          <strong>401:</strong> Failed request. API Key or email invalid
        </p>
        <p>
          <strong>500:</strong> Failed request. Most likely something invalid
          with body or formatting
        </p>
      </div>
      <div className="mt-2 border-blue-500 border-2 px-2 py-2 rounded-lg">
        <span>* If you recieve a 500 error not resolved by proper formatting and all information correctly in body please open an issue at:
        <p className="text-sm md:text-md text-blue-500"><Link href="https://github.com/bmklei8p/email_service/issues">https://github.com/bmklei8p/email_service/issues</Link></p>
        </span>
      </div>
    </div>
  );
};

export default UrlBlock;
