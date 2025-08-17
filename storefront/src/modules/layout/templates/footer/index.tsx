import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer({ countryCode }: { countryCode: string }) {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="mx-0 max-w-full border-t border-basic-primary bg-static px-0 py-0 small:px-0 small:py-0">
      <div className="mx-auto max-w-[1440px] px-6 flex flex-col gap-6 text-static small:gap-12">
        <div className="flex flex-col gap-8 small:gap-12 large:flex-row xl:gap-0">
          <div className="flex flex-col justify-between xl:min-w-[437px]">
            <LocalizedClientLink
              href={`/${countryCode}`}
              className="w-max cursor-pointer text-static"
            >
              <h2 className="text-2xl font-bold text-basic-primary">
                FROSTLORD
              </h2>
            </LocalizedClientLink>
            <div className="hidden large:flex">
              <p className="text-secondary">
                Premium products for discerning customers
              </p>
            </div>
          </div>
          
          <div className="hidden shrink grow gap-5 small:flex xl:gap-0" data-testid="footer-links-section">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex-1 flex-col gap-3 small:flex">
                <h3 className="mb-2 text-lg font-medium text-basic-primary">
                  Categories
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return null
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <div key={c.id} className="flex flex-col gap-2">
                        <LocalizedClientLink
                          href={`/${countryCode}/categories/${c.handle}`}
                          className="w-max hover:text-static transition-colors duration-200 text-secondary hover:text-secondary/80"
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <div className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <LocalizedClientLink
                                  key={child.id}
                                  href={`/${countryCode}/categories/${child.handle}`}
                                  className="hover:text-static transition-colors duration-200 text-secondary hover:text-secondary/80"
                                  data-testid="category-link"
                                >
                                  {child.name}
                                </LocalizedClientLink>
                              ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
            
            {collections && collections.length > 0 && (
              <div className="flex-1 flex-col gap-3 small:flex">
                <h3 className="mb-2 text-lg font-medium text-basic-primary">
                  Collections
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {collections?.slice(0, 6).map((c) => (
                    <LocalizedClientLink
                      key={c.id}
                      href={`/${countryCode}/collections/${c.handle}`}
                      className="hover:text-static transition-colors duration-200 text-secondary hover:text-secondary/80"
                    >
                      {c.title}
                    </LocalizedClientLink>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex-1 flex-col gap-3 small:flex">
              <h3 className="mb-2 text-lg font-medium text-basic-primary">
                Company
              </h3>
              <div className="grid grid-cols-1 gap-2">
                <LocalizedClientLink
                  href={`/${countryCode}/about`}
                  className="hover:text-static transition-colors duration-200 text-secondary hover:text-secondary/80"
                >
                  About Us
                </LocalizedClientLink>
                <LocalizedClientLink
                  href={`/${countryCode}/contact`}
                  className="hover:text-static transition-colors duration-200 text-secondary hover:text-secondary/80"
                >
                  Contact
                </LocalizedClientLink>
                <LocalizedClientLink
                  href={`/${countryCode}/support`}
                  className="hover:text-static transition-colors duration-200 text-secondary hover:text-secondary/80"
                >
                  Support
                </LocalizedClientLink>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full h-px bg-border-secondary" />
        
        <div className="flex flex-wrap gap-6 gap-y-1">
          <p className="shrink-0 text-secondary">
            © {new Date().getFullYear()} FROSTLORD. All rights reserved.
          </p>
          <div className="flex gap-6">
            <LocalizedClientLink
              href={`/${countryCode}/privacy`}
              className="shrink-0 hover:text-static transition-colors duration-200 text-secondary hover:text-secondary/80"
            >
              Privacy Policy
            </LocalizedClientLink>
            <LocalizedClientLink
              href={`/${countryCode}/terms`}
              className="shrink-0 hover:text-static transition-colors duration-200 text-secondary hover:text-secondary/80"
            >
              Terms of Service
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
