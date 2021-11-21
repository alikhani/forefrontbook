import { QueryResolvers, MutationResolvers } from './type-defs.graphqls'
import { ResolverContext } from './apollo'
import { prisma } from './prisma';

const userProfile = {
  id: String(1),
  name: 'John Smith',
  status: 'cached',
}

const Query: Required<QueryResolvers<ResolverContext>> = {
  viewer(_parent, _args, _context, _info) {
    return userProfile
  },
  post(_parent, _args, _context, _info) {
    return prisma.post.findMany({
      include: {
        author: true
      }
    })
  }
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  updateName(_parent, _args, _context, _info) {
    userProfile.name = _args.name
    return userProfile
  },
  addPost(_parent, { content }, _context, _info) {
    return prisma.post.create({ data: { content } })
  }
}

export default { Query, Mutation }
