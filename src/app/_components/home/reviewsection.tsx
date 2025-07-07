

const reviewcards = [
    {
        id: 1,
        name: "Arjun ",
        desgination: "Computer Programmer",
        review: "I used to be a shy person, but after I joined this online English Course my personality has turned upside down. I am now a confident speaker and I don’t even get scared in front of large group of people.",
        image: "../home/graduated-girl.png"
    },
    {
        id: 2,
        name: "Vishwak",
        desgination: "Event Manager",
        review: "I started my Event Management company when I graduated from college, but dealing with corporate clients with my English skills was a nightmare. I decided to join this course for my Spoken English & Personality Development Training online and I have been doing pretty well with my clients now.",
        image: "../home/graduated-girl.png"
    },
    {
        id: 3,
        name: "Amrutha",
        desgination: "HCL Employee",
        review: "This course solved the biggest problem that I had when I started working with an MNC in Noida. Hailing from a small town in Uttar Pradesh, English was one of the biggest hurdle in my professional progress. I made a decision to join  Online course for 3 months which changed my life for the best.",
        image: "../home/graduated-girl.png"
    },

];

export default function TestimonialsSection() {
    return (
        <section className="py-0 bg-gray-100 mb-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="relative w-full -ml-96">
                            <img
                                src="/home/thumbsup_guy.png"
                                alt="Happy student giving thumbs up with success stories"
                                className="w-auto max-w-max h-screen mx-auto" // Adjust max-w value as needed
                            />
                        </div>
                    </div>
                    <div className="space-y-8">
                        {reviewcards.map((testimonial, index) => (
                            <div key={testimonial.id} className="relative">                       
                                <div className="bg-white rounded-2xl p-6 shadow-sm border py-10 px-4  border-gray-100 relative">                                   
                                    <div className="absolute -left-3 top-8 w-6 h-6 bg-white border-lg border-b border-gray-100 transform rotate-45"></div>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{testimonial.review}</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                                            <img
                                                src={testimonial.image || "/placeholder.svg"}
                                                alt={testimonial.name}
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                                            <p className="text-gray-500 text-xs">{testimonial.desgination}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}