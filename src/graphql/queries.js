/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      player
      score
      createdAt
      updatedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        player
        score
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHostedGame = /* GraphQL */ `
  query GetHostedGame($id: ID!) {
    getHostedGame(id: $id) {
      id
      word
      createdAt
      updatedAt
    }
  }
`;
export const listHostedGames = /* GraphQL */ `
  query ListHostedGames(
    $filter: ModelHostedGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHostedGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        word
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
