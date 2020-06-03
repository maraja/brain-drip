// import UsersService from "#root/adapters/UsersService";

const userSessionRevolver = async (obj, args, context) => {
    if (args.me !== true) throw new Error("Unsupported argument value");

    return context.res.locals.userSession;
};

export default userSessionRevolver;