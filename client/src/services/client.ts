import { createClient } from '@sanity/client'

const sanityClient = createClient({
  apiVersion: '2023-08-04',
  projectId: 'o36d1u5z',
  dataset: 'production',
  useCdn: true,
})

export default sanityClient
