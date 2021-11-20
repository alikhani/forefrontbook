import { QueryResolvers, MutationResolvers } from './type-defs.graphqls'
import { ResolverContext } from './apollo'

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
    return {id: 1, content: "hej"};
  }
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  updateName(_parent, _args, _context, _info) {
    userProfile.name = _args.name
    return userProfile
  },
  addPost(_parent, _args, _context, _info) {
    return {id: 2, content: _args.content}
  }
}

export default { Query, Mutation }
