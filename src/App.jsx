import commloan_logo from "./assets/commloan_logo.jpeg";
import commloan_logo_MAIN from "./assets/commloan_logo_MAIN.png";
import WP1 from "./assets/WP1.png";
import "@fillout/react/style.css";
import { FilloutPopupEmbedButton } from "@fillout/react";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      {/* Header with Logo */}
      <header className="mb-8">
        <a href="#" className="inline-block">
          <img
            src={commloan_logo_MAIN}
            className="w-136 md:w-136 rounded-lg transition-transform duration-300 hover:scale-105"
            alt="CommLoan logo"
          />
        </a>
      </header>

      {/* Main Content */}
      <main className="bg-white max-w-2xl p-8 rounded-2xl shadow-xl text-center transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Get the Best Commercial Loan—Faster & Smarter.
        </h1>
        <div className="flex justify-center items-center text-center">
          <p className="text-lg text-gray-700 font-medium max-w-3xl text-justify">
            Hi 👋, my name is <span className="font-bold">Kushaal.</span>
            <span className="block mt-4">
              I'm a Commercial Mortgage expert with a
              <span className="font-semibold">
                {" "}
                degree in Mathematics from UC Berkeley and
              </span>{" "}
              real-world
              <span className="font-semibold">
                {" "}
                CRE investment experience,
              </span>{" "}
              giving me the analytical edge to structure smarter, more efficient
              financing solutions.
            </span>
            <span className="block mt-4"></span>I specialize in bringing the
            best financing options to the table. Through my partnerships with
            <span className="font-bold"> 100s of lenders</span>, I negotiate and
            create tailored solutions that align with your investment goals.
          </p>
        </div>

        <div className="border-t border-gray-300 my-6"></div>

        <p className="text-gray-600 leading-relaxed text-lg text-justify">
          <span className="font-bold text-gray-900">CommLoan</span> is the
          <span className="font-bold text-green-700">
            {" "}
            only lender-neutral platform
          </span>{" "}
          where
          <span className="font-bold text-gray-900">
            {" "}
            750+ lenders compete{" "}
          </span>
          for your deal. We leverage{" "}
          <span className="font-bold text-gray-900">
            real-time lender data{" "}
          </span>
          to efficiently secure{" "}
          <span className="font-bold text-green-700">
            the best rates & best terms for your deal
          </span>
          .
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <FilloutPopupEmbedButton
            filloutId="js1DZCG8E4us"
            inheritParameters
            text="Get Your Best Loan Options Now"
            color="green"
            size="large"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-700 focus:ring focus:ring-green-300 hover:shadow-2xl hover:shadow-green-500/60"
          />
        </div>

        <div className="mt-8 p-4 border border-gray-300 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 font-semibold">
            LICENSING INFORMATION
          </p>
          <p className="mt-2 text-sm text-gray-600">
            NMLS -1597276 | Licensing - Arizona: 0943012; California: 02048126
          </p>
        </div>

        <div className="mt-8">
          <img src={WP1} alt="CommLoan Banner" className="w-full h-auto" />
        </div>
      </main>
    </div>
  );
}

export default App;
