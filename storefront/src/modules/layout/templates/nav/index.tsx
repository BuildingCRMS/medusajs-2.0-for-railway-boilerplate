import { listCategories } from '@lib/data/categories'
import { getCollectionsList } from '@lib/data/collections'
import { getProductsList } from '@lib/data/products'
import NavContent from './nav-content'

export default async function NavWrapper(props: { countryCode: string }) {
  const [productCategories, { collections }, { products }] =
    await Promise.all([
      listCategories(),
      getCollectionsList(),
      getProductsList({
        pageParam: 0,
        queryParams: { limit: 4 },
        countryCode: props.countryCode,
      }).then(({ response }) => response),
    ])

  return (
    <nav className="sticky top-0 z-50 mx-0 max-w-full border-b border-basic-primary bg-primary !py-0 transition-all ease-in-out">
      <div className="mx-auto max-w-[1440px] px-6 flex items-center justify-between !p-0">
        <NavContent
          productCategories={productCategories}
          collections={collections}
          countryCode={props.countryCode}
          products={products}
        />
      </div>
    </nav>
  )
}
