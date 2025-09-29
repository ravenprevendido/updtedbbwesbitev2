// app/services/page.tsx  (or pages/services.tsx depending on your routing layout)
"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // app router hooks
import { services as servicesData, type Service } from "@/data/services";
import ServiceCard from "./ServiceCard";
import Modal from "./Modal";

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showModal, setShowModal] = useState(false);
 
  const searchParams = useSearchParams();
  const router = useRouter();

  // handle card clicks the same way (2s delay)
  const handleCardClick = (service: Service) => {
    setSelectedService(service);
    setTimeout(() => setShowModal(true), 2000);
    // optionally update URL:
    // router.replace(`/services?serviceId=${service.id}&open=1`);
  };

  // If there's a query param from the tooltip, open that modal
  useEffect(() => {
    const serviceIdParam = searchParams?.get("serviceId");
    const open = searchParams?.get("open");

    if (serviceIdParam && open === "1") {
      const id = parseInt(serviceIdParam, 10);
      const matched = servicesData.find((s: Service) => s.id === id);
      if (matched) {
        setSelectedService(matched);
        setTimeout(() => setShowModal(true), 2000);

        // Remove query params to avoid re-opening on refresh
        // replace keeps user on /services but removes the query
        router.replace("/services");
      }
    }
    // intentionally include router and searchParams in deps
  }, [searchParams, router]);

  return (
    <section className="py-16 bg-black text-center text-white">
      <h2 className="text-4xl font-bold text-pink-500 mb-10">SERVICES</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} onClick={() => handleCardClick(service)} />
        ))}
      </div>

      {showModal && selectedService && (
        <Modal service={selectedService} onClose={() => setShowModal(false)} />
      )}
    </section>
  );
};

export default Services;
