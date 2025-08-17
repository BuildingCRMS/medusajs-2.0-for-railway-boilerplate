import { HttpTypes } from "@medusajs/types"
import { Container } from "@modules/common/components/container"
import { Heading } from "@modules/common/components/heading"
import ProductRail from "@modules/home/components/featured-products/product-rail"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: HttpTypes.StoreCollection[]
  region: HttpTypes.StoreRegion
}) {
  return (
    <Container className="py-12">
      <Heading className="text-3xl font-bold text-center mb-8">
        Featured Collections
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <div key={collection.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <ProductRail collection={collection} region={region} />
          </div>
        ))}
      </div>
    </Container>
  )
}
