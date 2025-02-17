import commloan_logo_MAIN from "./assets/commloan_logo_MAIN.png";
import WP1 from "./assets/WP1.png";
import two from "./assets/two.png";
import "@fillout/react/style.css";
import { FilloutPopupEmbedButton } from "@fillout/react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* HEADER SECTION */}
      <header
        className="relative flex items-center justify-center h-screen text-white text-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(10,23,64,1), rgba(10,23,64,0.5)), url(${commloan_logo_MAIN})`,
          backgroundSize: "contain", // Makes the image fit without stretching
          backgroundPosition: "center 85%", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
      >
        <div className="max-w-5xl px-6">
          {" "}
          {/* Changed from max-w-3xl to max-w-5xl */}
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-white">
            Unlock the best CRE Debt
          </h1>
          <p className="mt-4 text-2xl text-gray-300">
            Delivering intelligent financing solutions for commercial real
            estate investors. $1MM–$200MM transactions secured through trusted
            lender partnerships.
          </p>
          <div className="mt-8">
            <FilloutPopupEmbedButton
              filloutId="js1DZCG8E4us"
              inheritParameters
              text="Get the best CRE Options Now"
              color="#ff881b"
              size="large"
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-600 focus:ring focus:ring-orange-300 hover:shadow-2xl hover:shadow-orange-500/60"
            />
          </div>
        </div>
      </header>

      {/* STATS SECTION */}
      <section className="bg-white text-darkBlue py-16">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-around text-center gap-8">
          {[
            { value: "$2.5B+", label: "Closed Transactions" },
            { value: "750+", label: "Trusted Lender Network" },
            { value: "97%", label: "Success Close Rate" },
          ].map((stat, index) => (
            <div key={index} className="p-4">
              <h3 className="text-5xl font-bold text-darkBlue">{stat.value}</h3>
              <p className="text-sm uppercase tracking-wide text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 mt-16 p-6">
        <img
          src={two}
          alt="Kushaal Malde"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="bg-white p-8 shadow-lg rounded-lg md:w-2/3">
          <h3 className="text-3xl font-serif font-bold text-darkBlue">
            Kushaal Malde
          </h3>
          <p className="text-lg text-gray-600 font-medium">
            The CRE Debt Broker
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            With a degree in Mathematics from UC Berkeley and deep CRE
            investment experience, I specialize in structuring the best
            financing options. I negotiate with lenders to create smarter, more
            efficient financing solutions that align with your investment goals.
          </p>
          <ul className="mt-4 space-y-3 text-gray-800">
            <li>
              <span className="text-orange-500">✓</span> Access to 750+ CRE
              lenders via CommLoan
            </li>
            <li>
              <span className="text-orange-500">✓</span> Streamlined financing
              for transactions of $1MM–$200MM+
            </li>
            <li>
              <span className="text-orange-500">✓</span> Tailored solutions
              across Multifamily, Office, Industrial, and Development
            </li>
          </ul>
          <h2 className="mt-6 text-lg font-serif font-semibold text-darkBlue">
            CommLoan is the only CRE debt marketplace where 750+ lenders compete
            for your deal, using real-time data.
          </h2>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <footer className="w-full bg-gray-100 py-8 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-darkBlue mb-4">
            Ready to unlock your best CRE options?
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Connect with trusted lenders and secure smarter, faster financing
            for your CRE investments.
          </p>
          <div>
            <FilloutPopupEmbedButton
              filloutId="js1DZCG8E4us"
              inheritParameters
              text="Get the best CRE Options Now"
              color="#ff881b"
              size="large"
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-600 focus:ring focus:ring-orange-300 hover:shadow-2xl hover:shadow-orange-500/60"
            />
          </div>
        </div>
      </footer>

      {/* FOOTER */}
      <footer className="bg-darkBlue text-white text-center py-6 mt-16">
        <p className="mt-2 text-sm text-gray-700">
          NMLS -1597276 | Licensing - Arizona: 0943012; California: 02048126
        </p>
        <p className="text-sm text-gray-700">
          © 2025 The CRE Debt Broker. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
