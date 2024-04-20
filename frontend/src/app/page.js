import HomeBanners from "./components/HomeBanners"
import HomeServices from "./components/HomeServices"
import HomeGallery from "./components/HomeGallery"
import HomeReviews from "./components/HomeReviews"

export default function Home() {
  return (
    <main>
      <HomeBanners />
      <HomeServices />
      <HomeGallery />
      <HomeReviews />
    </main>
  )
}
