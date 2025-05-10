import React from 'react';
import ImageSlider from "./components/ImageSlider";
import InfoBoxes from "./components/InfoBoxes";
import ConsultingFormSection from "./components/ConsultingFormSection";
import PracticeAreasSection from "./components/PracticeAreasSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import AttorneysSection from "./components/AttorneysSection"; // Import AttorneysSection

export default function Home() {
  const sliderImages = [
    "/business.webp",
    "/law-books.webp", // Changed to .webp
    "/family.webp",
    "/law-bg.webp",    // Changed to .webp
  ];

  return (
    <div>
      <ImageSlider images={sliderImages} />
      <InfoBoxes />
      <ConsultingFormSection />
      <PracticeAreasSection />
      <CaseStudiesSection />
      <AttorneysSection />
      {/* Other page content can go here */}
    </div>
  );
}
