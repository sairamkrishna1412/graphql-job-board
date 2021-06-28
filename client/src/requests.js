const endpointURL = 'http://localhost:9000/graphql';

// const graphQlRequest = async (query, variables) => {
//   const response = await fetch(endpointURL, {
//     method: 'POST',
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify({
//       query,
//       variables,
//     }),
//   });

//   const responseBody = await response.json();
//   return responseBody.data;
// };

export const loadJobs = async () => {
  const response = await fetch(endpointURL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      query: `{
        jobs {
          id
          title
          company {
            id
            name
          }
        }
      }
    `,
    }),
  });

  const responseBody = await response.json();

  return responseBody.data.jobs;
};

export const loadJobDetail = async (id) => {
  const response = await fetch(endpointURL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      query: `query JobQuery($id:ID!){
                job(id: $id) {
                title
                description
                company {
                  id
                  name
                }
              }
            }`,
      variables: { id },
    }),
  });

  const responseBody = await response.json();
  return responseBody.data.job;
};

export const loadCompanyDetail = async (id) => {
  const response = await fetch(endpointURL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      query: `query CompanyQuery($id: ID!) {
                company(id: $id) {
                  name
                  description
                }
              }`,
      variables: { id },
    }),
  });

  const responseBody = await response.json();
  return responseBody.data.company;
};
