import { AuthenticationError, UserInputError } from 'apollo-server-micro'
import { QueryResolvers, MutationResolvers } from './type-defs.graphqls'
import { ResolverContext } from './apollo'
import prisma from './prisma';


const Query: Required<QueryResolvers<ResolverContext>> = {
  async viewer(_parent, _args, _context, _info) {
    try {
      const email = _context?.session?.user?.email

      if (email) {
        return prisma.user.findUnique({ 
          where: {
            email
          } 
        })
      }
    } catch (error) {
      throw new AuthenticationError(
        'Authentication token is invalid, please log in'
      )
    }
  },
  async post(_parent, _args, _context, _info) {
    return prisma.post.findMany({
      orderBy: [
        {
          createdAt: 'desc',
        }
      ],
      include: {
        author: true
      }
    })
  }
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  async addPost(_parent, { content }, _context, _info) {
    const email = _context?.session?.user?.email
    let user;
    if (email) {
      user = await prisma.user.findUnique({ 
        where: {
          email
        } ,
        select: {
          id: true
        }
      });
    }
    console.log({user})
    return prisma.post.create({ data: { content, authorId: user?.id } })
  }
}

export default { Query, Mutation }
