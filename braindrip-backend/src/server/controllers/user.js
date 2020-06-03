<<<<<<< HEAD
import db from "#root/db";
import generateUUID from "#root/helpers/generateUUID";
import hashPassword from "#root/helpers/hashPassword";

const { User, Favorites, LearningPath, LearningPathResource } = db;

=======
import { User, Favorites, LearningPath, LearningPathResource } from "#root/db";
import generateUUID from "#root/helpers/generateUUID";
import hashPassword from "#root/helpers/hashPassword";

>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af
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
    getUserById
}