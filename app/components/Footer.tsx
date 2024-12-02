import Link from "next/link";


export default function Footer() {
  return (  
    <footer className="w-full bg-black text-gray-400 p-6">
      <div className="flex w-full justify-center items-center gap-10">
      <Link href={"/politique-de-confidentialite"}>Politique de confidentialité</Link>
      <Link href={"/conditions-utilisation"}>Conditions d&aposutilisation</Link>
      <Link href={"/disclaimer"}>Avis concernant la publicité </Link>
      </div>
      <p className="text-center">
        Le contenu de ce site est purement informatif et ne représente pas une autorité officielle. 
      </p>
      <p className="text-center">
        Si vous avez des remarques ou des suggestions, n&aposh sitez pas   nous contacter.
      </p>
      <p className="text-center">
        Copyright  {new Date().getFullYear()} - Tous droits réservés
      </p>
      <p className="text-center">
        Ce site utilise des cookies pour vous fournir une meilleure exp rience utilisateur.
        En poursuivant votre navigation sur ce site, vous acceptez l&aposutilisation de ces cookies.
      </p>
    </footer>
  );
}
