'use client'

export default function ReviewPage() {
  const reviews = [
    {
      name: 'Akil Ghani',
      rating: 5,
      comment: 'Nil had good online platform and live sessions were very helpful. Trainer (Jagjeet mam) has excellent knowledge and great explaining skills.',
    },
    {
      name: 'Samyak',
      rating: 4,
      comment: 'I recently had the pleasure of taking classes, and the experience was amazing. Shiva Singhal Sir made a huge difference in my learning journey.',
    },
    {
      name: 'Shilpi Samantha',
      rating: 5,
      comment: 'Ms. Veronica helped me gain a lot of confidence. Her feedback worked like magic, and now I feel more confident than ever.',
    },
    {
      name: 'Yashmeet Saini',
      rating: 4,
      comment: 'Wonderful experience! The doubt-solving sessions every week helped me become more confident in each section of IELTS.',
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">What Our Learners Say</h1>
        <p className="text-lg text-gray-600">
          Read reviews from our learners who’ve improved their English communication skills through our courses.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:p-5">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md"> 
            <p className="text-gray-600 mb-4">{review.comment}</p>
            <p className="font-semibold text-gray-800">{review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
