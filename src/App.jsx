import commloan_logo from "./assets/commloan_logo.jpeg";
import "@fillout/react/style.css";
import { FilloutPopupEmbedButton } from "@fillout/react";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      {/* Header with Logo */}
      <header className="mb-8">
        <a href="#" className="inline-block">
          <img
            src={commloan_logo}
            className="w-32 md:w-32 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
            alt="CommLoan logo"
          />
        </a>
      </header>

      {/* Main Content */}
      <main className="bg-white max-w-2xl p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Get the Best Commercial Loan—Faster & Smarter.
        </h1>
        <div className="flex justify-center items-center text-center">
          <p className="text-lg text-gray-700 font-medium max-w-3xl text-justify">
            Hi, my name is <span className="font-bold">Kushaal</span>. I'm a
            Commercial Mortgage expert with a
            <span className="font-semibold"> UC Berkeley math background</span>{" "}
            and real-world
            <span className="font-semibold"> CRE investment experience</span>.
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
          <span className="font-bold text-gray-900"> 750+ lenders</span> compete
          for your deal. We use{" "}
          <span className="font-bold text-gray-900">
            real-time lender data{" "}
          </span>
          to negotiate{" "}
          <span className="font-bold text-green-700">
            the lowest rates & best terms for your deal—efficiently
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
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-green-700 focus:ring focus:ring-green-300"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
