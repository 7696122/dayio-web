import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_BOOKS = gql`
  query {
    books {
      author
      title
    }
  }
`;

function Books() {
  return (
    <>
      <h2>Books</h2>
      <Query query={GET_BOOKS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error!(</p>;
          return (
            <ul>
              {data.books.map(({ author, title }, i) => (
                <li key={i}>
                  {title} _{author}
                </li>
              ))}
            </ul>
          );
        }}
      </Query>
    </>
  );
}

export default Books;
