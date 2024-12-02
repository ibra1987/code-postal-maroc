import Link from "next/link"





function page() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-start px-4">

<h1 className=" font-bold text-3xl">Conditions Générales d&apos;Utilisation</h1>

<h2 className="font-medium text-xl">Préambule</h2>
<p>Les présentes conditions générales d&apos;utilisation  régissent l&apos;utilisation du site web <Link className="font-medium" href={"/"}>Code Postal Maroc</Link>  . En accédant et en utilisant le Site, vous acceptez sans réserve les présentes CGU.</p>

<h2 className="font-medium text-xl">Objet</h2>
<p>Le Site a pour objet de faciliter la recherche des codes postaux au Maroc.</p>

<h2 className="font-medium text-xl">Acceptation des CGU</h2>
<p>L&apos;utilisation du Site implique l&apos;acceptation pleine et entière des présentes CGU. En cas de non-acceptation, l&apos;utilisateur doit renoncer à toute utilisation du Site.</p>

<h2 className="font-medium text-xl">Contenu du Site</h2>
<p> Le site propose de multiple méthode pour retrouver le code postal d&apos;une ville ou localité.</p>

<h2 className="font-medium text-xl">Responsabilité</h2>
<p>[Décrire votre responsabilité en tant qu&apos;éditeur du site, les limites de votre responsabilité, etc.]</p>

<h2 className="font-medium text-xl">Données personnelles</h2>
<p>La politique de confidentialité du Site, accessible à l&apos;adresse suivante <Link className="font-medium" href={"/politique-de-confidentialite"}> https://codepostalmaroc.ma/politique-de-confidentialite</Link>, décrit comment nous collectons, utilisons et protégeons vos données personnelles.</p>

<h2 className="font-medium text-xl">Liens hypertextes</h2>
<p>Le site peut contenir des liens pour d&apos;autre sitew web tiers pour soit plus d&apos;informations ou pour affiliations  et publicité, vous pouvez en savoir plus <Link className="font-medium" href={"/disclaimer"}>
ici</Link></p>

<h2 className="font-medium text-xl">Modification des CGU</h2>
<p>Nous nous réservons le droit de modifier à tout moment les présentes CGU.</p>

<h2 className="font-medium text-xl">Droit applicable</h2>
<p>Les présentes CGU sont soumises au droit Marocain.</p>

<h2 className="font-medium text-xl">Contact</h2>
<p>Pour toute question relative aux présentes CGU, vous pouvez nous contacter à l&apos;adresse suivante : brahimdriouch.dev@gmail.com .</p>
        
    </main>
  )
}

export default page