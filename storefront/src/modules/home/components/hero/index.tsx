import LocalizedClientLink from '@modules/common/components/localized-client-link'

const Hero = () => {
  return (
    <>
      <div className="h-[168px] max-h-[368px] w-full small:h-[368px] 2xl:h-[468px] 2xl:max-h-[468px] bg-gradient-to-r from-blue-600 to-purple-600 relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4 small:text-5xl">
              Welcome to FROSTLORD
            </h1>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Discover our premium collection of products
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] px-6 flex flex-col gap-2 py-6 small:gap-8 small:py-10">
        <h2 className="max-w-full text-4xl text-basic-primary small:max-w-[510px] medium:text-5xl font-medium">
          Premium Quality, Unmatched Style
        </h2>
        <div className="flex flex-col-reverse justify-between gap-8 medium:flex-row medium:items-center">
          <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-basic-primary text-inverse-primary hover:bg-basic-primary/90 h-10 px-4 py-2 w-max">
            <LocalizedClientLink href="/shop">
              Shop Now
            </LocalizedClientLink>
          </button>
          <p className="max-w-full text-basic-primary medium:max-w-[410px] medium:text-end text-lg">
            Experience the difference with our carefully curated selection of premium products designed for those who appreciate quality and style.
          </p>
        </div>
      </div>
    </>
  )
}

export default Hero
