import React from "react";
import Hero from "../components/Background";
import ServiceCard from "../components/DirectionAwareCard";

// Images
import Hair from "../Images/Service/Hair.jpg";
import Dermatology from "../Images/Service/Dermatology.jpg";
import Neurology from "../Images/Service/Neurology.jpg";
import Pediatric from "../Images/Service/Pediatric.jpg";
import Female from "../Images/Service/Female.webp";
import Bones from "../Images/Service/Bones.webp";

// Icons
import HairIcon from "../Images/Icon/Hair.png";
import DermatologyIcon from "../Images/Icon/Dermatology.png";
import NeurologyIcon from "../Images/Icon/Neurology.png";
import PediatricIcon from "../Images/Icon/Pediatric.png";
import FemaleIcon from "../Images/Icon/Female.jpg";
import BonesIcon from "../Images/Icon/Bones.png";

const Services = () => {
  const services = [
    {
      title: "Skin & Hair Treatment",
      description: "Natural homeopathic care for skin disorders and hair loss.",
      image: Hair,
      icon: HairIcon,
    },
    {
      title: "Dermatology",
      description: "Treatment for acne, eczema, pigmentation & allergies.",
      image: Dermatology,
      icon: DermatologyIcon,
    },
    {
      title: "Neurology",
      description: "Care for migraine, stress, anxiety & nerve pain.",
      image: Neurology,
      icon: NeurologyIcon,
    },
    {
      title: "Pediatric Diseases",
      description: "Safe treatment for immunity, digestion & growth.",
      image: Pediatric,
      icon: PediatricIcon,
    },
    {
      title: "Female Complaints",
      description: "Hormonal imbalance, menopause & infertility care.",
      image: Female,
      icon: FemaleIcon,
    },
    {
      title: "Bones & Joints",
      description: "Relief from arthritis, stiffness & joint pain.",
      image: Bones,
      icon: BonesIcon,
    },
  ];

  return (
    <div className="mt-28 bg-[#e9fbff]">
      <Hero title="Services" breadcrumb="Services" />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Treatments
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
