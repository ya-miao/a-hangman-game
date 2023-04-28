/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onCreatePlayer(filter: $filter) {
      id
      player
      score
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onUpdatePlayer(filter: $filter) {
      id
      player
      score
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onDeletePlayer(filter: $filter) {
      id
      player
      score
      createdAt
      updatedAt
    }
  }
`;
export const onCreateHostedGame = /* GraphQL */ `
  subscription OnCreateHostedGame(
    $filter: ModelSubscriptionHostedGameFilterInput
  ) {
    onCreateHostedGame(filter: $filter) {
      id
      word
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateHostedGame = /* GraphQL */ `
  subscription OnUpdateHostedGame(
    $filter: ModelSubscriptionHostedGameFilterInput
  ) {
    onUpdateHostedGame(filter: $filter) {
      id
      word
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteHostedGame = /* GraphQL */ `
  subscription OnDeleteHostedGame(
    $filter: ModelSubscriptionHostedGameFilterInput
  ) {
    onDeleteHostedGame(filter: $filter) {
      id
      word
      createdAt
      updatedAt
    }
  }
`;
