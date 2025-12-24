import SearchForm from "../components/SearchForm";
import  codes  from "@/assets/codes";



export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string  | undefined }>
}) {
    const {q }= await searchParams
  return <SearchForm codes={codes} q={q} />
}