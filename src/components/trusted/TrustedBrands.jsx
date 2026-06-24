import "./TrustedBrands.css";

function TrustedBrands() {
  const brands = [
    "carhartt",
    "U.S. Department of Defense",
    "UNITED",
    "PUMA",
    "Coca-Cola",
    "vodafone",
  ];

  return (
    <section className="trusted">

      <div className="trusted-header">
        <h2>Trusted by leaders worldwide</h2>
      </div>

      <div className="brands-row">
        {brands.map((brand, index) => (
          <div key={index} className="brand-item">
            {brand}
          </div>
        ))}
      </div>

    </section>
  );
}

export default TrustedBrands;