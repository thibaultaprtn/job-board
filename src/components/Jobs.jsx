import Job from "./Job";

const Jobs = () => {
  return (
    <div className="container">
      <div className="grid">
        <Job
          title="Full Times Sales Associates - Sydney Boutique"
          type="CDI"
          country="Australie"
          city="Sydney"
          color="red"
        />
        <Job
          title="Agent de Sécurité - Pantin"
          type="CDI"
          country="France"
          city="Pantin"
          color="green"
        />
        <Job
          title="Responsable d'Atelier (H/F)"
          type="CDD"
          country="France"
          city="Paris"
          color="yellow"
        />
        <Job
          title="Chef de Projets"
          type="CDD"
          country="France"
          city="Paris"
          color="blue"
        />
        <Job
          title="Développeur React.js"
          type="CDI"
          country="France"
          city="Paris"
          color="pink"
        />
        <Job
          title="Sales Associate Stockholm"
          type="CDI"
          country="Suède"
          city="Stockholm"
          color="red"
        />
        <Job
          title="Vendeur/se - Crans Montana"
          type="CDI"
          country="Suisse"
          city="Crans-Montana"
          color="green"
        />
        <Job
          title="CRM & Data Quality Analyst"
          type="CDI"
          country="USA"
          city="New York"
          color="yellow"
        />
        <Job
          title="Infirmier (H/F)"
          type="CDI"
          country="France"
          city="Pantin"
          color="blue"
        />
      </div>
    </div>
  );
};

export default Jobs;
