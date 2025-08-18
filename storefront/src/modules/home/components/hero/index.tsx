import { Button, Heading, Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"

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
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-6 py-12 small:py-24">
        <div className="content-container max-w-6xl mx-auto">
          {/* Main Branding */}
          <div className="mb-8 small:mb-12">
            <Heading
              level="h1"
              className="text-4xl leading-tight small:text-6xl medium:text-7xl large:text-8xl font-bold text-frostlord-midnight mb-4 small:mb-6 tracking-tight"
            >
              FROSTLORD
            </Heading>
            <div className="w-16 h-1 small:w-24 bg-frostlord-sapphire mx-auto mb-6 small:mb-8"></div>
            <Heading
              level="h2"
              className="text-lg leading-relaxed small:text-xl medium:text-2xl large:text-3xl font-light text-frostlord-midnight/80 mb-6 small:mb-8 max-w-3xl mx-auto"
            >
              Luxury Iced Out Watches with Unparalleled Craftsmanship
            </Heading>
          </div>

          {/* Brand Description */}
          <div className="mb-8 small:mb-12 max-w-4xl mx-auto">
            <Text className="text-base leading-relaxed small:text-lg medium:text-xl text-frostlord-midnight/70 mb-4 small:mb-6">
              Discover the epitome of luxury timepieces where every watch is meticulously crafted 
              with the finest diamonds and premium materials. Each FROSTLORD creation embodies 
              the perfect blend of sophistication, precision, and timeless elegance.
            </Text>
            <Text className="text-sm leading-relaxed small:text-base medium:text-lg text-frostlord-midnight/60">
              From our signature ice-blue dials to our platinum-finished cases, every detail 
              reflects our commitment to excellence and our passion for creating watches that 
              stand the test of time.
            </Text>
          </div>

          {/* Call to Action */}
          <div className="flex justify-center mb-8 small:mb-12">
            <Button
              size="large"
              className="bg-frostlord-sapphire hover:bg-frostlord-midnight text-white hover:text-frostlord-ice px-8 py-4 small:px-12 small:py-5 text-lg small:text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              asChild
            >
              <a href="https://www.frostlord.shop/us/products" target="_blank" rel="noopener noreferrer">
                Shop Now
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 small:gap-8 text-frostlord-midnight/60">
            <div className="text-center">
              <Text className="text-xl small:text-2xl font-bold text-frostlord-sapphire">100%</Text>
              <Text className="text-xs small:text-sm">Authentic Diamonds</Text>
            </div>
            <div className="text-center">
              <Text className="text-xl small:text-2xl font-bold text-frostlord-sapphire">24/7</Text>
              <Text className="text-xs small:text-sm">Customer Support</Text>
            </div>
            <div className="text-center">
              <Text className="text-xl small:text-2xl font-bold text-frostlord-sapphire">5-Year</Text>
              <Text className="text-xs small:text-sm">Warranty</Text>
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
