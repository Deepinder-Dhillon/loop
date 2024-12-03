import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";
import StartupTypeCard from "../components/StartupTypeCard";
import { formatDate } from "@/lib/utils";


export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Deepinder" },
      _id: 1,
      description: "this is a description",
      image: "https://uizard.io/static/04b72ee6f0f3edd6125286758f88fcd2/0cfa7/3c995b0fa3650e96b1bea5f6e8c156b63e723b72-1440x835.webp",
      category: "Robots",
      title: "We robots",
    },
  ];
  
  return (
    <>
    <section className="pink_container">
        <h1 className="heading">
          Pitch Your Idea, <br />
          Find Your Teamates
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Find projects.
        </p>

      <SearchForm query={query}/>
      </section>

      <section className="section_container">
  <p className="text-30-semibold">
    {query ? `Search results for "${query}"` : "All Startups"}
  </p>

  <ul className="mt-7 card_grid">
    {posts?.length > 0 ? (
      posts.map((post: StartupCardType, index: number) => (
        <StartupCard key={post?._id} post={post} />
      ))
    ) : (
      <p className="no-results">No startups found</p>
    )}
  </ul>
</section>



    </>
  );
}
