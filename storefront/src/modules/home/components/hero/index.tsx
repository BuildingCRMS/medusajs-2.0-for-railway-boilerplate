import { Button } from '@modules/common/components/button'
import { Container } from '@modules/common/components/container'
import { Heading } from '@modules/common/components/heading'
import LocalizedClientLink from '@modules/common/components/localized-client-link'
import { Text } from '@modules/common/components/text'

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
      <Container className="flex flex-col gap-2 !py-6 small:gap-8 small:!py-10">
        <Heading className="max-w-full text-4xl text-basic-primary small:max-w-[510px] medium:text-5xl">
          Premium Quality, Unmatched Style
        </Heading>
        <div className="flex flex-col-reverse justify-between gap-8 medium:flex-row medium:items-center">
          <Button asChild className="w-max">
            <LocalizedClientLink href="/shop">
              Shop Now
            </LocalizedClientLink>
          </Button>
          <Text
            size="lg"
            className="max-w-full text-basic-primary medium:max-w-[410px] medium:text-end"
          >
            Experience the difference with our carefully curated selection of premium products designed for those who appreciate quality and style.
          </Text>
        </div>
      </Container>
    </>
  )
}

export default Hero
