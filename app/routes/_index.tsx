import type { MetaFunction } from "@vercel/remix";
import { kv } from "@vercel/kv";
// import { json, redirect } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
// import { Resend } from "resend";

import Service from '~/src/components/Service/service';
import FormCard from '~/src/components/Form/formCard';
import ContactCards from '~/src/components/Contact/contactCards';

import type { FormStateData } from "~/src/types/formStateData";

export const meta: MetaFunction = () => {
  return [
    { title: "Mercury Bar Glass & Windscreen" },
    // { name: "description", content: "Welcome to Remix!" },
  ];
};

// const resend = new Resend(process.env.RESEND_API_TOKEN)

export async function action({ 
  request, 
}: ActionFunctionArgs) {
  // get the form data from the request body
  const formData = new URLSearchParams(await request.text());
  // convert the form data to a JSON object
  const formState: FormStateData = {
    first: formData.get("first") || "",
    last: formData.get("last") || "",
    phone: formData.get("phone") || "",
    email: formData.get("email") || "",
    address: formData.get("address") || "",
    rego: formData.get("rego") || "",
    model: formData.get("model") || "",
    make: formData.get("make") || "",
    year: formData.get("year") || "",
    details: formData.get("details") || "",
  };

  // generate a unique ID for the form submission
  const id = Math.random().toString(36).slice(2); 

  // save the form data to the KV store
  await kv.set(`form:${id}`, JSON.stringify(formState));

  // send an email with the form data -> requires domain verification
  // const { data, error } = await resend.emails.send({
  //   from: "Mercury Bar Glass & Windscreen <alif.nurrokh@gmail.com>",
  //   to: process.env.EMAIL??"",
  //   subject: "Hello World",
  //   html: `<h1>It Works!</h1><p>${JSON.stringify(formState)}</p>`,
  // });

  // if (error) {
  //   console.error(error);
  // }

  // redirect("/success") -> implement this later
  return null;
}

export default function Index() {
  return (
    <>
      <Service />
      <FormCard />
      <ContactCards />
    </>
  );
}
