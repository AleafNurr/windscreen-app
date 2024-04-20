import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { kv } from '@vercel/kv';

// import type { FormResponse } from "~/types/formResponse";

export async function loader(){
    const userData = await kv.get('form:test');
    return json(userData);
}

export default function DisplayData(){
    const data = useLoaderData<typeof loader>();
    return (
        <div>
            <h1>Display Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}