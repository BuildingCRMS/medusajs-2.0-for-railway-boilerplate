import { Button, Heading, Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Placeholder with Frost Lord Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-frostlord-ice via-frostlord-diamond to-frostlord-frost">
        {/* Abstract geometric patterns for visual interest */}
        <div className="absolute top-0 left-0 w-48 h-48 small:w-96 small:h-96 bg-frostlord-platinum/20 rounded-full blur-2xl small:blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 small:w-80 small:h-80 bg-frostlord-sapphire/10 rounded-full blur-2xl small:blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 small:w-64 small:h-64 bg-frostlord-ice/30 rounded-full blur-xl small:blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-6 py-16 small:py-32">
        <div className="content-container max-w-7xl mx-auto">
          {/* Logo Display - Much Bigger Main Focal Point */}
          <div className="mb-20 flex justify-center">
            <Image
              src="/Logo.png"
              alt="FROSTLORD Logo"
              width={500}
              height={200}
              className="h-48 small:h-56 medium:h-64 large:h-72 w-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Tagline */}
          <div className="mb-12 small:mb-16">
            <Heading
              level="h2"
              className="text-xl leading-relaxed small:text-2xl medium:text-3xl large:text-4xl font-light text-frostlord-midnight/80 mb-8 small:mb-10 max-w-4xl mx-auto"
            >
              Luxury Iced Out Watches with Unparalleled Craftsmanship
            </Heading>
            <div className="w-20 h-1 small:w-28 bg-frostlord-sapphire mx-auto mb-8 small:mb-10"></div>
          </div>

          {/* Brand Description */}
          <div className="mb-12 small:mb-16 max-w-5xl mx-auto">
            <Text className="text-lg leading-relaxed small:text-xl medium:text-2xl text-frostlord-midnight/70 mb-6 small:mb-8">
              Discover the epitome of luxury timepieces where every watch is meticulously crafted 
              with the finest diamonds and premium materials. Each FROSTLORD creation embodies 
              the perfect blend of sophistication, precision, and timeless elegance.
            </Text>
            <Text className="text-base leading-relaxed small:text-lg medium:text-xl text-frostlord-midnight/60">
              From our signature ice-blue dials to our platinum-finished cases, every detail 
              reflects our commitment to excellence and our passion for creating watches that 
              stand the test of time.
            </Text>
          </div>

          {/* Call to Action */}
          <div className="flex justify-center mb-12 small:mb-16">
            <Button
              size="large"
              className="bg-frostlord-sapphire hover:bg-frostlord-midnight text-white hover:text-frostlord-ice px-10 py-5 small:px-14 small:py-6 text-xl small:text-2xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              asChild
            >
              <a href="https://frostlord.shop/us/store" target="_blank" rel="noopener noreferrer">
                Shop Now
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 small:gap-12 text-frostlord-midnight/60">
            <div className="text-center">
              <Text className="text-2xl small:text-3xl font-bold text-frostlord-sapphire">100%</Text>
              <Text className="text-sm small:text-base">Authentic Diamonds</Text>
            </div>
            <div className="text-center">
              <Text className="text-2xl small:text-3xl font-bold text-frostlord-sapphire">24/7</Text>
              <Text className="text-sm small:text-base">Customer Support</Text>
            </div>
            <div className="text-center">
              <Text className="text-2xl small:text-3xl font-bold text-frostlord-sapphire">5-Year</Text>
              <Text className="text-sm small:text-base">Warranty</Text>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle floating elements for visual interest */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-frostlord-sapphire/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-frostlord-platinum/30 rounded-full blur-3xl delay-1000"></div>
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-frostlord-ice/50 rounded-full animate-pulse delay-500"></div>
    </div>
  )
}

export default Hero
