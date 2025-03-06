import { Metadata } from "next";







export const dynamicParams = false; // or false, to 404 on unknown paths

export const metadata: Metadata = {
  title: 'Disclaimer ',
  description: 'Code Postal Maroc - Disclaimer',
}

function DisclaimerPage() {
  return (
    <main className="w-full  flex min-h-screen flex-col items-center justify-start px-4 md:px-20 mt-24">
        Notre site peut inclure des publicités ou des liens d&apos;affiliation. Cela signifie que nous pouvons percevoir une commission lorsque vous cliquez sur ces liens ou effectuez un achat via ces derniers. Ces publicités et partenariats nous permettent de maintenir et de développer nos services tout en restant accessibles gratuitement pour les utilisateurs.

Nous tenons à préciser que les produits ou services promus via des publicités ou des affiliations sont choisis avec soin. Cependant, nous ne garantissons ni la qualité, ni la pertinence, ni la disponibilité de ces produits ou services. Toute décision d&apos;achat ou d&apos;utilisation relève de votre entière responsabilité.

Merci de votre compréhension et de votre soutien à notre plateforme.
    </main>
  )
}

export default DisclaimerPage