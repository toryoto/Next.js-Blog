import Image from "next/image";
import ArticleList from "./components/ArticleList";
import { getAllArticles } from "@/blogAPI";

export default async function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/api/posts`, { cache: "no-store" });
  const articles = await res.json();
  console.log(articles);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <section className="w-full lg:w-3/4">
          <ArticleList articles={articles} />
        </section>

        <aside className="w-full lg:w-1/4 mt-8 lg:mt-0">
          <div className="bg-white shadow-md rounded p-4 mb-6">
            <h3 className="font-bold text-gray-900 mb-2">About Me</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="bg-white shadow-md rounded p-4 mb-6 w-full">
            <h3 className="font-bold text-gray-900 mb-2">Category</h3>
            <ul className="text-gray-600 mt-2 space-y-2">
              {['Technology', 'Automotive', 'Finance', 'Sports'].map((category) => (
                <li key={category}>
                  <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}