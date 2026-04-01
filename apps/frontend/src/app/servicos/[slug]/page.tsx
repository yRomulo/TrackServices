import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { getServiceDivision, serviceDivisions } from "@/data/servicesCatalog";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return serviceDivisions.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDivision(slug);

  if (!service) {
    return {
      title: "Serviço não encontrado"
    };
  }

  return {
    title: service.title,
    description: service.summary
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceDivision(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
