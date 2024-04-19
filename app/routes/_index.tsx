import type { MetaFunction } from "@vercel/remix";

import ServiceCards from '~/src/components/serviceCards';
import FormCard from '~/src/components/formCard';
import ContactCards from '~/src/components/contactCards';

export const meta: MetaFunction = () => {
  return [
    { title: "Mercury Bar Glass & Windscreen" },
    // { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <ServiceCards />
      <FormCard />
      <ContactCards />
    </>
  );
}
