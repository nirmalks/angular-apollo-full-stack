const resolvers = {
    Query: {
        allCricketers: (root, {searchTerm}) => {
            return true;
        },
        getCricketer: (root , {id}) => {
            return true;
        }
    },
    Mutation: {
        addCricketer: (root , { name, country , age}) => {
            return null;
        },
        updateCricketer: (root , { name, country , age}) => {
            return true;
        }
    }
}

export default resolvers;