import { Button, Heading, Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Placeholder with Frost Lord Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-frostlord-ice via-frostlord-diamond to-frostlord-frost">
        {/* Abstract geometric patterns for visual interest */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-frostlord-platinum/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-frostlord-sapphire/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-frostlord-ice/30 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        {/* Main Branding */}
        <div className="mb-8">
          <Heading
            level="h1"
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-frostlord-midnight mb-4 tracking-tight"
          >
            FROSTLORD
          </Heading>
          <div className="w-24 h-1 bg-frostlord-sapphire mx-auto mb-6"></div>
          <Heading
            level="h2"
            className="text-xl md:text-2xl lg:text-3xl font-light text-frostlord-midnight/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Luxury Iced Out Watches with Unparalleled Craftsmanship
          </Heading>
        </div>

        {/* Brand Description */}
        <div className="mb-12 max-w-4xl mx-auto">
          <Text className="text-lg md:text-xl text-frostlord-midnight/70 leading-relaxed mb-6">
            Discover the epitome of luxury timepieces where every watch is meticulously crafted 
            with the finest diamonds and premium materials. Each FROSTLORD creation embodies 
            the perfect blend of sophistication, precision, and timeless elegance.
          </Text>
          <Text className="text-base md:text-lg text-frostlord-midnight/60 leading-relaxed">
            From our signature ice-blue dials to our platinum-finished cases, every detail 
            reflects our commitment to excellence and our passion for creating watches that 
            stand the test of time.
          </Text>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mb-12">
          <Button
            size="large"
            className="bg-frostlord-sapphire hover:bg-frostlord-midnight text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            asChild
          >
            <InteractiveLink href="/products">
              Shop Now
            </InteractiveLink>
          </Button>
          
          <Button
            variant="secondary"
            size="large"
            className="border-2 border-frostlord-sapphire text-frostlord-sapphire hover:bg-frostlord-sapphire hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            asChild
          >
            <InteractiveLink href="/collections">
              Explore Collections
            </InteractiveLink>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-frostlord-midnight/60">
          <div className="text-center">
            <Text className="text-2xl font-bold text-frostlord-sapphire">100%</Text>
            <Text className="text-sm">Authentic Diamonds</Text>
          </div>
          <div className="text-center">
            <Text className="text-2xl font-bold text-frostlord-sapphire">24/7</Text>
            <Text className="text-sm">Customer Support</Text>
          </div>
          <div className="text-center">
            <Text className="text-2xl font-bold text-frostlord-sapphire">5-Year</Text>
            <Text className="text-sm">Warranty</Text>
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
