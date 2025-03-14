import Link from "next/link";


export default function Footer() {
  return (  
    <footer className="w-full flex flex-col text-sm justify-start items-center gap-4 bg-gray-800 mt-10 text-gray-100 p-6 md:px-42">
      <div className="flex w-full justify-center items-center gap-10 max-w-5xl">
      <Link className="hover:underline" href={"/politique-de-confidentialite"}>Politique de confidentialité</Link>
      <Link className="hover:underline" href={"/conditions-utilisation"}>Conditions d&apos;utilisation</Link>
      <Link className="hover:underline" href={"/disclaimer"}>Avis concernant la publicité </Link>
      </div>
      <p className="text-center">
        Le contenu de ce site est purement informatif et ne représente pas une autorité officielle. 
      </p>
      <p className="text-center">
        Si vous avez des remarques ou des suggestions, n&apos;hésitez pas à <Link className="underline" href={"/contact"}>nous contacter</Link>.
      </p>
      <p className="text-center">
        Copyright  {new Date().getFullYear()} - Tous droits réservés
      </p>
      <p className="text-center">
        Ce site utilise des cookies pour vous fournir une meilleure expérience utilisateur.
        En poursuivant votre navigation sur ce site, vous acceptez l&apos;utilisation de ces cookies.
      </p>
    </footer>
  );
}
