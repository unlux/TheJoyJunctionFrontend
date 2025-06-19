export default function Yeti() {
  return (
    <div className=" bg-gradient-to-br from-purple-100 via-blue-50 to-green-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Hand with cards */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Hand holding cards */}
              <div className="relative bg-gradient-to-br from-purple-200 to-blue-200 rounded-3xl p-8 shadow-2xl">
                {/* Background cards */}
                <div className="absolute top-4 right-4 w-24 h-32 bg-gradient-to-b from-orange-300 to-red-400 rounded-xl transform rotate-12 opacity-80"></div>
                <div className="absolute top-8 right-8 w-24 h-32 bg-gradient-to-b from-purple-300 to-purple-500 rounded-xl transform rotate-24 opacity-60"></div>

                {/* Main YETI card */}
                <div className="relative z-10 bg-white rounded-2xl shadow-lg overflow-hidden transform -rotate-3">
                  <div className="aspect-square bg-gradient-to-b from-blue-200 to-blue-300 p-4 flex items-center justify-center">
                    {/* Yeti character placeholder */}
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="text-2xl">❄️</div>
                    </div>
                  </div>
                  <div className="bg-purple-400 text-white text-center py-3 font-bold text-lg">
                    YETI
                  </div>
                </div>

                {/* Additional character cards */}
                <div className="absolute top-2 left-2 w-16 h-20 bg-gradient-to-b from-teal-300 to-teal-500 rounded-lg transform -rotate-12 flex items-center justify-center">
                  <div className="text-white text-xl">🤖</div>
                </div>

                <div className="absolute bottom-4 left-4 w-16 h-20 bg-gradient-to-b from-yellow-300 to-orange-400 rounded-lg transform rotate-6 flex items-center justify-center">
                  <div className="text-white text-xl">🦁</div>
                </div>
              </div>

              {/* About Us circular badge */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                <div className="text-center">
                  <div className="text-xs font-bold text-gray-800 leading-tight">
                    <div>ABOUT</div>
                    <div>US</div>
                  </div>
                  <div className="text-2xl mt-1">😊</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
                OUR APPROACH
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We help you take care of the kids
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Our products are crafted with love and expertise by dedicated
              teachers who spend every day immersed in the wonderful world of
              children. They're the superheroes of understanding and know just
              what sparks joy and learning in young minds. Dive into our playful
              learning experiences and watch the magic unfold!
            </p>

            {/* Flashcards illustration */}
            <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8 shadow-lg">
              {/* Trees */}
              <div className="absolute top-4 left-4 w-12 h-16 bg-green-500 rounded-full"></div>
              <div className="absolute top-2 left-8 w-8 h-12 bg-green-600 rounded-full"></div>
              <div className="absolute top-4 right-4 w-12 h-16 bg-green-500 rounded-full"></div>
              <div className="absolute top-2 right-8 w-8 h-12 bg-green-600 rounded-full"></div>

              {/* Flashcards label */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                flashcards
              </div>

              {/* Center flashcards fan */}
              <div className="flex justify-center items-center h-40 relative">
                {/* Individual cards in a fan layout */}
                <div className="absolute w-20 h-28 bg-white rounded-lg shadow-md transform -rotate-45 border-4 border-amber-600">
                  <div className="p-2 text-center">
                    <div className="text-xs font-bold text-amber-700">Seal</div>
                    <div className="text-lg mt-1">🦭</div>
                  </div>
                </div>
                <div className="absolute w-20 h-28 bg-white rounded-lg shadow-md transform -rotate-30 border-4 border-amber-600">
                  <div className="p-2 text-center">
                    <div className="text-xs font-bold text-amber-700">Fox</div>
                    <div className="text-lg mt-1">🦊</div>
                  </div>
                </div>
                <div className="absolute w-20 h-28 bg-white rounded-lg shadow-md transform -rotate-15 border-4 border-amber-600">
                  <div className="p-2 text-center">
                    <div className="text-xs font-bold text-amber-700">Cat</div>
                    <div className="text-lg mt-1">🐱</div>
                  </div>
                </div>
                <div className="absolute w-20 h-28 bg-white rounded-lg shadow-md transform rotate-0 border-4 border-amber-600 z-10">
                  <div className="p-2 text-center">
                    <div className="text-xs font-bold text-amber-700">Dog</div>
                    <div className="text-lg mt-1">🐶</div>
                  </div>
                </div>
                <div className="absolute w-20 h-28 bg-white rounded-lg shadow-md transform rotate-15 border-4 border-amber-600">
                  <div className="p-2 text-center">
                    <div className="text-xs font-bold text-amber-700">Bear</div>
                    <div className="text-lg mt-1">🐻</div>
                  </div>
                </div>
              </div>

              {/* Bottom animals */}
              <div className="absolute bottom-4 left-8 text-2xl">🦊</div>
              <div className="absolute bottom-4 right-8 text-2xl">🐨</div>
              <div className="absolute bottom-8 left-1/4 text-2xl">🐱</div>
              <div className="absolute bottom-8 right-1/4 text-2xl">🦓</div>

              {/* Flying character */}
              <div className="absolute top-12 left-1/3 text-2xl transform -rotate-12">
                🐒
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
