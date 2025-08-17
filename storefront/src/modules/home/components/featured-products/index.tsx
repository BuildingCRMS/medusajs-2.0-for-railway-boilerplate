import { HttpTypes } from "@medusajs/types"
import ProductRail from "@modules/home/components/featured-products/product-rail"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: HttpTypes.StoreCollection[]
  region: HttpTypes.StoreRegion
}) {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Featured Collections
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <div key={collection.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <ProductRail collection={collection} region={region} />
          </div>
        ))}
      </div>
    </div>
  )
}
