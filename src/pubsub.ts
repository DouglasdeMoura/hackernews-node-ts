import { PubSub } from "graphql-subscriptions";
import { TypedPubSub } from "typed-graphql-subscriptions";
import { Link, Vote } from "@prisma/client";

export type PubSubChannels = {
  newLink: [{ createdLink: Link }];
  newVote: [{ createdVote: Vote }];
};

export const pubSub = new TypedPubSub<PubSubChannels>(new PubSub());
