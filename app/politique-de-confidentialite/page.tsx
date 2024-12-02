import Link from "next/link"



function page() {
  return (
    <main className="w-full flex min-h-screen flex-col items-start justify-start gap-3">
        <h1 className=" font-bold text-3xl">Politique de Confidentialité</h1>

<h2  className="font-medium text-xl">Préambule</h2>
<p> <Link href={"/"} className="font-medium">Code Postal Maroc</Link> s&apos;engage à respecter votre vie privée et à protéger les données personnelles que vous nous communiquez. La présente politique de confidentialité a pour objectif de vous informer sur   
les modalités de collecte, d&apos;utilisation et de conservation de vos données personnelles lorsque vous utilisez nos services.</p>

<h2  className="font-medium text-xl">Collecte des données personnelles</h2>
<p>Nous collectons les données personnelles suivantes :</p>
<ul>
    <li>Données de navigation :<p> orsque vous visitez notre site, nous collectons des informations standard telles que votre adresse IP, le type de navigateur que vous utilisez, vos préférences en matière de langue et les pages que vous consultez. Ces données sont collectées à des fins statistiques et d&apos;amélioration de nos services.</p></li>
    <li>Données fournies volontairement : <p>Lorsque vous utilisez notre service de recherche de codes postaux, vous pouvez être amené à nous fournir certaines informations, telles que votre ville, votre quartier ou une partie de votre adresse. Ces données sont utilisées uniquement pour vous fournir le code postal correspondant.</p></li>
</ul>

<h2  className="font-medium text-xl">Utilisation des données personnelles</h2>
<p>Les données que nous collectons sont utilisées aux fins suivantes :</p>
<ul>
    <li>Fourniture de nos services : <p>Les données que vous nous fournissez sont principalement utilisées pour vous permettre de rechercher et de trouver les codes postaux au Maroc.</p></li>
    <li>Amélioration de nos services : <p> Les données de navigation nous permettent d&apos;analyser l&apos;utilisation de notre site et d&apos;apporter les améliorations nécessaires pour vous offrir une meilleure expérience utilisateur.</p></li>
    <li>Respect des obligations légales : <p>Nous pouvons être amenés à communiquer vos données à des tiers si la loi nous y oblige.</p></li>
</ul>

<h2  className="font-medium text-xl">Sécurité des données</h2>
<p>Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles et les protéger contre tout accès non autorisé, toute perte, toute altération ou toute destruction.</p>

<h2  className="font-medium text-xl">Partage des données</h2>
<p>Nous ne partageons pas vos données personnelles avec des tiers, sauf dans les cas suivants :</p>
<ul>
    <li>Avec votre consentement   
explicite : Nous pouvons partager vos données avec des tiers si vous nous y avez autorisés.</li>
    <li>Pour respecter les obligations légales : Nous pouvons être amenés à communiquer vos données à des tiers si la loi nous y oblige.
    </li>
</ul>

<h2  className="font-medium text-xl">Vos droits</h2>
<p>Conformément au lois en vigueur à l&apos;égard du traitement des données à caractère personnel,   
vous disposez des droits suivants   
:</p>
<ul>
    <li>Droit d&apos;accès : Vous pouvez demander à accéder aux données personnelles que nous détenons à votre sujet.</li>
    <li>Droit de rectification : Vous pouvez demander à rectifier toute donnée personnelle inexacte.   
    </li>
    <li>Droit d&apos;opposition : Vous pouvez vous opposer au traitement de vos données personnelles pour des motifs légitimes</li>
    <li>Droit à l&apos;effacement : Vous pouvez demander à supprimer vos données personnelles.   
    </li>
</ul>
<p>Pour exercer vos droits, veuillez nous contacter à l&apos;adresse suivante : brahimdriouch.dev@gmail.com.</p>

<h2  className="font-medium text-xl">Modifications de la politique de confidentialité</h2>
<p>Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. Toute modification sera publiée   
sur notre site web.</p>

<h2  className="font-medium text-xl">Loi applicable</h2>
<p>La présente politique de confidentialité est régie par le droit marocain.</p>

    </main>
  )
}

export default page