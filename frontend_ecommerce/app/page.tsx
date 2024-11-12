import BannerDiscount from "@/components/banner_discount";
import BannerProducts from "@/components/banner_products"
import CarouselImageBanner from "@/components/carousel_image_banner";
import ChooseCategory from "@/components/choose_category";
import FeatureProducts from "@/components/feature_products";

export default function Home() {
  return (
    <div>
      <CarouselImageBanner/>
      <FeatureProducts/>
      <BannerDiscount/>
      <ChooseCategory/>
      <BannerProducts/>
    </div>
  );
}
