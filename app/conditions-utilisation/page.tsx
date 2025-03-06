import { Metadata } from "next";
import Link from "next/link";

// We&apos;ll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn&apos;t been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = false; // or false, to 404 on unknown paths

export const metadata: Metadata = {
  title: "Conditions Générales d&apos;Utilisation",
  description: "Code Postal Maroc - Conditions Générales d&apos;Utilisation",
};

function TermsPage() {
  return (
    <main className="w-full flex min-h-screen flex-col items-start gap-6 justify-start px-4 py-20 md:px-20">
      <h1 className=" font-bold text-3xl">
        Conditions Générales d&apos;Utilisation
      </h1>

      <h2 className="font-medium text-xl">Préambule</h2>
      <p>
        Les présentes conditions générales d&apos;utilisation régissent
        l&apos;utilisation du site web{" "}
        <Link className="font-medium" href={"/"}>
          Code Postal Maroc
        </Link>{" "}
        . En accédant et en utilisant le Site, vous acceptez sans réserve les
        présentes CGU.
      </p>

      <h2 className="font-medium text-xl">Objet</h2>
      <p>
        Le Site a pour objet de faciliter la recherche des codes postaux au
        Maroc.
      </p>

      <h2 className="font-medium text-xl">Acceptation des CGU</h2>
      <p>
        L&apos;utilisation du Site implique l&apos;acceptation pleine et entière
        des présentes CGU. En cas de non-acceptation, l&apos;utilisateur doit
        renoncer à toute utilisation du Site.
      </p>

      <h2 className="font-medium text-xl">Contenu du Site</h2>
      <p>
        {" "}
        Le site propose de multiple méthode pour retrouver le code postal
        d&apos;une ville ou localité.
      </p>

      <h2 className="font-medium text-xl">Responsabilité</h2>
      <div>
        Le site CodePostalMaroc.com a pour objectif de fournir des informations
        sur les codes postaux au Maroc de manière claire et accessible. Nous
        nous efforçons d&apos;assurer l&apos;exactitude et l&apos;actualisation
        des données publiées, mais nous ne pouvons garantir l&apos;absence
        totale d&apos;erreurs ou d&apos;omissions.
        <h4 className="font-bold my-2">Limitations de responsabilité</h4>
        <h5 className="font-medium my-1">Exactitude des informations:</h5> Les
        données publiées sur ce site proviennent de sources variées et peuvent
        être sujettes à des mises à jour. Nous ne garantissons pas
        l&apos;exactitude, l&apos;exhaustivité ou la pertinence des informations
        fournies.
        <h5 className="font-medium my-1">
          Utilisation des informations :{" "}
        </h5>{" "}
        L&apos;utilisation des informations disponibles sur CodePostalMaroc.com
        se fait sous la seule responsabilité de l&apos;utilisateur. Nous ne
        pouvons être tenus responsables des conséquences de l&apos;utilisation
        de ces données, qu&apos;elles soient directes ou indirectes.
        <h5 className="font-medium my-1">Dommages et interruptions :</h5> Nous
        ne pouvons être tenus responsables en cas de dysfonctionnement,
        d&apos;interruptions ou d&apos;erreurs affectant l&apos;accès au site.
        L&apos;utilisation du site implique l&apos;acceptation des risques liés
        à la navigation sur Internet.
        <h5 className="font-medium my-1">Liens externes :</h5> Le site peut
        contenir des liens vers des sites tiers. Nous ne sommes pas responsables
        du contenu, de la disponibilité ou de l&apos;exactitude des informations
        présentes sur ces sites. En accédant et en utilisant
        CodePostalMaroc.com, l&apos;utilisateur reconnaît avoir pris
        connaissance des présentes conditions et accepte les limitations de
        responsabilité qui y sont exposées.
      </div>

      <h2 className="font-medium text-xl">Données personnelles</h2>
      <p>
        La politique de confidentialité du Site, accessible à l&apos;adresse
        suivante{" "}
        <Link className="font-medium" href={"/politique-de-confidentialite"}>
          {" "}
          https://codepostalmaroc.ma/politique-de-confidentialite
        </Link>
        , décrit comment nous collectons, utilisons et protégeons vos données
        personnelles.
      </p>

      <h2 className="font-medium text-xl">Liens hypertextes</h2>
      <p>
        Le site peut contenir des liens pour d&apos;autre sitew web tiers pour
        soit plus d&apos;informations ou pour affiliations et publicité, vous
        pouvez en savoir plus{" "}
        <Link className="font-medium" href={"/disclaimer"}>
          ici
        </Link>
      </p>

      <h2 className="font-medium text-xl">Modification des CGU</h2>
      <p>
        Nous nous réservons le droit de modifier à tout moment les présentes
        CGU.
      </p>

      <h2 className="font-medium text-xl">Droit applicable</h2>
      <p>Les présentes CGU sont soumises au droit Marocain.</p>

      <h2 className="font-medium text-xl">Contact</h2>
      <p>
        Pour toute question relative aux présentes CGU, vous pouvez nous
        contacter à l&apos;adresse suivante : brahimdriouch.dev@gmail.com .
      </p>
    </main>
  );
}

export default TermsPage;
