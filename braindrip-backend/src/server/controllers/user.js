import db from "#root/db";
import HE from "#root/helpers/errorHandling";
import generateUUID from "#root/helpers/generateUUID";
import hashPassword from "#root/helpers/hashPassword";
import passwordCompareSync from "#root/helpers/passwordCompareSync";

const { User, Favorites, LearningPath, LearningPathResource } = db;


const USER_SESSION_EXPIRY_HOURS = 1;

const getAllUsers = async (req, res, next) => {
    // if (!req.body.email || !req.body.password) {
    //     return next(new Error("Invalid body!"));
    // }
    try {   
        const users = await User.findAll();
        return res.json({
            message:"Users succesfully retrieved!",
            users
        });
    } catch(e) {
        return next(e);
    }
}

const createUser = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    const { email, password, firstName, lastName } = req.body;

    try {
        const newUser = await User.create({
            email, firstName, lastName,
            id: generateUUID(),
            passwordHash: hashPassword(password)
        })
        return res.json({
            message:"New User succesfully created!",
            success: true,
            newUser
        });
    } catch(e) {
        return next(e);
    }
}

const loginUser = async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return  next(HE(400, "Invalid body!"));
      }
      
    const { email, password } = req.body;
  
      try {
        let user = await User.findOne({ 
            attributes: {}, 
            where: { email },
            subQuery: false,
            include: [
                {
                    // all:true,
                    nested: true,
                    model: Favorites,
                    as: 'favorites',
                    // required true will make it so that it will grab the first person
                    // with at least 1 record
                    // required: true,
                    include: [
                        {
                            model: LearningPath,
                            as: 'learningPath'
                        }
                    ]
                }, {
                    nested: true,
                    model: LearningPath,
                    as: 'learningPaths',
                    include: [
                        {
                            model: LearningPathResource,
                            as: 'learningPathResources'
                        }
                    ]
                }
            ], 
            // the following two will flatten and spit out only a json
            nest: true, 
        });
  
        if (!user) return next(HE(400, "Invalid email!"));

        user = user.toJSON()
  
        if (!passwordCompareSync(password, user.passwordHash)) {
          return next(HE(400, "Incorrect password!" ));
        }
  
        // const expiresAt = addHours(new Date(), USER_SESSION_EXPIRY_HOURS);
  
        // const sessionToken = generateUUID();
  
        // const userSession = await UserSession.create({
        //   expiresAt,
        //   id: sessionToken,
        //   userId: user.id
        // });
  
        return res.json({
            message:"User successfully logged in.",
            success: true,
            user: { ...user, passwordHash: undefined }
        });
      } catch (e) {
        return next(e);
      }
}

const getUserById = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.userId, {
            subQuery: false,
            include: [
                {
                    // all:true,
                    nested: true,
                    model: Favorites,
                    as: 'favorites',
                    // required true will make it so that it will grab the first person
                    // with at least 1 record
                    // required: true,
                    include: [
                        {
                            model: LearningPath,
                            as: 'learningPath'
                        }
                    ]
                }, {
                    nested: true,
                    model: LearningPath,
                    as: 'learningPaths',
                    include: [
                        {
                            model: LearningPathResource,
                            as: 'learningPathResources'
                        }
                    ]
                }
            ], 
            // the following two will flatten and spit out only a json
            nest: true,
        });

        if (!user) return next(new Error("User not found."))
        
        return res.json({
            message: "User successfully retrieved!",
            user
        });
    } catch (e) {
        return next(e);
    }
}

export default {
    getAllUsers,
    createUser,
    loginUser, 
    getUserById
}