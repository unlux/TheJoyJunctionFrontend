export default function Hero4() {
  return (
    <div>
      <div className="bg-white px-8 py-16 font-sans">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/flashcard-in-hand.jpg"
              alt="Yeti flashcard"
              className="rounded-xl shadow-md w-full max-w-sm mx-auto"
            />
            <div className="absolute -bottom-6 left-6 rotate-[-20deg]">
              <div className="rounded-full bg-yellow-300 w-16 h-16 flex items-center justify-center text-2xl font-bold border-4 border-white shadow">
                🙂
              </div>
              <p className="text-sm text-gray-600 rotate-90 origin-left mt-2 ml-2">
                About Us • About Us • About Us
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase text-gray-600 font-medium tracking-wide">
              Our Approach
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mt-2 leading-tight">
              We help you take care of the kids
            </h2>
            <p className="text-gray-700 mt-4 text-lg leading-relaxed">
              Our products are crafted with love and expertise by dedicated
              teachers who spend every day immersed in the wonderful world of
              children. They're the superheroes of understanding and know just
              what sparks joy and learning in young minds. Dive into our playful
              learning experiences and watch the magic unfold!
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-blue-100 rounded-xl p-6 shadow-lg max-w-3xl mx-auto text-center relative">
            <h3 className="text-xl font-bold text-purple-800 mb-2">
              25 colourful flashcards
            </h3>
            <img
              src="/animal-flashcards.jpg"
              alt="Animal Flashcards"
              className="rounded-lg w-full mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
