import { OrganizationSchema, LocalBusinessSchema } from "@/components/JsonLd";

export default function HomeSchema() {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
    </>
  );
}