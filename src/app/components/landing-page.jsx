"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

// SEO component for better metadata
const SEO = () => (
  <Head>
    <title>AnimeVerse - Discover Solo Leveling, Attack on Titan, and Jujutsu Kaisen</title>
    <meta
      name="description"
      content="Explore the worlds of Solo Leveling, Attack on Titan, and Jujutsu Kaisen on AnimeVerse - your ultimate anime destination."
    />
    <meta name="keywords" content="anime, Solo Leveling, Attack on Titan, Jujutsu Kaisen, anime streaming" />
    <meta property="og:title" content="AnimeVerse - Discover Top Anime Series" />
    <meta
      property="og:description"
      content="Explore the worlds of Solo Leveling, Attack on Titan, and Jujutsu Kaisen."
    />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/og-image.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
)

//anime card
const AnimeCard = ({ anime, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-purple-500"
  >
    <div className="relative h-48">
      <Image
        src={anime.image || "/placeholder.svg"}
        alt={`${anime.title} cover image`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        loading={index <= 1 ? "eager" : "lazy"}
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{anime.title}</h3>
      <p className="text-gray-400 mb-4 line-clamp-2">{anime.description}</p>
      <Link
        href={anime.url || "#"}
        className="text-purple-400 hover:text-purple-300 flex items-center gap-1 group focus:outline-none focus:underline"
        aria-label={`Learn more about ${anime.title}`}
      >
        Learn more
        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </motion.div>
)

// character card
const CharacterCard = ({ character, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="group focus-within:ring-2 focus-within:ring-purple-500 rounded-lg"
  >
    <Link href="#" className="block focus:outline-none">
      <div className="relative h-64 rounded-lg overflow-hidden mb-2">
        <Image
          src={character.image || "/placeholder.svg"}
          alt={`${character.name} from ${character.anime}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <div>
            <h3 className="font-bold">{character.name}</h3>
            <p className="text-sm text-gray-300">{character.anime}</p>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
)

// Main component with performance optimizations
export default function AnimeLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Simulate loading state 
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === featuredAnime.length - 1 ? 0 : prev + 1))
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const featuredAnime = [
    {
      id: 1,
      title: "Solo Leveling",
      description:
        "After a near-death experience, the world's weakest hunter Sung Jinwoo begins a journey to become the strongest of them all.",
      image: "/Solo-Leveling-Main.png?height=600&width=1000",
      color: "from-purple-900 to-indigo-900",
      url: "#solo-leveling",
    },
    {
      id: 2,
      title: "Attack on Titan",
      description:
        "In a world where humanity lives within cities surrounded by enormous walls due to the Titans, giant humanoid creatures who devour humans seemingly without reason.",
      image: "/AOT-Main.jpg?height=600&width=1000",
      color: "from-red-900 to-yellow-800",
      url: "#attack-on-titan",
    },
    {
      id: 3,
      title: "Jujutsu Kaisen",
      description:
        "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman school to be able to locate the demon's other body parts.",
      image: "/Jujutsu-Kaisen-Main.jpg?height=600&width=1000",
      color: "from-blue-900 to-purple-900",
      url: "#jujutsu-kaisen",
    },
  ]

  const characters = [
    {
      id: 1,
      name: "Sung Jinwoo",
      anime: "Solo Leveling",
      image: "/Sung-Jinwoo.jpeg?height=400&width=300",
    },
    {
      id: 2,
      name: "Eren Yeager",
      anime: "Attack on Titan",
      image: "/Eren-Yeager.jpg?height=400&width=300",
    },
    {
      id: 3,
      name: "Yuji Itadori",
      anime: "Jujutsu Kaisen",
      image: "/Yuji-Itadori.png?height=400&width=300",
    },
    {
      id: 4,
      name: "Mikasa Ackerman",
      anime: "Attack on Titan",
      image: "/Mikasa-Ackerman.jpg?height=400&width=300",
    },
    {
      id: 5,
      name: "Megumi Fushiguro",
      anime: "Jujutsu Kaisen",
      image: "/Megumi-Fushiguro.jpeg?height=400&width=300",
    },
    {
      id: 6,
      name: "Cha Hae-In",
      anime: "Solo Leveling",
      image: "/Cha-Hae-In.png?height=400&width=300",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredAnime.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredAnime.length - 1 : prev - 1))
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse text-2xl text-white">Loading AnimeVerse...</div>
      </div>
    )
  }

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-purple-600 focus:text-white"
        >
          Skip to content
        </a>

        {/* Navigation */}
        <nav className="px-4 py-4 flex justify-between items-center" aria-label="Main navigation">
          <div className="text-2xl font-bold">AnimeVerse</div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div
            id="mobile-menu"
            className={`lg:flex items-center gap-8 ${isMenuOpen ? "absolute top-16 left-0 right-0 flex flex-col items-center gap-4 py-4 bg-gray-800 shadow-lg z-50" : "hidden"}`}
          >
            <Link href="#" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link href="#anime" className="hover:text-purple-400 transition-colors">
              Anime
            </Link>
            <Link href="#characters" className="hover:text-purple-400 transition-colors">
              Characters
            </Link>
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md transition-colors">
              Sign In
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="main-content" className="relative h-[70vh] overflow-hidden" aria-label="Featured anime showcase">
          <AnimatePresence mode="wait">
            {featuredAnime.map(
              (anime, index) =>
                index === currentSlide && (
                  <motion.div
                    key={anime.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${anime.color} opacity-70`}></div>
                    <Image
                      src={anime.image || "/placeholder.svg"}
                      alt={`${anime.title} hero image`}
                      fill
                      priority
                      sizes="100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

                    <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto">
                      <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                      >
                        {anime.title}
                      </motion.h1>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg max-w-2xl mb-8"
                      >
                        {anime.description}
                      </motion.p>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                      >
                        <button
                          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-md flex items-center gap-2 transition-colors"
                          aria-label={`Watch ${anime.title} now`}
                        >
                          <Play size={20} />
                          Watch Now
                        </button>
                        <Link
                          href={anime.url}
                          className="bg-transparent border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-md transition-colors"
                        >
                          Learn More
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                ),
            )}
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 p-2 rounded-full transition-colors"
            aria-label="Previous anime"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 p-2 rounded-full transition-colors"
            aria-label="Next anime"
          >
            <ChevronRight size={24} />
          </button>

          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2"
            role="tablist"
            aria-label="Select anime slide"
          >
            {featuredAnime.map((anime, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
                aria-selected={index === currentSlide}
                aria-label={`Show ${anime.title}`}
                role="tab"
              />
            ))}
          </div>
        </section>

        {/* Featured Anime Section */}
        <section id="anime" className="py-16 px-6 max-w-7xl mx-auto" aria-labelledby="featured-anime-heading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 id="featured-anime-heading" className="text-3xl font-bold mb-4">
              Featured Anime
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the most popular anime series with captivating stories and stunning animation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAnime.map((anime, index) => (
              <AnimeCard key={anime.id} anime={anime} index={index} />
            ))}
          </div>
        </section>

        {/* Characters Section */}
        <section id="characters" className="py-16 px-6 bg-gray-800" aria-labelledby="characters-heading">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 id="characters-heading" className="text-3xl font-bold mb-4">
                Popular Characters
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Meet the iconic characters that have captured the hearts of anime fans worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {characters.map((character, index) => (
                <CharacterCard key={character.id} character={character} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-gradient-to-r from-purple-900 to-indigo-900" aria-labelledby="cta-heading">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 id="cta-heading" className="text-3xl font-bold mb-4">
                Join Our Anime Community
              </h2>
              <p className="text-gray-200 mb-8">
                Sign up to get personalized recommendations, track your favorite shows, and connect with other anime
                fans.
              </p>
              <button
                className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-3 rounded-md font-bold transition-colors"
                aria-label="Sign up for AnimeVerse"
              >
                Sign Up Now
              </button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6" aria-labelledby="footer-heading">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 id="footer-heading" className="text-xl font-bold mb-4">
                AnimeVerse
              </h3>
              <p className="text-gray-400 mb-4">
                Your ultimate destination for all things anime. Discover, watch, and connect.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#anime" className="text-gray-400 hover:text-white transition-colors">
                    Anime
                  </Link>
                </li>
                <li>
                  <Link href="#characters" className="text-gray-400 hover:text-white transition-colors">
                    Characters
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Subscribe</h4>
              <p className="text-gray-400 mb-4">Stay updated with our newsletter</p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="email-input" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-input"
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-md transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} AnimeVerse. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

