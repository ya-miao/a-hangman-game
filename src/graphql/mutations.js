/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      player
      score
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      player
      score
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      player
      score
      createdAt
      updatedAt
    }
  }
`;
export const createHostedGame = /* GraphQL */ `
  mutation CreateHostedGame(
    $input: CreateHostedGameInput!
    $condition: ModelHostedGameConditionInput
  ) {
    createHostedGame(input: $input, condition: $condition) {
      id
      word
      createdAt
      updatedAt
    }
  }
`;
export const updateHostedGame = /* GraphQL */ `
  mutation UpdateHostedGame(
    $input: UpdateHostedGameInput!
    $condition: ModelHostedGameConditionInput
  ) {
    updateHostedGame(input: $input, condition: $condition) {
      id
      word
      createdAt
      updatedAt
    }
  }
`;
export const deleteHostedGame = /* GraphQL */ `
  mutation DeleteHostedGame(
    $input: DeleteHostedGameInput!
    $condition: ModelHostedGameConditionInput
  ) {
    deleteHostedGame(input: $input, condition: $condition) {
      id
      word
      createdAt
      updatedAt
    }
  }
`;
