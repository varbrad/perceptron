import { graphql } from 'graphql';
import { NextApiRequest, NextApiResponse } from 'next';
import rootSchema from './_graphql/rootSchema';

interface GraphQLQuery {
  query: string;
  variables?: {
    [key: string]: string;
  };
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const body: GraphQLQuery = req.body;
  const result = await graphql(rootSchema, body.query);
  return res.status(200).json(result);
};
