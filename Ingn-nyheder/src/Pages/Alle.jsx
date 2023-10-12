import * as contentful from 'contentful'
import { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export function Alle() {
  const [data, setData] = useState()


  const client = contentful.createClient({
    space: `${import.meta.env.VITE_PUBLIC_SPACE_ID}`,
    environment: "master",
    accessToken: `${import.meta.env.VITE_PUBLIC_ACCESS_TOKEN}`,
  });

  useEffect(() => {
    client.getEntries()
      .then((entry) => setData(entry))
      .catch(console.error)
  }, [])

  console.log(data);

  return (
    <section className='NewsArticle'>
      {data?.items.map((item, index) => {

        return (
          <div key={index}>
            <h1>{item.fields.title}</h1>
            <p>D. {item.fields.dato} af {item.fields.lavetAf}</p>
            <a>{item.fields.kategori}</a>
            {/* <p>{item.fields.gallery}</p> */}
            
            {documentToReactComponents(item.fields.content)}

          </div>
        )
      })}
    </section>
  )
}
