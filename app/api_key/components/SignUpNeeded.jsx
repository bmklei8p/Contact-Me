import Image from "next/image"
import { useState, useEffect } from "react";
import Vault from "../../../public/vault.svg";
import { signIn, getProviders } from "next-auth/react";


const SignUpNeeded = () => {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <>
    <h2 className="text-3xl mt-16 mb-8">
      An API Key is required to use this product.
    </h2>
    <Image src={Vault} alt="vault" width={200} height={200} />
    <h3 className="text-2xl mt-8 mb-8">
      Please sign in or sign up to continue
    </h3>
    {providers &&
      Object.values(providers).map((provider) => (
        <button
          type="button"
          key={provider.name}
          onClick={() => signIn(provider.id)}
          className="min-w-fit px-4 py-2 text-lg font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
          <p>Sign Up</p>
        </button>
      ))}
  </>
  )
}

export default SignUpNeeded