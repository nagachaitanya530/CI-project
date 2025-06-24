import { ScrollContainer } from "react-indiana-drag-scroll";
function ListOfUniversity()
{
    const universities = [
  {
    name: "University of Cambridge",
    img: "https://www.edwiseinternational.com/img/uni-logo-uk/university-of-cambridge-uk.webp",
    popular: "Sciences & Engineering",
    ranking: 2,
  },
  {
    name: "University of Oxford",
    img: "https://www.edwiseinternational.com/img/uni-logo-uk/university-of-oxford-uk.webp",
    popular: "Humanities & Sciences",
    ranking: 3,
  },
  {
    name: "Imperial College London",
    img: "https://www.edwiseinternational.com/img/uni-logo-uk/imperial-college-london-uk.webp",
    popular: "Engineering & Medicine",
    ranking: 6,
  },
  {
    name: "University of Edinburgh",
    img: "https://www.edwiseinternational.com/img/uni-logo-uk/university-of-edinburgh-uk.webp",
    popular: "Arts & Humanities",
    ranking: 22,
  },
  {
    name: "University of Manchester",
    img: "https://www.edwiseinternational.com/img/uni-logo-uk/university-of-manchester-uk.webp",
    popular: "Business & Law",
    ranking: 32,
  },
  {
    name: "King’s College London",
    img: "https://www.edwiseinternational.com/img/uni-logo-uk/kings-college-london-uk.webp",
    popular: "Health & Life Sciences",
    ranking: 40,
  },
  {
    name: "London School of Economics",
    img: "https://www.edwiseinternational.com/img/uni-logo-uk/london-school-of-economics-uk.webp",
    popular: "Social Sciences",
    ranking: 45,
  },
  {
    name: "University of Warwick",
    img: "https://www.edwiseinternational.com/img/uni-logo-uk/university-of-warwick-uk.webp",
    popular: "Business & Economics",
    ranking: 67,
  },
  {
    name: "University of Glasgow",
    img: "https://www.edwiseinternational.com/img/uni-logo-uk/university-of-glasgow-uk.webp",
    popular: "Veterinary, Life Sciences",
    ranking: 76,
  },
  {
    name: "University of Birmingham",
    img: "https://www.edwiseinternational.com/img/uni-logo-uk/university-of-birmingham-uk.webp",
    popular: "Engineering",
    ranking: 80,
  },
];

    return(
<section className="bg-blue-300">
      <div className="bg-[#e9eff6] py-16 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-6">
          <span className="text-blue-600 underline decoration-red-500">List of Universities</span> in the UK
        </h3>

        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
          The UK is an educational hub for international students to attain a
          globally recognized education. Here are some of the top
          <a
            href="https://www.edwiseinternational.com/blogs/best-universities-in-the-uk-2021-for-international-students.html"
            className="text-blue-700 font-medium ml-1 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            universities in UK
          </a>{" "}
          for international students where we have placed our students.
        </p>

        <ScrollContainer className="flex gap-6 overflow-x-auto pb-4">
          {universities.map((uni, index) => (
            <div
              key={index}
              className="min-w-[260px] bg-white rounded-xl shadow-md p-4 flex-shrink-0"
            >
              <div className="flex flex-col items-center">
                <img
                  src={uni.img}
                  alt={uni.name}
                  className="h-16 object-contain mb-2"
                />
                <h3 className="font-semibold text-center text-lg mb-3">
                  {uni.name}
                </h3>
              </div>
              <div className="text-sm text-gray-700 space-y-2">
                <p>
                  <strong>Popular For:</strong> {uni.popular}
                </p>
                <p>
                  <strong>QS World Ranking:</strong> {uni.ranking}
                </p>
              </div>
            </div>
          ))}
        </ScrollContainer>

        <div className="text-center mt-8">
          <a
            href="../partnered-universities.aspx?country=UK"
            className="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            View Our Partnered Universities
          </a>
        </div>
      </div>
    </div>
</section>
    )
}
export default ListOfUniversity;