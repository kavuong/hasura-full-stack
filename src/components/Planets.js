import React from "react";
import { useQuery, gql } from "@apollo/client";
import { List, ListItem } from "./shared/List";
import { Badge } from "./shared/Badge";

const PLANETS = gql`
  {
    planets {
      id
      name
      cuisine
    }
  }
`;

const Planets = ({ newPlanets }) => {
  const { loading, error, data } = useQuery(PLANETS);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <List>
      {data.planets.map(({ id, name, cuisine }) => (
        <ListItem key={id}>
          {name} <Badge>{cuisine}</Badge>
        </ListItem>
      ))}
    </List>
  );
};

export default Planets;
